"use client";

import { motion } from "framer-motion";
import { wellnessSchedule } from "@/data/content";

export default function WellnessSection() {
  return (
    <section id="wellness" className="py-28 md:py-36 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#D4AF37,transparent_45%),radial-gradient(circle_at_80%_70%,#D4AF37,transparent_45%)]" />
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-gold-soft mb-4">A Rhythm for the Soul</p>
          <h2 className="text-4xl md:text-5xl font-medium text-cream">Daily Wellness Schedule</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="relative">
          <div className="absolute left-[70px] md:left-[110px] top-0 bottom-0 w-px bg-gold/20" />
          <div className="space-y-1">
            {wellnessSchedule.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-6 md:gap-10 py-5 group"
              >
                <span className="w-[60px] md:w-[100px] shrink-0 text-right text-sm text-gold-soft font-body tracking-wide pt-0.5">
                  {item.time}
                </span>
                <span className="relative shrink-0 w-2.5 h-2.5 rounded-full bg-gold mt-2 group-hover:scale-125 transition-transform" />
                <div>
                  <h3 className="font-display text-xl text-cream">{item.activity}</h3>
                  <p className="text-sm text-cream/60 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
