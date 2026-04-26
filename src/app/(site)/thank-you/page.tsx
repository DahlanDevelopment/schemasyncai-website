"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GridBackground from "@/components/ui/GridBackground";
import { fadeInUp, scaleIn } from "@/lib/animations";

export default function ThankYouPage() {
  return (
    <main className="bg-navy-950 min-h-screen flex items-center">
      <GridBackground variant="gradient" className="w-full py-32">
        <Container>
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
                <motion.svg
                  className="w-12 h-12 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  />
                </motion.svg>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                Thank You for Your Interest
              </h1>
              <p className="text-lg text-silver-300 mb-10">
                We&apos;ll be in touch within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/" size="lg">
                  Back to Home
                </Button>
                <Button href="/platform" variant="ghost" size="lg">
                  Explore Platform
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </GridBackground>
    </main>
  );
}
