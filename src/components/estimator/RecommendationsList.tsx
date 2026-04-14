"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface RecommendationsListProps {
  questions: string[];
  redFlags: string[];
  nextSteps: string[];
}

export default function RecommendationsList({
  questions,
  redFlags,
  nextSteps,
}: RecommendationsListProps) {
  return (
    <div className="space-y-8">
      {/* Pre-integration Questions */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-white mb-4">
          5 Questions You Must Answer Before Starting
        </h3>
        <GlassCard className="p-6">
          <ol className="space-y-4">
            {questions.map((q, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex gap-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-silver-200 leading-relaxed pt-0.5">{q}</p>
              </motion.li>
            ))}
          </ol>
        </GlassCard>
      </motion.div>

      {/* Red Flags */}
      {redFlags.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Red Flags to Watch
          </h3>
          <GlassCard className="p-6 border-yellow-500/20">
            <ul className="space-y-3">
              {redFlags.map((flag, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem}
                  className="flex gap-3"
                >
                  <svg
                    className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5"
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
                  <p className="text-silver-200 text-sm leading-relaxed">
                    {flag}
                  </p>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      )}

      {/* Recommended Next Steps */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-white mb-4">
          Recommended First Steps
        </h3>
        <GlassCard className="p-6">
          <ol className="space-y-4">
            {nextSteps.map((step, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex gap-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-blue text-white text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-silver-200 leading-relaxed pt-0.5">
                  {step}
                </p>
              </motion.li>
            ))}
          </ol>
        </GlassCard>
      </motion.div>
    </div>
  );
}
