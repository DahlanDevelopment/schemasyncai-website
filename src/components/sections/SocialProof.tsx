"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { STATS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SocialProof() {
  return (
    <section className="py-24 bg-navy-900/50">
      <Container>
        <SectionHeading label="Impact" title="Proven Results" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-silver-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
