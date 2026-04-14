"use client";

import { useReducer, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import StepProgress from "./StepProgress";
import StepSystems from "./StepSystems";
import StepIntegrationContext from "./StepIntegrationContext";
import StepComplexitySignals from "./StepComplexitySignals";
import StepLeadCapture from "./StepLeadCapture";
import AnalysisLoading from "./AnalysisLoading";

const EstimatorReport = dynamic(() => import("./EstimatorReport"), {
  ssr: false,
});
import {
  SALESFORCE_WEB_TO_LEAD_URL,
  SALESFORCE_OID,
  LEAD_SOURCE,
} from "@/lib/salesforce";
import type {
  WizardState,
  WizardAction,
  WizardStep,
  EstimatorFormData,
  EstimatorAnalysis,
} from "@/lib/estimator-types";
import { INITIAL_FORM_DATA } from "@/lib/estimator-types";

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 5) as WizardStep,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0) as WizardStep,
      };
    case "GO_TO_STEP":
      return { ...state, currentStep: action.step };
    case "UPDATE_FORM":
      return {
        ...state,
        formData: { ...state.formData, ...action.data },
      };
    case "SUBMIT_START":
      return { ...state, isSubmitting: true, error: null, currentStep: 4 };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        analysis: action.analysis,
        currentStep: 5,
      };
    case "SUBMIT_ERROR":
      return {
        ...state,
        isSubmitting: false,
        error: action.error,
        currentStep: 3,
      };
    case "RESET":
      return {
        currentStep: 0,
        formData: INITIAL_FORM_DATA,
        analysis: null,
        error: null,
        isSubmitting: false,
      };
    default:
      return state;
  }
}

const initialState: WizardState = {
  currentStep: 0,
  formData: INITIAL_FORM_DATA,
  analysis: null,
  error: null,
  isSubmitting: false,
};

type ValidationErrors = Record<string, string>;

function validateStep(step: number, data: EstimatorFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  switch (step) {
    case 0:
      if (
        data.crmSystems.length === 0 &&
        data.erpSystems.length === 0 &&
        data.customDatabases.length === 0
      ) {
        errors.crmSystems = "Select at least one system from any category";
      }
      if (!data.totalDataEntities) {
        errors.totalDataEntities = "Please select an approximate entity count";
      }
      break;
    case 1:
      if (!data.integrationScenario) {
        errors.integrationScenario = "Please select an integration scenario";
      }
      if (!data.schemaDocumentation) {
        errors.schemaDocumentation = "Please select a documentation level";
      }
      if (!data.timelinePressure) {
        errors.timelinePressure = "Please select a timeline";
      }
      break;
    case 2:
      if (!data.previousFailedAttempts) {
        errors.previousFailedAttempts = "Please select an option";
      }
      if (data.regulatoryRequirements.length === 0) {
        errors.regulatoryRequirements =
          'Please select at least one option (or "None")';
      }
      if (!data.dataQuality) {
        errors.dataQuality = "Please select data quality level";
      }
      if (!data.recordVolume) {
        errors.recordVolume = "Please select record volume";
      }
      break;
    case 3:
      if (!data.firstName.trim()) errors.firstName = "First name is required";
      if (!data.lastName.trim()) errors.lastName = "Last name is required";
      if (!data.email.trim()) errors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email";
      if (!data.company.trim()) errors.company = "Company is required";
      if (!data.role.trim()) errors.role = "Role is required";
      break;
  }

  return errors;
}

export default function EstimatorWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  const sfFormRef = useRef<HTMLFormElement>(null);
  const sfIframeRef = useRef<HTMLIFrameElement>(null);
  const errorsRef = useRef<ValidationErrors>({});

  const { currentStep, formData, analysis, error } = state;

  const handleFormUpdate = useCallback(
    (data: Partial<EstimatorFormData>) => {
      dispatch({ type: "UPDATE_FORM", data });
    },
    [],
  );

  function handleNext() {
    const validationErrors = validateStep(currentStep, formData);
    errorsRef.current = validationErrors;

    if (Object.keys(validationErrors).length > 0) {
      // Force re-render to show errors
      dispatch({ type: "UPDATE_FORM", data: {} });
      return;
    }

    errorsRef.current = {};

    if (currentStep === 3) {
      handleSubmit();
    } else {
      dispatch({ type: "NEXT_STEP" });
    }
  }

  function handleBack() {
    errorsRef.current = {};
    dispatch({ type: "PREV_STEP" });
  }

  async function handleSubmit() {
    dispatch({ type: "SUBMIT_START" });

    // Fire all three submissions in parallel
    const claudePromise = fetch("/api/estimator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Kit.com submission (fire-and-forget)
    fetch("/api/kit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        role: formData.role,
      }),
    }).catch(() => {
      // Silent failure for Kit.com
    });

    // Salesforce Web-to-Lead via hidden iframe
    if (sfFormRef.current) {
      try {
        sfFormRef.current.submit();
      } catch {
        // Silent failure for Salesforce
      }
    }

    try {
      const response = await claudePromise;
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Analysis failed. Please try again.",
        );
      }
      const analysisResult: EstimatorAnalysis = await response.json();
      dispatch({ type: "SUBMIT_SUCCESS", analysis: analysisResult });
    } catch (err) {
      dispatch({
        type: "SUBMIT_ERROR",
        error:
          err instanceof Error ? err.message : "An unexpected error occurred.",
      });
    }
  }

  // Build a description string for the Salesforce lead
  const sfDescription = `Schema Complexity Estimator Submission:
CRM: ${formData.crmSystems.join(", ") || "None"}
ERP: ${formData.erpSystems.join(", ") || "None"}
Databases: ${formData.customDatabases.join(", ") || "None"}
Entities: ${formData.totalDataEntities}
Scenario: ${formData.integrationScenario}
Timeline: ${formData.timelinePressure}
Data Quality: ${formData.dataQuality}
Record Volume: ${formData.recordVolume}
PE Firm: ${formData.peFirmName || "Not specified"}`;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hidden Salesforce iframe and form */}
      <iframe
        ref={sfIframeRef}
        name="sf-estimator-frame"
        title="Salesforce submission"
        className="hidden"
      />
      <form
        ref={sfFormRef}
        action={SALESFORCE_WEB_TO_LEAD_URL}
        method="POST"
        target="sf-estimator-frame"
        className="hidden"
      >
        <input type="hidden" name="oid" value={SALESFORCE_OID} />
        <input
          type="hidden"
          name="retURL"
          value="https://schemasync.ai/thank-you"
        />
        <input type="hidden" name="lead_source" value="Estimator Tool" />
        <input
          type="hidden"
          name="first_name"
          value={formData.firstName}
        />
        <input
          type="hidden"
          name="last_name"
          value={formData.lastName}
        />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="company" value={formData.company} />
        <input type="hidden" name="title" value={formData.role} />
        <input type="hidden" name="description" value={sfDescription} />
      </form>

      {/* Report view */}
      {currentStep === 5 && analysis && (
        <EstimatorReport analysis={analysis} formData={formData} />
      )}

      {/* Loading view */}
      {currentStep === 4 && (
        <GlassCard className="p-8">
          <AnalysisLoading />
        </GlassCard>
      )}

      {/* Form view */}
      {currentStep <= 3 && (
        <>
          <StepProgress currentStep={currentStep} />
          <GlassCard className="p-8">
            {error && (
              <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <StepSystems
                    data={formData}
                    onChange={handleFormUpdate}
                    errors={errorsRef.current}
                  />
                )}
                {currentStep === 1 && (
                  <StepIntegrationContext
                    data={formData}
                    onChange={handleFormUpdate}
                    errors={errorsRef.current}
                  />
                )}
                {currentStep === 2 && (
                  <StepComplexitySignals
                    data={formData}
                    onChange={handleFormUpdate}
                    errors={errorsRef.current}
                  />
                )}
                {currentStep === 3 && (
                  <StepLeadCapture
                    data={formData}
                    onChange={handleFormUpdate}
                    errors={errorsRef.current}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              {currentStep > 0 ? (
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              <Button variant="primary" onClick={handleNext}>
                {currentStep === 3
                  ? "Get Your Complexity Report"
                  : "Next"}
              </Button>
            </div>
          </GlassCard>
        </>
      )}
    </div>
  );
}
