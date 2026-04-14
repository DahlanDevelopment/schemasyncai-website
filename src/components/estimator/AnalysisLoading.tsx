"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Analyzing your systems...",
  "Evaluating schema complexity...",
  "Assessing integration risks...",
  "Estimating effort and costs...",
  "Generating your report...",
];

export default function AnalysisLoading() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-8">
      {/* Pulsing ring animation */}
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-2 border-electric-blue/30 animate-ping absolute inset-0" />
        <div className="h-20 w-20 rounded-full border-2 border-electric-blue flex items-center justify-center">
          <svg
            className="h-8 w-8 text-electric-blue animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>

      {/* Rotating messages */}
      <div className="h-8 relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-silver-200 font-medium"
          >
            {MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="text-sm text-silver-300">
        Our AI is analyzing your integration scenario. This typically takes
        10-20 seconds.
      </p>
    </div>
  );
}
