// Form data per section
export interface SystemsData {
  crmSystems: string[];
  erpSystems: string[];
  customDatabases: string[];
  totalDataEntities: string;
}

export interface IntegrationContextData {
  integrationScenario: string;
  sourceSystemCount: number;
  schemaDocumentation: string;
  timelinePressure: string;
}

export interface ComplexitySignalsData {
  previousFailedAttempts: string;
  regulatoryRequirements: string[];
  dataQuality: string;
  recordVolume: string;
}

export interface LeadCaptureData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  peFirmName: string;
}

export type EstimatorFormData = SystemsData &
  IntegrationContextData &
  ComplexitySignalsData &
  LeadCaptureData;

// Claude API response
export interface EstimatorAnalysis {
  complexityScore: number;
  complexityLabel: string;
  complexityExplanation: string;
  dimensionalScores: {
    systemHeterogeneity: number;
    dataVolume: number;
    integrationRisk: number;
    timelinePressure: number;
    dataQuality: number;
    complianceOverhead: number;
    documentationGap: number;
  };
  riskFactors: Array<{
    title: string;
    description: string;
    severity: "high" | "medium" | "low";
  }>;
  effortEstimate: {
    min: string;
    max: string;
    unit: string;
    rationale: string;
  };
  costComparison: {
    consultant: { low: number; high: number; timeframe: string };
    automated: { low: number; high: number; timeframe: string };
    savingsPercentage: number;
  };
  preIntegrationQuestions: string[];
  redFlags: string[];
  recommendedFirstSteps: string[];
  riskNarrative: string;
}

// Wizard state
export type WizardStep = 0 | 1 | 2 | 3 | 4 | 5;

export interface WizardState {
  currentStep: WizardStep;
  formData: EstimatorFormData;
  analysis: EstimatorAnalysis | null;
  error: string | null;
  isSubmitting: boolean;
}

export type WizardAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; step: WizardStep }
  | { type: "UPDATE_FORM"; data: Partial<EstimatorFormData> }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS"; analysis: EstimatorAnalysis }
  | { type: "SUBMIT_ERROR"; error: string }
  | { type: "RESET" };

// Form options
export const CRM_OPTIONS = [
  "Salesforce",
  "HubSpot",
  "Microsoft Dynamics",
  "Zoho CRM",
  "Pipedrive",
  "Custom CRM",
  "Other",
];

export const ERP_OPTIONS = [
  "NetSuite",
  "SAP",
  "QuickBooks",
  "Xero",
  "Oracle ERP",
  "Microsoft Dynamics 365 F&O",
  "Sage",
  "Custom ERP",
  "Other",
];

export const DATABASE_OPTIONS = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQL Server",
  "Oracle DB",
  "DynamoDB",
  "Redis",
  "Snowflake",
  "BigQuery",
  "Custom / Other",
];

export const ENTITY_COUNT_OPTIONS = [
  { value: "<50", label: "Less than 50" },
  { value: "50-200", label: "50 - 200" },
  { value: "200-500", label: "200 - 500" },
  { value: "500+", label: "500+" },
];

export const SCENARIO_OPTIONS = [
  { value: "post-acquisition", label: "Post-Acquisition Integration" },
  { value: "platform-rollup", label: "Platform Rollup" },
  { value: "system-consolidation", label: "System Consolidation" },
  { value: "reporting-unification", label: "Reporting Unification" },
];

export const DOCUMENTATION_OPTIONS = [
  { value: "yes", label: "Yes - Complete documentation exists" },
  { value: "partial", label: "Partial - Some documentation available" },
  { value: "no", label: "No - No documentation" },
];

export const TIMELINE_OPTIONS = [
  { value: "30-days", label: "30 days" },
  { value: "60-90-days", label: "60 - 90 days" },
  { value: "6-months", label: "6 months" },
  { value: "flexible", label: "Flexible" },
];

export const FAILED_ATTEMPTS_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "partial", label: "Partially - some progress was made" },
];

export const COMPLIANCE_OPTIONS = [
  "HIPAA",
  "SOX",
  "GDPR",
  "CCPA",
  "PCI DSS",
  "SOC 2",
  "None",
];

export const DATA_QUALITY_OPTIONS = [
  { value: "clean", label: "Clean - Well maintained" },
  { value: "mostly-clean", label: "Mostly Clean - Minor issues" },
  { value: "messy", label: "Messy - Significant quality issues" },
  { value: "unknown", label: "Unknown" },
];

export const RECORD_VOLUME_OPTIONS = [
  { value: "<100K", label: "Less than 100K" },
  { value: "100K-1M", label: "100K - 1M" },
  { value: "1M-10M", label: "1M - 10M" },
  { value: "10M+", label: "10M+" },
];

export const INITIAL_FORM_DATA: EstimatorFormData = {
  crmSystems: [],
  erpSystems: [],
  customDatabases: [],
  totalDataEntities: "",
  integrationScenario: "",
  sourceSystemCount: 2,
  schemaDocumentation: "",
  timelinePressure: "",
  previousFailedAttempts: "",
  regulatoryRequirements: [],
  dataQuality: "",
  recordVolume: "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  peFirmName: "",
};
