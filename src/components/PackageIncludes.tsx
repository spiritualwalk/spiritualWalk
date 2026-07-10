"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { packageIncludes } from "@/data/content";

export default function PackageIncludes() {
  return (
    <section className="py-28 md:py-36 bg-beige/40">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Every Detail, Considered</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">Package Includes</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 bg-white rounded-sm p-8 md:p-12 border border-gold/10">
          {packageIncludes.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="flex items-center gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-gold-soft/50 flex items-center justify-center shrink-0">
                <Check size={13} className="text-gold-deep" />
              </span>
              <span className="text-sm text-charcoal-light">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
