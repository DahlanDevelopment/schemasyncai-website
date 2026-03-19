"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SchemaVisualization from "@/components/sections/SchemaVisualization";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(45,127,249,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(45,127,249,0.04)_0%,transparent_50%)]" />

      <Container className="relative py-16 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">
                Unify Salesforce Schemas.
              </span>
              <br />
              <span className="gradient-text">
                Accelerate M&A Integration.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-200 max-w-xl leading-relaxed">
              AI-powered schema harmonization for Private Equity firms. Extract,
              compare, and merge Salesforce org schemas in hours \u2014 not months.
              Reduce integration risk and accelerate post-acquisition value
              creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request Demo
              </Button>
              <Button href="/platform" variant="ghost" size="lg">
                Explore Platform
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SchemaVisualization />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
