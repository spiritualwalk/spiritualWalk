"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/bodhitree.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-gold-soft mb-4">Voices From the Path</p>
          <h2 className="text-4xl md:text-5xl text-white font-medium">Testimonials</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="glass-dark rounded-sm p-7"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="quote-text text-cream/90 text-base leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm text-cream font-semibold">{t.name}</p>
                <p className="text-xs text-cream/50 tracking-wide">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
