"use client";

import { motion } from "framer-motion";

const STEPS = ["Systems", "Integration", "Complexity", "Contact"];

interface StepProgressProps {
  currentStep: number;
}

export default function StepProgress({ currentStep }: StepProgressProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {STEPS.map((label, index) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  index < currentStep
                    ? "bg-electric-blue text-white"
                    : index === currentStep
                      ? "bg-electric-blue/20 border-2 border-electric-blue text-electric-blue"
                      : "bg-navy-800 border border-white/10 text-silver-300"
                }`}
              >
                {index < currentStep ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  `0${index + 1}`
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium hidden sm:block ${
                  index <= currentStep ? "text-silver-100" : "text-silver-300"
                }`}
              >
                {label}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div className="flex-1 mx-3 h-px bg-navy-700 relative">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-electric-blue"
                  initial={{ width: "0%" }}
                  animate={{
                    width: index < currentStep ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
