"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp } from "@/lib/animations";

interface CostComparisonProps {
  consultant: { low: number; high: number; timeframe: string };
  automated: { low: number; high: number; timeframe: string };
  savingsPercentage: number;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CostComparison({
  consultant,
  automated,
  savingsPercentage,
}: CostComparisonProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Consultant approach */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-silver-300/10 text-silver-300">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-white font-semibold">Traditional Consulting</h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-silver-300 uppercase tracking-wider">
                Estimated Cost
              </p>
              <p className="text-2xl font-bold text-white">
                {formatCurrency(consultant.low)} -{" "}
                {formatCurrency(consultant.high)}
              </p>
            </div>
            <div>
              <p className="text-xs text-silver-300 uppercase tracking-wider">
                Timeframe
              </p>
              <p className="text-lg text-silver-200">{consultant.timeframe}</p>
            </div>
          </div>
        </GlassCard>

        {/* Automated approach */}
        <GlassCard className="p-6 border-electric-blue/20" gradient>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-white font-semibold">
              Automated with SchemaSync
            </h4>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-silver-300 uppercase tracking-wider">
                Estimated Cost
              </p>
              <p className="text-2xl font-bold text-electric-blue">
                {formatCurrency(automated.low)} -{" "}
                {formatCurrency(automated.high)}
              </p>
            </div>
            <div>
              <p className="text-xs text-silver-300 uppercase tracking-wider">
                Timeframe
              </p>
              <p className="text-lg text-silver-200">{automated.timeframe}</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Savings callout */}
      <div className="mt-4 text-center">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 px-6 py-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <svg
            className="h-5 w-5 text-electric-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="text-electric-blue font-semibold">
            Up to {savingsPercentage}% cost savings
          </span>
          <span className="text-silver-300">with the automated approach</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
