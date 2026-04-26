"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import GridBackground from "@/components/ui/GridBackground";
import Divider from "@/components/ui/Divider";
import { COMPANY_VALUES } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const valueIcons = [
  <svg key="precision" className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v4m0 12v4M2 12h4m12 0h4" />
  </svg>,
  <svg key="security" className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="speed" className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
  </svg>,
  <svg key="expertise" className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>,
];

export default function AboutPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <GridBackground variant="gradient" className="pt-32 pb-20">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
            <Badge variant="blue" className="mb-6">About SchemaSync.AI</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              We&apos;re Building the Intelligence Layer for <span className="gradient-text-blue">M&A Technology Integration</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-300 max-w-3xl mx-auto">
              Born from the frustration of manual Salesforce migrations, SchemaSync.AI exists to make post-acquisition CRM integration predictable, fast, and risk-free.
            </p>
          </motion.div>
        </Container>
      </GridBackground>

      <Divider />

      <section className="py-24">
        <Container className="max-w-4xl">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <GlassCard className="p-10 sm:p-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-5 text-silver-300 text-lg leading-relaxed">
                <p>Every M&A deal promises synergies. But when it comes to technology integration — especially Salesforce — those promises often collide with reality. Custom objects, conflicting field names, incompatible data types, and undocumented configurations turn what should be a 90-day integration into a 12-month nightmare.</p>
                <p>SchemaSync.AI was created to solve this exact problem. Our founders spent years in the trenches of M&A integration, watching PE firms and portfolio companies struggle with Salesforce consolidation.</p>
                <p>We built SchemaSync.AI to bring intelligence and automation to this process. Our platform uses AI to extract, analyze, and harmonize Salesforce schemas across organizations — delivering in hours what previously took weeks of consultant time.</p>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      <Divider />

      <section className="py-24">
        <Container>
          <SectionHeading label="Our Values" title="What Drives Us" subtitle="The principles that guide everything we build and every client we serve." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((value, index) => (
              <motion.div key={value.title} variants={staggerItem}>
                <GlassCard hover className="p-8 h-full text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric-blue/10 border border-electric-blue/20 mx-auto mb-5">
                    {valueIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-silver-300 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <Divider />

      <section className="py-24">
        <Container>
          <SectionHeading label="Our Team" title="Led by M&A Veterans" subtitle="Our team combines deep Salesforce expertise with private equity and M&A integration experience." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{ name: "Coming Soon", role: "CEO & Co-Founder" }, { name: "Coming Soon", role: "CTO & Co-Founder" }, { name: "Coming Soon", role: "VP of Product" }].map((member) => (
              <motion.div key={member.role} variants={staggerItem}>
                <GlassCard className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-navy-800 border border-white/10 mx-auto mb-5 flex items-center justify-center">
                    <svg className="w-10 h-10 text-silver-300/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-silver-300 text-sm">{member.role}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <Divider />
      <section className="py-24">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Us on the Mission to <span className="gradient-text-blue">Fix M&A Integration</span>
            </h2>
            <p className="text-lg text-silver-300 mb-10">Interested in working with us or learning more about our platform? We&apos;d love to hear from you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Get in Touch</Button>
              <Button href="/platform" variant="ghost" size="lg">Explore the Platform</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
