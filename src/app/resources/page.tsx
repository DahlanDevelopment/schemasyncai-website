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
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const resources = [
  {
    title: "Blog",
    description: "Insights on M&A technology integration, Salesforce best practices, and the future of AI-powered schema management.",
    icon: (
      <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
      </svg>
    ),
  },
  {
    title: "Whitepapers",
    description: "The PE Guide to Salesforce Consolidation \u2014 and other deep-dive research on schema harmonization strategies for M&A.",
    icon: (
      <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Case Studies",
    description: "Real-world examples of how PE firms and portfolio companies used SchemaSync.AI to accelerate their Salesforce integrations.",
    icon: (
      <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="bg-navy-950 min-h-screen">
      <GridBackground variant="gradient" className="pt-32 pb-20">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
            <Badge variant="blue" className="mb-6">Resources</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Knowledge for <span className="gradient-text-blue">M&A Leaders</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-300 max-w-3xl mx-auto">
              Explore guides, research, and real-world examples that help you navigate the complexities of post-acquisition technology integration.
            </p>
          </motion.div>
        </Container>
      </GridBackground>

      <Divider />

      <section className="py-24">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <motion.div key={resource.title} variants={staggerItem}>
                <GlassCard hover className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric-blue/10 border border-electric-blue/20 mb-6">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-silver-300 mb-6 flex-1">{resource.description}</p>
                  <Badge variant="outline">Coming Soon</Badge>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <Divider />

      <section className="py-24">
        <Container className="max-w-2xl">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center">
            <GlassCard className="p-10 sm:p-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
              <p className="text-silver-300 mb-8">Get notified when new resources drop \u2014 including our upcoming whitepaper, &quot;The PE Guide to Salesforce Consolidation.&quot;</p>
              {submitted ? (
                <div className="flex items-center justify-center gap-3 text-electric-blue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Thanks! We&apos;ll keep you posted.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-xl bg-navy-800 border border-white/10 text-white placeholder-silver-300/50 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors" />
                  <Button type="submit">Subscribe</Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
