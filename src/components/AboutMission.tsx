"use client";

import { motion } from "framer-motion";
import { Sprout, Hammer, HeartHandshake, Landmark, Globe2 } from "lucide-react";

const pillars = [
  { icon: Sprout, title: "Preserving Heritage", text: "Safeguarding India's ancient spiritual traditions for generations to come." },
  { icon: Hammer, title: "Empowering Artisans", text: "Supporting weavers, potters and craftspeople through sustainable livelihoods." },
  { icon: HeartHandshake, title: "Wellness & Meditation", text: "Promoting yoga, meditation and traditional healing as living practices." },
  { icon: Landmark, title: "Sustainable Tourism", text: "Creating tourism that benefits rural communities directly and lastingly." },
  { icon: Globe2, title: "Cultural Exchange", text: "Connecting global travellers with authentic Indian heritage and wisdom." },
];

export default function AboutMission() {
  return (
    <section id="about" className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Our Purpose</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">About Spiritual Walk</h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="text-charcoal-light mt-6 leading-relaxed">
            Beyond pilgrimage, we are building an ecosystem that preserves India's living heritage —
            connecting travellers with artisans, healers and rural communities across the sacred circuit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-7 rounded-sm border border-gold/15 hover:border-gold/40 transition-colors duration-400 bg-cream/60"
            >
              <p.icon className="text-forest mb-5" size={26} strokeWidth={1.5} />
              <h3 className="font-display text-lg text-charcoal mb-2">{p.title}</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
