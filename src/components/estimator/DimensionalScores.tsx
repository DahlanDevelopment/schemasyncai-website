"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface DimensionalScoresProps {
  scores: {
    systemHeterogeneity: number;
    dataVolume: number;
    integrationRisk: number;
    timelinePressure: number;
    dataQuality: number;
    complianceOverhead: number;
    documentationGap: number;
  };
}

const DIMENSION_LABELS: Record<string, string> = {
  systemHeterogeneity: "System Heterogeneity",
  dataVolume: "Data Volume",
  integrationRisk: "Integration Risk",
  timelinePressure: "Timeline Pressure",
  dataQuality: "Data Quality Risk",
  complianceOverhead: "Compliance Overhead",
  documentationGap: "Documentation Gap",
};

function getBarColor(score: number): string {
  if (score <= 3) return "bg-green-500";
  if (score <= 6) return "bg-yellow-500";
  return "bg-red-500";
}

export default function DimensionalScores({
  scores,
}: DimensionalScoresProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {Object.entries(scores).map(([key, value]) => (
        <motion.div key={key} variants={staggerItem}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-silver-200">
              {DIMENSION_LABELS[key] || key}
            </span>
            <span className="text-silver-300 font-medium">{value}/10</span>
          </div>
          <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${getBarColor(value)}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${(value / 10) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
