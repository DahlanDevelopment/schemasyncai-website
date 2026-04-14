"use client";

import SingleSelect from "./SingleSelect";
import type { IntegrationContextData } from "@/lib/estimator-types";
import {
  SCENARIO_OPTIONS,
  DOCUMENTATION_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/estimator-types";

const inputClasses =
  "bg-navy-800 border border-white/10 text-white placeholder:text-silver-300 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none rounded-xl px-4 py-3 w-full transition-colors";

interface StepIntegrationContextProps {
  data: IntegrationContextData;
  onChange: (data: Partial<IntegrationContextData>) => void;
  errors: Record<string, string>;
}

export default function StepIntegrationContext({
  data,
  onChange,
  errors,
}: StepIntegrationContextProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Integration Context
        </h2>
        <p className="text-silver-300">
          Help us understand the scope and urgency of your integration project.
        </p>
      </div>

      <SingleSelect
        label="What is the integration scenario?"
        options={SCENARIO_OPTIONS}
        selected={data.integrationScenario}
        onChange={(v) => onChange({ integrationScenario: v })}
        columns={1}
        error={errors.integrationScenario}
      />

      <div>
        <label className="block text-sm font-medium text-silver-200 mb-3">
          How many source systems need to connect to one target?
        </label>
        <input
          type="number"
          min={1}
          max={50}
          value={data.sourceSystemCount}
          onChange={(e) =>
            onChange({ sourceSystemCount: parseInt(e.target.value) || 1 })
          }
          className={inputClasses}
        />
        {errors.sourceSystemCount && (
          <p className="mt-2 text-sm text-red-400">
            {errors.sourceSystemCount}
          </p>
        )}
      </div>

      <SingleSelect
        label="Is there existing schema documentation?"
        options={DOCUMENTATION_OPTIONS}
        selected={data.schemaDocumentation}
        onChange={(v) => onChange({ schemaDocumentation: v })}
        columns={1}
        error={errors.schemaDocumentation}
      />

      <SingleSelect
        label="Timeline pressure"
        options={TIMELINE_OPTIONS}
        selected={data.timelinePressure}
        onChange={(v) => onChange({ timelinePressure: v })}
        error={errors.timelinePressure}
      />
    </div>
  );
}
