import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GridBackground from "@/components/ui/GridBackground";
import SectionHeading from "@/components/ui/SectionHeading";
import EstimatorWizard from "@/components/estimator/EstimatorWizard";

export const metadata: Metadata = {
  title: "Schema Complexity Estimator",
  description:
    "Get an instant, AI-generated assessment of your schema integration complexity. Free tool for PE Operating Partners, portco CTOs, and IT leaders.",
  openGraph: {
    title: "Schema Complexity Estimator | SchemaSync.AI",
    description:
      "Estimate your schema integration complexity in 5 minutes. Get a detailed report with risk factors, cost estimates, and recommendations.",
  },
};

export default function EstimatorPage() {
  return (
    <GridBackground variant="dots" className="min-h-screen bg-navy-950">
      <section className="pt-32 pb-24">
        <Container>
          <SectionHeading
            label="Free Assessment"
            title="Estimate Your Schema Complexity"
            subtitle="Answer a few questions about your integration scenario and get an instant, AI-powered complexity report with risk factors, cost estimates, and actionable recommendations."
          />
          <div className="mt-12">
            <EstimatorWizard />
          </div>
        </Container>
      </section>
    </GridBackground>
  );
}
