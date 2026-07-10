"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  "Over two decades of experience guiding spiritual and cultural journeys across India",
  "A lifelong commitment to authentic Buddhist pilgrimage, rooted in respect and reverence",
  "Deep partnerships with local monasteries, artisans and rural communities",
  "Dedicated to the preservation of India's ancient heritage for future generations",
  "A personal, considered approach to every guest's spiritual and wellness experience",
];

export default function Director() {
  return (
    <section id="director" className="py-28 md:py-36 bg-beige/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-gold/30 rounded-sm -z-10" />
          <div className="relative h-[480px] rounded-sm overflow-hidden">
            <Image src="/images/director.jpg" alt="Founder and Director of Spiritual Walk" fill className="object-cover" sizes="500px" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="eyebrow mb-4">A Personal Word</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium mb-6">Meet Our Director</h2>
          <p className="quote-text text-charcoal-light text-lg mb-8 leading-relaxed">
            "Every journey we craft is an invitation to walk gently through history, and to leave
            each place a little better than we found it."
          </p>
          <ul className="space-y-4 mb-10">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-charcoal-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                {p}
              </li>
            ))}
          </ul>
          <div className="font-quote italic text-2xl text-charcoal border-t border-gold/20 pt-6 inline-block">
            Founder &amp; Director
          </div>
        </motion.div>
      </div>
    </section>
  );
}
