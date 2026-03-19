"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { HOW_IT_WORKS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          label="Process"
          title="Three Steps to Unified CRM"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-electric-blue/0 via-electric-blue/30 to-electric-blue/0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {HOW_IT_WORKS.map((item) => (
              <motion.div
                key={item.step}
                variants={staggerItem}
                className="text-center relative"
              >
                <div className="inline-block mb-6">
                  <span className="text-5xl lg:text-6xl font-bold gradient-text-blue">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-silver-300 leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
