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
              <div className="relative h-72 md:h-[430px] rounded-xl overflow-hidden bg-[#F7F4EE] border border-gold/10 shadow-sm group [direction:ltr]">
  <Image
  src={destImage(d.day)}
  alt={d.title}
  fill
  className="object-contain p-3"
  sizes="(max-width:768px) 100vw, 600px"
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
                <div className="border-t border-gold/15 pt-5">
  <p className="text-sm font-medium text-charcoal">
    Accommodation
  </p>
  <p className="text-sm text-charcoal-light mt-1">
    {d.stay}
  </p>
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function destImage(day: number) {
  const map: Record<number, string> = {
    1: "/images/india-gate-delhi.jpg",
    2: "/images/Bodhgaya-Mahabodhi-Original-00002.jpg",
    3: "/images/bodhitree.jpg",
    4: "/images/Shanti-Stupa-Rajgir.jpg",
    5: "/images/nalanda-ruines.jpg",
    6: "/images/Anand-Stupa-Vaishali.jpg",
    7: "/images/mahaparinirvana-kushinagar-temple.jpg",
    8: "/images/lumbini-lord-buddha-temple.jpg",
    9: "/images/sarnath-temple.webp",
    10: "/images/varanashi-morning.jpg",
    11: "/images/Ganga-Aarti-Varanasi-1.webp",
    12: "/images/varanasi_day_tours_kashi_vishwanath_temple_2_.jpeg",
  };

  return map[day] || "/images/mahabodhi-1.jpg";
}
