"use client";

import { useState, FormEvent } from "react";
import {
  SALESFORCE_WEB_TO_LEAD_URL,
  SALESFORCE_OID,
  SALESFORCE_CUSTOM_FIELD_ORGS,
  RETURN_URL,
  LEAD_SOURCE,
  SF_ORG_OPTIONS,
} from "@/lib/salesforce";

const inputClasses =
  "bg-navy-800 border border-white/10 text-white placeholder:text-silver-300 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none rounded-xl px-4 py-3 w-full transition-colors";

const labelClasses = "block text-sm font-medium text-silver-200 mb-2";

export default function WebToLeadForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setSubmitting(true);
  }

  return (
    <form
      action={SALESFORCE_WEB_TO_LEAD_URL}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Hidden fields */}
      <input type="hidden" name="oid" value={SALESFORCE_OID} />
      <input type="hidden" name="retURL" value={RETURN_URL} />
      <input type="hidden" name="lead_source" value={LEAD_SOURCE} />

      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className={labelClasses}>
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            placeholder="Jane"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClasses}>
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            placeholder="Doe"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className={inputClasses}
        />
      </div>

      {/* Company + Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Inc."
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="title" className={labelClasses}>
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="VP of Engineering"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          className={inputClasses}
        />
      </div>

      {/* Number of Salesforce Orgs */}
      <div>
        <label htmlFor="sf_orgs" className={labelClasses}>
          Number of Salesforce Orgs
        </label>
        <select
          id="sf_orgs"
          name={SALESFORCE_CUSTOM_FIELD_ORGS}
          className={inputClasses}
        >
          {SF_ORG_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="description" className={labelClasses}>
          Message
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Tell us about your integration needs..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-electric-blue px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-electric-blue-hover disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Request a Demo"}
      </button>
    </form>
  );
}
