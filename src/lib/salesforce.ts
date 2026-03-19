export const SALESFORCE_WEB_TO_LEAD_URL =
  "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

export const SALESFORCE_OID =
  process.env.NEXT_PUBLIC_SALESFORCE_OID || "00DXXXXXXXXXXXXXXX";

export const SALESFORCE_CUSTOM_FIELD_ORGS =
  process.env.NEXT_PUBLIC_SALESFORCE_CUSTOM_FIELD_ORGS || "00NXX000000XXXX";

export const RETURN_URL = "https://schemasync.ai/thank-you";

export const LEAD_SOURCE = "Website";

export const SF_ORG_OPTIONS = [
  { value: "", label: "Select..." },
  { value: "1-5", label: "1-5 orgs" },
  { value: "6-10", label: "6-10 orgs" },
  { value: "11-20", label: "11-20 orgs" },
  { value: "20+", label: "20+ orgs" },
];
