"use client";

import { motion } from "framer-motion";

const leftNodes = [
  { label: "Account", y: 60 },
  { label: "Contact", y: 150 },
  { label: "Opportunity", y: 240 },
  { label: "Custom__c", y: 330 },
];

const rightNodes = [
  { label: "Account", y: 60 },
  { label: "Contact", y: 150 },
  { label: "Opportunity", y: 240 },
  { label: "Custom__c", y: 330 },
];

const leftX = 80;
const rightX = 420;
const mergeX = 250;

export default function SchemaVisualization() {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-[500px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {leftNodes.map((node, i) => (
          <motion.path
            key={`left-line-${i}`}
            d={`M ${leftX} ${node.y} Q ${leftX + 60} ${node.y} ${mergeX} 200`}
            stroke="#8A95A5"
            strokeWidth={1.5}
            fill="none"
            strokeOpacity={0.4}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {rightNodes.map((node, i) => (
          <motion.path
            key={`right-line-${i}`}
            d={`M ${rightX} ${node.y} Q ${rightX - 60} ${node.y} ${mergeX} 200`}
            stroke="#2D7FF9"
            strokeWidth={1.5}
            fill="none"
            strokeOpacity={0.4}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {leftNodes.map((node, i) => (
          <g key={`left-${i}`}>
            <motion.circle
              cx={leftX}
              cy={node.y}
              r={20}
              fill="#162544"
              stroke="#8A95A5"
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            <motion.circle
              cx={leftX}
              cy={node.y}
              r={20}
              fill="none"
              stroke="#8A95A5"
              strokeWidth={1}
              strokeOpacity={0.3}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            />
            <motion.text
              x={leftX}
              y={node.y + 4}
              textAnchor="middle"
              fill="#C0C8D4"
              fontSize={8}
              fontFamily="sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {rightNodes.map((node, i) => (
          <g key={`right-${i}`}>
            <motion.circle
              cx={rightX}
              cy={node.y}
              r={20}
              fill="#162544"
              stroke="#2D7FF9"
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            <motion.circle
              cx={rightX}
              cy={node.y}
              r={20}
              fill="none"
              stroke="#2D7FF9"
              strokeWidth={1}
              strokeOpacity={0.3}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            />
            <motion.text
              x={rightX}
              y={node.y + 4}
              textAnchor="middle"
              fill="#C0C8D4"
              fontSize={8}
              fontFamily="sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        <motion.circle
          cx={mergeX}
          cy={200}
          r={30}
          fill="url(#mergeGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx={mergeX}
          cy={200}
          r={24}
          fill="#0F1D32"
          stroke="#2D7FF9"
          strokeWidth={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.text
          x={mergeX}
          y={197}
          textAnchor="middle"
          fill="#2D7FF9"
          fontSize={9}
          fontWeight="bold"
          fontFamily="sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Schema
        </motion.text>
        <motion.text
          x={mergeX}
          y={209}
          textAnchor="middle"
          fill="#2D7FF9"
          fontSize={9}
          fontWeight="bold"
          fontFamily="sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Sync
        </motion.text>

        <motion.text
          x={leftX}
          y={25}
          textAnchor="middle"
          fill="#8A95A5"
          fontSize={11}
          fontWeight="600"
          fontFamily="sans-serif"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Source Org
        </motion.text>
        <motion.text
          x={rightX}
          y={25}
          textAnchor="middle"
          fill="#2D7FF9"
          fontSize={11}
          fontWeight="600"
          fontFamily="sans-serif"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Target Org
        </motion.text>

        <defs>
          <radialGradient id="mergeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2D7FF9" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#2D7FF9" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
