import type { NavItem, Feature, PricingTier, Stat, FAQ, SolutionSegment } from "@/types";

export const SITE_NAME = "SchemaSync.AI";
export const SITE_URL = "https://schemasync.ai";
export const SITE_DESCRIPTION =
  "AI-powered Salesforce schema integration mapper for M&A. Unify CRM instances post-acquisition with intelligent schema harmonization, conflict detection, and migration planning.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Estimator", href: "/estimator" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const FEATURES: Feature[] = [
  {
    title: "Schema Extraction",
    description:
      "Connect to any Salesforce org and extract the complete schema metadata — objects, fields, relationships, validation rules, and custom configurations.",
    icon: "extract",
    details: [
      "SFDX-powered metadata extraction",
      "Complete object and field mapping",
      "Relationship dependency graphs",
      "Custom object and field detection",
    ],
  },
  {
    title: "Conflict Analysis",
    description:
      "AI-powered detection of schema conflicts, data type mismatches, and naming collisions across multiple Salesforce orgs.",
    icon: "analyze",
    details: [
      "Automated conflict detection",
      "Severity-scored risk assessment",
      "Field-level compatibility analysis",
      "Data volume impact estimation",
    ],
  },
  {
    title: "Migration Planning",
    description:
      "Generate phased migration roadmaps with dependency ordering, risk mitigation strategies, and effort estimations.",
    icon: "migrate",
    details: [
      "Dependency-aware phase planning",
      "Risk-scored migration steps",
      "Effort and timeline estimation",
      "Rollback strategy generation",
    ],
  },
  {
    title: "Executive Reporting",
    description:
      "Produce board-ready PDF reports with executive summaries, technical details, and visual dashboards for stakeholder alignment.",
    icon: "report",
    details: [
      "Professional PDF generation",
      "Executive summary dashboards",
      "Technical conflict breakdowns",
      "JSON data export for integration",
    ],
  },
];

export const STATS: Stat[] = [
  { value: "10,000+", label: "Schema Objects Harmonized" },
  { value: "95%", label: "Conflict Detection Accuracy" },
  { value: "60%", label: "Faster Integration Timelines" },
  { value: "50+", label: "M&A Integrations Powered" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect Your Orgs",
    description:
      "Securely connect your Salesforce orgs via SFDX. SchemaSync.AI extracts complete schema metadata from both the acquiring and target organizations.",
  },
  {
    step: "02",
    title: "Analyze & Map",
    description:
      "Our AI engine compares schemas across orgs, identifies conflicts, categorizes differences, and maps field-level compatibility with severity scoring.",
  },
  {
    step: "03",
    title: "Plan & Execute",
    description:
      "Receive a phased migration roadmap with dependency ordering, risk mitigation strategies, and executive-ready PDF reports for stakeholder sign-off.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Assessment",
    description:
      "One-time schema analysis and conflict report for a single acquisition.",
    features: [
      "2 Salesforce org analysis",
      "Complete schema extraction",
      "Conflict detection report",
      "Executive summary PDF",
      "JSON data export",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Integration",
    description:
      "Full harmonization and migration planning for multi-org consolidation.",
    features: [
      "Up to 10 Salesforce orgs",
      "Everything in Assessment",
      "Migration roadmap generation",
      "Phased migration planning",
      "Risk mitigation strategies",
      "Dedicated integration support",
    ],
    highlighted: true,
    cta: "Contact Sales",
  },
  {
    name: "Enterprise",
    description:
      "Ongoing platform access for PE firms with multiple portfolio companies.",
    features: [
      "Unlimited Salesforce orgs",
      "Everything in Integration",
      "Portfolio-wide dashboard",
      "API access",
      "Custom report templates",
      "Priority support & SLA",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
  },
];

export const SOLUTIONS: SolutionSegment[] = [
  {
    title: "For Private Equity Firms",
    audience: "PE Operating Partners & Technology Teams",
    description:
      "Standardize Salesforce across your entire portfolio. Accelerate post-acquisition value creation by eliminating CRM integration as a bottleneck in your deal thesis execution.",
    painPoints: [
      "Portfolio companies on incompatible Salesforce configurations",
      "Months-long CRM integration timelines delaying synergy realization",
      "Lack of visibility into schema complexity during due diligence",
      "Inconsistent reporting across portfolio companies",
    ],
    outcomes: [
      "60% faster Salesforce integration timelines",
      "Pre-close schema assessment for accurate integration budgeting",
      "Standardized CRM architecture across the portfolio",
      "Board-ready integration progress reports",
    ],
  },
  {
    title: "For M&A Advisory",
    audience: "Integration Consultants & Technical Due Diligence Teams",
    description:
      "Deliver deeper technical due diligence with quantified CRM integration risk. Provide clients with actionable migration roadmaps before the deal closes.",
    painPoints: [
      "Manual schema comparison across dozens of objects",
      "Inability to accurately estimate integration timelines",
      "Risk of post-close surprises from hidden schema conflicts",
      "Time-intensive documentation of technical findings",
    ],
    outcomes: [
      "Automated schema conflict detection in hours, not weeks",
      "Quantified integration risk scores for deal evaluation",
      "Phased migration roadmaps with effort estimates",
      "Professional deliverables that elevate your advisory value",
    ],
  },
  {
    title: "For Portfolio Companies",
    audience: "Salesforce Admins & IT Leaders",
    description:
      "Navigate post-merger Salesforce consolidation with confidence. Get a clear roadmap from day one with AI-powered analysis that accounts for every custom object, field, and relationship.",
    painPoints: [
      "Inheriting an unfamiliar Salesforce org with undocumented customizations",
      "Fear of data loss during migration",
      "Business disruption from poorly planned CRM changes",
      "Resource constraints for large-scale integration projects",
    ],
    outcomes: [
      "Complete inventory of both orgs' Salesforce configurations",
      "Dependency-aware migration plans preventing data loss",
      "Phased approach minimizing business disruption",
      "Clear documentation for change management",
    ],
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How does SchemaSync.AI connect to our Salesforce orgs?",
    answer:
      "SchemaSync.AI uses SFDX (Salesforce DX) to securely connect and extract metadata. We only read schema metadata — no customer data is accessed or stored. Connections use OAuth 2.0 and can be revoked at any time.",
  },
  {
    question: "How long does a typical schema analysis take?",
    answer:
      "A standard two-org analysis with conflict detection and report generation typically completes in under 2 hours. Complex multi-org assessments with migration planning may take up to a business day.",
  },
  {
    question: "What Salesforce editions are supported?",
    answer:
      "SchemaSync.AI supports all Salesforce editions that offer API access, including Enterprise, Unlimited, and Performance editions. Developer and sandbox orgs are also fully supported for testing.",
  },
  {
    question: "Is our Salesforce data safe?",
    answer:
      "Absolutely. SchemaSync.AI only accesses schema metadata (object and field definitions, relationships, validation rules). We never access, process, or store your actual business data or records.",
  },
  {
    question: "Can SchemaSync.AI handle custom objects and managed packages?",
    answer:
      "Yes. Our analysis covers standard objects, custom objects, managed package components, and all field types including formula fields, roll-up summaries, and cross-object relationships.",
  },
  {
    question: "Do you offer a proof-of-concept or trial?",
    answer:
      "Yes. We offer a complimentary Assessment for qualified PE firms to demonstrate the value on a real acquisition scenario. Contact our sales team to discuss your specific needs.",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Precision",
    description:
      "Every schema conflict detected. Every dependency mapped. We leave nothing to chance in your M&A integration.",
  },
  {
    title: "Security",
    description:
      "Enterprise-grade data handling. We access only metadata — never your business data. SOC 2 compliance in progress.",
  },
  {
    title: "Speed",
    description:
      "What takes consultants weeks, we deliver in hours. AI-powered analysis that accelerates your deal timelines.",
  },
  {
    title: "Expertise",
    description:
      "Built by professionals who've lived through M&A integrations. We understand the stakes and the nuance.",
  },
];
