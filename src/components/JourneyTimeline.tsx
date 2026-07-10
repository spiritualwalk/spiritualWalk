"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { journeyDays } from "@/data/content";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-28 md:py-36 bg-beige/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-4">The Full Itinerary</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">A 12 Day Journey</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="space-y-20 md:space-y-28">
          {journeyDays.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="relative h-64 md:h-96 rounded-sm overflow-hidden group [direction:ltr]">
                <Image
                  src={destImage(d.location)}
                  alt={d.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                  sizes="600px"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-sm">
                  <span className="text-xs tracking-widest2 uppercase text-gold-deep font-semibold">Day {String(d.day).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="[direction:ltr]">
                <p className="text-sm text-gold-deep tracking-wide uppercase mb-2">{d.location}</p>
                <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-4">{d.title}</h3>
                <p className="quote-text text-charcoal-light mb-6 leading-relaxed">{d.description}</p>
                <ul className="space-y-2 mb-6">
                  {d.activities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-charcoal-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-charcoal-light/70 tracking-wide">Stay: {d.stay}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function destImage(location: string) {
  const map: Record<string, string> = {
    Delhi: "/images/mahabodhi-2.jpg",
    "Bodh Gaya": "/images/mahabodhi-1.jpg",
    Rajgir: "/images/bodhitree.jpg",
    Nalanda: "/images/mahabodhi-2.jpg",
    Vaishali: "/images/mahabodhi-1.jpg",
    Kushinagar: "/images/bodhitree.jpg",
    Lumbini: "/images/mahabodhi-2.jpg",
    Sarnath: "/images/mahabodhi-1.jpg",
    Varanasi: "/images/mahabodhi-2.jpg",
    "Varanasi / Delhi": "/images/mahabodhi-1.jpg",
  };
  return map[location] || "/images/mahabodhi-1.jpg";
}
