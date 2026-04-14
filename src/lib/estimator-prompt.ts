import type { EstimatorFormData } from "./estimator-types";

export function buildEstimatorPrompt(data: EstimatorFormData): {
  system: string;
  user: string;
} {
  const systems: string[] = [];
  if (data.crmSystems.length > 0)
    systems.push(`CRM systems: ${data.crmSystems.join(", ")}`);
  if (data.erpSystems.length > 0)
    systems.push(`ERP/Financial systems: ${data.erpSystems.join(", ")}`);
  if (data.customDatabases.length > 0)
    systems.push(`Custom databases: ${data.customDatabases.join(", ")}`);

  const scenarioLabels: Record<string, string> = {
    "post-acquisition": "Post-Acquisition Integration",
    "platform-rollup": "Platform Rollup",
    "system-consolidation": "System Consolidation",
    "reporting-unification": "Reporting Unification",
  };

  const timelineLabels: Record<string, string> = {
    "30-days": "30 days (aggressive)",
    "60-90-days": "60-90 days",
    "6-months": "6 months",
    flexible: "Flexible timeline",
  };

  const qualityLabels: Record<string, string> = {
    clean: "Clean - well maintained",
    "mostly-clean": "Mostly clean - minor issues",
    messy: "Messy - significant quality issues",
    unknown: "Unknown",
  };

  const system = `You are a senior data integration architect with 15+ years of experience in enterprise system consolidation, M&A technology integration, and schema harmonization across CRM, ERP, and custom database systems.

You specialize in providing accurate, specific complexity assessments for PE portfolio company integrations. Your estimates are calibrated against real-world M&A integration projects.

You MUST respond with ONLY valid JSON matching the exact schema specified. No markdown, no code fences, no explanatory text outside the JSON.`;

  const user = `Analyze the following integration scenario and generate a Schema Integration Complexity Report.

## Client Integration Scenario

### Systems Involved
${systems.join("\n")}
- Approximate total data entities/objects: ${data.totalDataEntities}

### Integration Context
- Scenario: ${scenarioLabels[data.integrationScenario] || data.integrationScenario}
- Number of source systems connecting to target: ${data.sourceSystemCount}
- Existing schema documentation: ${data.schemaDocumentation === "yes" ? "Complete documentation exists" : data.schemaDocumentation === "partial" ? "Partial documentation available" : "No documentation"}
- Timeline: ${timelineLabels[data.timelinePressure] || data.timelinePressure}

### Complexity Signals
- Previous failed integration attempts: ${data.previousFailedAttempts}
- Regulatory/compliance requirements: ${data.regulatoryRequirements.join(", ") || "None"}
- Data quality across systems: ${qualityLabels[data.dataQuality] || data.dataQuality}
- Approximate record volume: ${data.recordVolume}

### Client Context
- Company: ${data.company}
- Role: ${data.role}
${data.peFirmName ? `- PE Firm: ${data.peFirmName}` : ""}

## Required Output Format

Respond with ONLY this exact JSON structure (no markdown, no code fences):

{
  "complexityScore": <number 1-10, one decimal>,
  "complexityLabel": "<Low Complexity|Moderate Complexity|High Complexity|Very High Complexity>",
  "complexityExplanation": "<2-3 sentence summary explaining the overall score>",
  "dimensionalScores": {
    "systemHeterogeneity": <1-10>,
    "dataVolume": <1-10>,
    "integrationRisk": <1-10>,
    "timelinePressure": <1-10>,
    "dataQuality": <1-10>,
    "complianceOverhead": <1-10>,
    "documentationGap": <1-10>
  },
  "riskFactors": [
    {
      "title": "<concise risk title>",
      "description": "<2-3 sentences specific to their systems and scenario>",
      "severity": "<high|medium|low>"
    }
  ],
  "effortEstimate": {
    "min": "<number>",
    "max": "<number>",
    "unit": "<weeks|months>",
    "rationale": "<1-2 sentences explaining the estimate>"
  },
  "costComparison": {
    "consultant": {
      "low": <USD number>,
      "high": <USD number>,
      "timeframe": "<e.g., 4-6 months>"
    },
    "automated": {
      "low": <USD number>,
      "high": <USD number>,
      "timeframe": "<e.g., 6-8 weeks>"
    },
    "savingsPercentage": <number 0-100>
  },
  "preIntegrationQuestions": [
    "<5 specific, actionable questions they must answer before starting>"
  ],
  "redFlags": [
    "<specific red flags suggesting hidden complexity not captured in the inputs>"
  ],
  "recommendedFirstSteps": [
    "<4-5 concrete, ordered first steps specific to their scenario>"
  ],
  "riskNarrative": "<2-3 paragraphs written in plain language explaining why this integration is complex, specific to their exact systems and scenario. Reference their specific systems by name. Include concrete examples of likely conflict points.>"
}

IMPORTANT:
- Provide exactly 3 risk factors
- Provide exactly 5 pre-integration questions
- Provide 2-4 red flags
- Provide 4-5 recommended first steps
- All cost estimates in USD
- Be specific to their exact systems — reference Salesforce, NetSuite, etc. by name
- Flag where you are making assumptions
- Cost estimates should reflect realistic 2024-2025 market rates for enterprise integration consulting`;

  return { system, user };
}
