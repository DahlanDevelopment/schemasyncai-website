import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildEstimatorPrompt } from "@/lib/estimator-prompt";
import type { EstimatorFormData } from "@/lib/estimator-types";

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim();
}

function sanitizeArray(arr: unknown): string[] {
  if (!Array.isArray(arr)) return [];
  return arr.map((v) => sanitize(v)).filter(Boolean);
}

function validateFormData(body: unknown): EstimatorFormData | null {
  if (!body || typeof body !== "object") return null;
  const d = body as Record<string, unknown>;

  const formData: EstimatorFormData = {
    crmSystems: sanitizeArray(d.crmSystems),
    erpSystems: sanitizeArray(d.erpSystems),
    customDatabases: sanitizeArray(d.customDatabases),
    totalDataEntities: sanitize(d.totalDataEntities),
    integrationScenario: sanitize(d.integrationScenario),
    sourceSystemCount: Math.max(1, Math.min(50, Number(d.sourceSystemCount) || 2)),
    schemaDocumentation: sanitize(d.schemaDocumentation),
    timelinePressure: sanitize(d.timelinePressure),
    previousFailedAttempts: sanitize(d.previousFailedAttempts),
    regulatoryRequirements: sanitizeArray(d.regulatoryRequirements),
    dataQuality: sanitize(d.dataQuality),
    recordVolume: sanitize(d.recordVolume),
    firstName: sanitize(d.firstName),
    lastName: sanitize(d.lastName),
    email: sanitize(d.email),
    company: sanitize(d.company),
    role: sanitize(d.role),
    peFirmName: sanitize(d.peFirmName),
  };

  // Require at least one system and basic contact info
  if (
    formData.crmSystems.length === 0 &&
    formData.erpSystems.length === 0 &&
    formData.customDatabases.length === 0
  ) {
    return null;
  }
  if (!formData.email || !formData.firstName || !formData.company) {
    return null;
  }

  return formData;
}

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please try again later." },
      { status: 429 },
    );
  }

  // Validate API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Service configuration error." },
      { status: 500 },
    );
  }

  // Parse and validate request body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const formData = validateFormData(body);
  if (!formData) {
    return NextResponse.json(
      { error: "Invalid form data. Please fill out all required fields." },
      { status: 400 },
    );
  }

  // Build prompt and call Claude
  const { system, user } = buildEstimatorPrompt(formData);
  const client = new Anthropic({ apiKey });

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system,
      messages: [{ role: "user", content: user }],
    });

    // Extract text content
    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text response from Claude");
    }

    let responseText = textBlock.text;

    // Strip markdown code fences if present
    responseText = responseText
      .replace(/^```(?:json)?\s*\n?/m, "")
      .replace(/\n?```\s*$/m, "")
      .trim();

    // Parse JSON
    let analysis;
    try {
      analysis = JSON.parse(responseText);
    } catch {
      // Try to extract JSON object from response
      const match = responseText.match(/\{[\s\S]*\}/);
      if (match) {
        analysis = JSON.parse(match[0]);
      } else {
        throw new Error("Failed to parse analysis response");
      }
    }

    return NextResponse.json(analysis);
  } catch (err) {
    console.error("Estimator API error:", err);
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 },
    );
  }
}
