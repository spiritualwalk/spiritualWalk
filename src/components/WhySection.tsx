"use client";

import { motion } from "framer-motion";
import { Hotel, Heart, Sparkles, Brain, UserCheck, Landmark, Car, Salad } from "lucide-react";
import { whyCards } from "@/data/content";

const icons = [Hotel, Heart, Sparkles, Brain, UserCheck, Landmark, Car, Salad];

export default function WhySection() {
  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">The Spiritual Walk Difference</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">Why Spiritual Walk</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {whyCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                className="group relative p-6 md:p-8 rounded-sm glass hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-1"
              >
                <Icon className="text-gold-deep mb-5 group-hover:scale-110 transition-transform duration-500" size={30} strokeWidth={1.5} />
                <h3 className="font-display text-lg text-charcoal mb-2">{card.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
