"use client";

import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import type { SystemsData } from "@/lib/estimator-types";
import {
  CRM_OPTIONS,
  ERP_OPTIONS,
  DATABASE_OPTIONS,
  ENTITY_COUNT_OPTIONS,
} from "@/lib/estimator-types";

interface StepSystemsProps {
  data: SystemsData;
  onChange: (data: Partial<SystemsData>) => void;
  errors: Record<string, string>;
}

export default function StepSystems({
  data,
  onChange,
  errors,
}: StepSystemsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Your Systems</h2>
        <p className="text-silver-300">
          Tell us about the systems involved in your integration. Select all that
          apply.
        </p>
      </div>

      <MultiSelect
        label="CRM Systems"
        options={CRM_OPTIONS}
        selected={data.crmSystems}
        onChange={(v) => onChange({ crmSystems: v })}
        error={errors.crmSystems}
      />

      <MultiSelect
        label="ERP / Financial Systems"
        options={ERP_OPTIONS}
        selected={data.erpSystems}
        onChange={(v) => onChange({ erpSystems: v })}
        error={errors.erpSystems}
      />

      <MultiSelect
        label="Custom Databases"
        options={DATABASE_OPTIONS}
        selected={data.customDatabases}
        onChange={(v) => onChange({ customDatabases: v })}
        error={errors.customDatabases}
      />

      <SingleSelect
        label="Approximate Total Data Entities / Objects"
        options={ENTITY_COUNT_OPTIONS}
        selected={data.totalDataEntities}
        onChange={(v) => onChange({ totalDataEntities: v })}
        error={errors.totalDataEntities}
      />
    </div>
  );
}
