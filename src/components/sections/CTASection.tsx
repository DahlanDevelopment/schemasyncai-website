"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GlassCard gradient className="p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Simplify Your Next Salesforce Merger?
            </h2>
            <p className="text-lg text-silver-300 max-w-2xl mx-auto mb-10">
              See how SchemaSync.AI can cut your Salesforce integration timeline
              by 60%. Get a personalized demo with your own schema data.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request Demo
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact Sales
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
