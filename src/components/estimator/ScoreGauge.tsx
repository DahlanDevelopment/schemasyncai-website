"use client";

import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  label: string;
}

function getScoreColor(score: number): string {
  if (score <= 3) return "#22c55e"; // green
  if (score <= 6) return "#eab308"; // yellow
  return "#ef4444"; // red
}

export default function ScoreGauge({ score, label }: ScoreGaugeProps) {
  const color = getScoreColor(score);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="12"
          />
          {/* Progress arc */}
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            transform="rotate(-90 100 100)"
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>
        {/* Score text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {score.toFixed(1)}
          </motion.span>
          <span className="text-sm text-silver-300 mt-1">out of 10</span>
        </div>
      </div>
      <motion.p
        className="mt-4 text-lg font-semibold"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
