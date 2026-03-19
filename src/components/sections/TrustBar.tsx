"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Container from "@/components/ui/Container";

const placeholderLogos = [
  "PE Firm 1",
  "PE Firm 2",
  "PE Firm 3",
  "PE Firm 4",
  "PE Firm 5",
];

export default function TrustBar() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="text-silver-300 text-sm font-medium uppercase tracking-wider mb-10">
            Trusted by leading Private Equity firms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {placeholderLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center w-36 h-12 rounded-lg bg-white/5 border border-white/8 text-silver-300 text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
