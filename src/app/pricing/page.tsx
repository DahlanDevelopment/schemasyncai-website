"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import GridBackground from "@/components/ui/GridBackground";
import Divider from "@/components/ui/Divider";
import { PRICING_TIERS, FAQS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-navy-950 min-h-screen">
      <GridBackground variant="gradient" className="pt-32 pb-20">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
            <Badge variant="blue" className="mb-6">Pricing</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Transparent Pricing for <span className="gradient-text-blue">Every Stage</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-300 max-w-3xl mx-auto">
              From single-deal assessments to enterprise-wide portfolio management. Choose the plan that matches your M&A integration needs.
            </p>
          </motion.div>
        </Container>
      </GridBackground>

      <Divider />

      <section className="py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier) => (
              <motion.div key={tier.name} variants={staggerItem}>
                <GlassCard gradient={tier.highlighted} hover className={`p-8 h-full flex flex-col ${tier.highlighted ? "ring-1 ring-electric-blue/30" : ""}`}>
                  {tier.highlighted && <Badge variant="blue" className="self-start mb-4">Most Popular</Badge>}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-silver-300 mb-8">{tier.description}</p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 text-electric-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-silver-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={tier.highlighted ? "primary" : "secondary"} className="w-full">{tier.cta}</Button>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <Divider />

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about SchemaSync.AI." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div key={faq.question} variants={staggerItem}>
                <GlassCard className="overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex items-center justify-between w-full p-6 text-left cursor-pointer">
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    <svg className={`w-5 h-5 text-silver-300 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96" : "max-h-0"}`}>
                    <p className="px-6 pb-6 text-silver-300">{faq.answer}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
