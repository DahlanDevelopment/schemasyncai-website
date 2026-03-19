"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import GridBackground from "@/components/ui/GridBackground";
import WebToLeadForm from "@/components/forms/WebToLeadForm";
import { fadeInUp } from "@/lib/animations";

export default function ContactPage() {
  return (
    <GridBackground variant="dots" className="min-h-screen bg-navy-950">
      <section className="pt-32 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Let&apos;s Discuss Your Salesforce Integration
                </h1>
                <p className="text-lg text-silver-300 leading-relaxed">
                  Request a demo to see how SchemaSync.AI can automate schema
                  comparison, change detection, and metadata management across
                  all of your Salesforce orgs.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-silver-200">Email</p>
                    <a href="mailto:hello@schemasync.ai" className="text-white hover:text-electric-blue transition-colors">
                      hello@schemasync.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-blue/10 text-electric-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-silver-200">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
            >
              <GlassCard className="p-8">
                <WebToLeadForm />
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </section>
    </GridBackground>
  );
}
