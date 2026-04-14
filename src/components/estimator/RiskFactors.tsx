"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface RiskFactor {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
}

interface RiskFactorsProps {
  risks: RiskFactor[];
}

const severityStyles = {
  high: {
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    border: "border-red-500/20",
    icon: "text-red-400",
  },
  medium: {
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    border: "border-yellow-500/20",
    icon: "text-yellow-400",
  },
  low: {
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
    border: "border-green-500/20",
    icon: "text-green-400",
  },
};

export default function RiskFactors({ risks }: RiskFactorsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {risks.map((risk, i) => {
        const styles = severityStyles[risk.severity];
        return (
          <motion.div key={i} variants={staggerItem}>
            <GlassCard className="p-6 h-full" hover>
              <div className="flex items-center justify-between mb-3">
                <svg
                  className={`h-6 w-6 ${styles.icon}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles.badge}`}
                >
                  {risk.severity.toUpperCase()}
                </span>
              </div>
              <h4 className="text-white font-semibold mb-2">{risk.title}</h4>
              <p className="text-sm text-silver-300 leading-relaxed">
                {risk.description}
              </p>
            </GlassCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
