"use client";

import type { LeadCaptureData } from "@/lib/estimator-types";

const inputClasses =
  "bg-navy-800 border border-white/10 text-white placeholder:text-silver-300 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none rounded-xl px-4 py-3 w-full transition-colors";
const labelClasses = "block text-sm font-medium text-silver-200 mb-2";

interface StepLeadCaptureProps {
  data: LeadCaptureData;
  onChange: (data: Partial<LeadCaptureData>) => void;
  errors: Record<string, string>;
}

export default function StepLeadCapture({
  data,
  onChange,
  errors,
}: StepLeadCaptureProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Get Your Report
        </h2>
        <p className="text-silver-300">
          Enter your details to receive your personalized Schema Complexity
          Report.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="est_first_name" className={labelClasses}>
              First Name *
            </label>
            <input
              id="est_first_name"
              type="text"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              placeholder="Jane"
              className={inputClasses}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="est_last_name" className={labelClasses}>
              Last Name *
            </label>
            <input
              id="est_last_name"
              type="text"
              value={data.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              placeholder="Doe"
              className={inputClasses}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="est_email" className={labelClasses}>
            Work Email *
          </label>
          <input
            id="est_email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="jane@company.com"
            className={inputClasses}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="est_company" className={labelClasses}>
              Company *
            </label>
            <input
              id="est_company"
              type="text"
              value={data.company}
              onChange={(e) => onChange({ company: e.target.value })}
              placeholder="Acme Inc."
              className={inputClasses}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-400">{errors.company}</p>
            )}
          </div>
          <div>
            <label htmlFor="est_role" className={labelClasses}>
              Role *
            </label>
            <input
              id="est_role"
              type="text"
              value={data.role}
              onChange={(e) => onChange({ role: e.target.value })}
              placeholder="VP of Engineering"
              className={inputClasses}
            />
            {errors.role && (
              <p className="mt-1 text-sm text-red-400">{errors.role}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="est_pe_firm" className={labelClasses}>
            PE Firm (optional)
          </label>
          <input
            id="est_pe_firm"
            type="text"
            value={data.peFirmName}
            onChange={(e) => onChange({ peFirmName: e.target.value })}
            placeholder="e.g., Vista Equity Partners"
            className={inputClasses}
          />
          <p className="mt-1 text-xs text-silver-300">
            If your company is owned by a PE firm, this helps us tailor the
            report.
          </p>
        </div>
      </div>
    </div>
  );
}
