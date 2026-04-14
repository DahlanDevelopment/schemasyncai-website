"use client";

import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import type { ComplexitySignalsData } from "@/lib/estimator-types";
import {
  FAILED_ATTEMPTS_OPTIONS,
  COMPLIANCE_OPTIONS,
  DATA_QUALITY_OPTIONS,
  RECORD_VOLUME_OPTIONS,
} from "@/lib/estimator-types";

interface StepComplexitySignalsProps {
  data: ComplexitySignalsData;
  onChange: (data: Partial<ComplexitySignalsData>) => void;
  errors: Record<string, string>;
}

export default function StepComplexitySignals({
  data,
  onChange,
  errors,
}: StepComplexitySignalsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Complexity Signals
        </h2>
        <p className="text-silver-300">
          These factors significantly impact integration complexity and risk.
        </p>
      </div>

      <SingleSelect
        label="Have there been previous failed integration attempts?"
        options={FAILED_ATTEMPTS_OPTIONS}
        selected={data.previousFailedAttempts}
        onChange={(v) => onChange({ previousFailedAttempts: v })}
        columns={1}
        error={errors.previousFailedAttempts}
      />

      <MultiSelect
        label="Regulatory or compliance requirements on the data"
        options={COMPLIANCE_OPTIONS}
        selected={data.regulatoryRequirements}
        onChange={(v) => onChange({ regulatoryRequirements: v })}
        error={errors.regulatoryRequirements}
      />

      <SingleSelect
        label="How consistent is data quality across systems?"
        options={DATA_QUALITY_OPTIONS}
        selected={data.dataQuality}
        onChange={(v) => onChange({ dataQuality: v })}
        columns={1}
        error={errors.dataQuality}
      />

      <SingleSelect
        label="Approximate total record volume"
        options={RECORD_VOLUME_OPTIONS}
        selected={data.recordVolume}
        onChange={(v) => onChange({ recordVolume: v })}
        error={errors.recordVolume}
      />
    </div>
  );
}
