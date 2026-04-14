import { NextResponse } from "next/server";
import { KIT_API_URL, KIT_API_KEY, KIT_FORM_ID } from "@/lib/kit";

export async function POST(request: Request) {
  if (!KIT_API_KEY || !KIT_FORM_ID) {
    // Kit.com not configured — silently succeed
    return NextResponse.json({ ok: true });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, firstName, lastName, company, role } = body;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": KIT_API_KEY,
  };

  try {
    // Step 1: Create (or update) the subscriber with custom fields
    const createRes = await fetch(`${KIT_API_URL}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email_address: email,
        first_name: firstName || "",
        fields: {
          "Last name": lastName || "",
          "Company": company || "",
          "Role": role || "",
          "Source": "Schema Complexity Estimator",
        },
      }),
    });

    if (!createRes.ok) {
      console.error("Kit.com create subscriber error:", createRes.status, await createRes.text());
      return NextResponse.json({ ok: true });
    }

    // Step 2: Add the subscriber to the form
    const formRes = await fetch(
      `${KIT_API_URL}/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ email_address: email }),
      },
    );

    if (!formRes.ok) {
      console.error("Kit.com add to form error:", formRes.status, await formRes.text());
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kit.com submission error:", err);
    // Return success — don't block the user flow
    return NextResponse.json({ ok: true });
  }
}
