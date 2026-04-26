"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GridBackground from "@/components/ui/GridBackground";
import Divider from "@/components/ui/Divider";
import { FEATURES } from "@/lib/constants";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const featureIcons: Record<string, React.ReactNode> = {
  extract: (
    <svg className="w-12 h-12 text-electric-blue" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6h24a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm4 10h16m-16 6h16m-16 6h10" />
    </svg>
  ),
  analyze: (
    <svg className="w-12 h-12 text-electric-blue" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M24 4v8m0 24v8M4 24h8m24 0h8M9.86 9.86l5.66 5.66m17 17 5.65 5.65M38.14 9.86l-5.66 5.66m-17 17-5.65 5.65" />
      <circle cx="24" cy="24" r="8" />
    </svg>
  ),
  migrate: (
    <svg className="w-12 h-12 text-electric-blue" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 24h36m0 0-8-8m8 8-8 8M6 12h20m-20 24h20" />
    </svg>
  ),
  report: (
    <svg className="w-12 h-12 text-electric-blue" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
      <rect x="6" y="6" width="36" height="36" rx="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 32V22m8 10V16m8 16V20m8 12V12" />
    </svg>
  ),
};

export default function PlatformPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <GridBackground variant="gradient" className="pt-32 pb-20">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="blue" className="mb-6">
              Platform Overview
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              The Intelligence Layer for{" "}
              <span className="gradient-text-blue">M&A Integration</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-300 max-w-3xl mx-auto">
              SchemaSync.AI connects to your Salesforce orgs, extracts and
              analyzes schema metadata, detects conflicts, and generates
              actionable migration plans — all powered by AI.
            </p>
          </motion.div>
        </Container>
      </GridBackground>

      <Divider />

      {FEATURES.map((feature, index) => {
        const isReversed = index % 2 === 1;

        return (
          <section key={feature.title} className="py-24">
            <Container>
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "direction-rtl" : ""
                }`}
              >
                <motion.div
                  variants={isReversed ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`${isReversed ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl bg-navy-900/60 backdrop-blur-md border border-white/8 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,127,249,0.06)_0%,transparent_70%)]" />
                    <div className="relative text-center p-8">
                      {featureIcons[feature.icon]}
                      <p className="mt-4 text-sm text-silver-300/60 font-medium">
                        {feature.title} Visualization
                      </p>
                    </div>
                    <div className="absolute inset-0 dot-grid opacity-30" />
                  </div>
                </motion.div>

                <motion.div
                  variants={isReversed ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`${isReversed ? "lg:order-1" : ""}`}
                >
                  <Badge variant="blue" className="mb-4">
                    0{index + 1}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-silver-300 mb-8">
                    {feature.description}
                  </p>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-3"
                  >
                    {feature.details.map((detail) => (
                      <motion.li
                        key={detail}
                        variants={staggerItem}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-5 h-5 mt-0.5 text-electric-blue flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-silver-200">{detail}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </Container>
            {index < FEATURES.length - 1 && <Divider className="mt-24" />}
          </section>
        );
      })}

      <section className="py-24">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your{" "}
              <span className="gradient-text-blue">M&A Integration?</span>
            </h2>
            <p className="text-lg text-silver-300 mb-10">
              See how SchemaSync.AI can map, analyze, and harmonize your
              Salesforce schemas in hours instead of weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Request a Demo
              </Button>
              <Button href="/pricing" variant="ghost" size="lg">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
