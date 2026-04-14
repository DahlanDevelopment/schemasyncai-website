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

  try {
    const response = await fetch(
      `${KIT_API_URL}/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KIT_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          first_name: firstName || "",
          fields: {
            last_name: lastName || "",
            company: company || "",
            role: role || "",
            source: "Schema Complexity Estimator",
          },
        }),
      },
    );

    if (!response.ok) {
      console.error("Kit.com API error:", response.status, await response.text());
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kit.com submission error:", err);
    // Return success — don't block the user flow
    return NextResponse.json({ ok: true });
  }
}
