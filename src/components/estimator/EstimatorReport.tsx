"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import ScoreGauge from "./ScoreGauge";
import DimensionalScores from "./DimensionalScores";
import RiskFactors from "./RiskFactors";
import CostComparison from "./CostComparison";
import RecommendationsList from "./RecommendationsList";
import { generateEstimatorPDF } from "@/lib/estimator-pdf";
import { fadeInUp } from "@/lib/animations";
import type { EstimatorAnalysis, EstimatorFormData } from "@/lib/estimator-types";

interface EstimatorReportProps {
  analysis: EstimatorAnalysis;
  formData: EstimatorFormData;
}

export default function EstimatorReport({
  analysis,
  formData,
}: EstimatorReportProps) {
  function handleDownloadPDF() {
    generateEstimatorPDF(analysis, formData);
  }

  return (
    <div className="space-y-10">
      {/* Header with PDF download */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold text-white">
            Schema Complexity Report
          </h2>
          <p className="text-silver-300 mt-1">
            Prepared for {formData.firstName} {formData.lastName} at{" "}
            {formData.company}
          </p>
        </div>
        <Button variant="ghost" onClick={handleDownloadPDF} size="sm">
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </span>
        </Button>
      </motion.div>

      {/* Complexity Score + Dimensional Breakdown */}
      <GlassCard className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScoreGauge
            score={analysis.complexityScore}
            label={analysis.complexityLabel}
          />
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Complexity Breakdown
            </h3>
            <DimensionalScores scores={analysis.dimensionalScores} />
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-silver-200 leading-relaxed">
            {analysis.complexityExplanation}
          </p>
        </div>
      </GlassCard>

      <Divider />

      {/* Risk Narrative */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-white mb-4">Risk Assessment</h3>
        <GlassCard className="p-6">
          <div className="prose prose-invert max-w-none">
            {analysis.riskNarrative.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-silver-200 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Risk Factors */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Top Risk Factors</h3>
        <RiskFactors risks={analysis.riskFactors} />
      </div>

      <Divider />

      {/* Effort Estimate */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-white mb-4">Effort Estimate</h3>
        <GlassCard className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                {analysis.effortEstimate.min} - {analysis.effortEstimate.max}{" "}
                {analysis.effortEstimate.unit}
              </p>
              <p className="text-silver-300 mt-1">
                {analysis.effortEstimate.rationale}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Cost Comparison */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Cost Comparison</h3>
        <CostComparison
          consultant={analysis.costComparison.consultant}
          automated={analysis.costComparison.automated}
          savingsPercentage={analysis.costComparison.savingsPercentage}
        />
      </div>

      <Divider />

      {/* Questions, Red Flags, Next Steps */}
      <RecommendationsList
        questions={analysis.preIntegrationQuestions}
        redFlags={analysis.redFlags}
        nextSteps={analysis.recommendedFirstSteps}
      />

      <Divider />

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <GlassCard className="p-8 text-center" gradient>
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Go Deeper?
          </h3>
          <p className="text-silver-300 mb-6 max-w-xl mx-auto">
            SchemaSync.AI can run an actual schema analysis on your systems and
            produce a detailed migration plan in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Start a Pilot
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
