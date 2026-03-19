"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import GridBackground from "@/components/ui/GridBackground";
import Divider from "@/components/ui/Divider";
import { SOLUTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function SolutionsPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <GridBackground variant="gradient" className="pt-32 pb-20">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
            <Badge variant="blue" className="mb-6">Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Built for Every Stakeholder in the <span className="gradient-text-blue">M&A Lifecycle</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver-300 max-w-3xl mx-auto">
              Whether you&apos;re a PE firm orchestrating portfolio consolidation, an advisory team delivering due diligence, or an IT leader managing the integration \u2014 SchemaSync.AI has you covered.
            </p>
          </motion.div>
        </Container>
      </GridBackground>

      <Divider />

      {SOLUTIONS.map((solution, index) => (
        <section key={solution.title} className="py-24">
          <Container>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-12">
              <Badge variant="blue" className="mb-4">{solution.audience}</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{solution.title}</h2>
              <p className="text-lg text-silver-300 max-w-3xl">{solution.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.66 16.59A1 1 0 0 1 20.66 21H3.34a1 1 0 0 1-.86-1.41L12 3Z" />
                      </svg>
                    </span>
                    Challenges
                  </h3>
                  <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-4">
                    {solution.painPoints.map((point) => (
                      <motion.li key={point} variants={staggerItem} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        <span className="text-silver-300">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-electric-blue/10 text-electric-blue">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Outcomes with SchemaSync.AI
                  </h3>
                  <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-4">
                    {solution.outcomes.map((outcome) => (
                      <motion.li key={outcome} variants={staggerItem} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 text-electric-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-silver-200">{outcome}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </GlassCard>
              </motion.div>
            </div>
          </Container>
          {index < SOLUTIONS.length - 1 && <Divider className="mt-24" />}
        </section>
      ))}

      <Divider />
      <section className="py-24">
        <Container>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              See How SchemaSync.AI Fits <span className="gradient-text-blue">Your Workflow</span>
            </h2>
            <p className="text-lg text-silver-300 mb-10">Schedule a personalized walkthrough and discover how our platform addresses your specific M&A integration challenges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Schedule a Walkthrough</Button>
              <Button href="/platform" variant="ghost" size="lg">Explore the Platform</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
