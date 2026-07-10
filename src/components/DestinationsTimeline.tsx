"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";
import { destinations } from "@/data/content";

export default function DestinationsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const pathHeight = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="destinations" className="py-28 md:py-36 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-4">The Sacred Circuit</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">Eight Places, One Path</h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="text-charcoal-light mt-6 leading-relaxed">
            Every stop retraces an actual footstep of the Buddha's life — from birth to enlightenment,
            teaching to parinirvana.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* sacred path line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: pathHeight }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-soft via-gold to-gold-deep origin-top md:-translate-x-1/2"
          />

          {destinations.map((dest, i) => {
            const isOpen = expanded === i;
            const alignRight = i % 2 === 0;
            return (
              <div key={dest.name} className="relative mb-4 md:mb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-[15px] md:left-1/2 top-8 w-3 h-3 rounded-full bg-gold border-4 border-white shadow-[0_0_0_1px_rgba(212,175,55,0.3)] -translate-x-1/2 z-10"
                />
                <motion.div
                  initial={{ opacity: 0, x: alignRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`md:w-[46%] ml-10 md:ml-0 ${alignRight ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full text-left bg-beige/40 hover:bg-beige/70 rounded-sm p-6 transition-colors duration-400 border border-gold/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gold-deep tracking-widest2 uppercase font-semibold flex items-center gap-1.5">
                          <MapPin size={12} /> Stop {i + 1}
                        </span>
                        <h3 className="font-display text-2xl text-charcoal mt-1">{dest.name}</h3>
                        <p className="quote-text text-sm text-charcoal-light mt-0.5">{dest.subtitle}</p>
                      </div>
                      <ChevronDown className={`text-gold-deep transition-transform duration-400 shrink-0 ml-3 ${isOpen ? "rotate-180" : ""}`} size={20} />
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 mt-5 border-t border-gold/15">
                        <div className="relative w-full h-48 rounded-sm overflow-hidden mb-4">
                          <Image src={dest.image} alt={dest.name} fill className="object-cover" sizes="500px" />
                        </div>
                        <p className="text-sm text-charcoal-light leading-relaxed mb-4">{dest.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {dest.highlights.map((h) => (
                            <span key={h} className="text-xs bg-white px-3 py-1.5 rounded-full text-charcoal-light border border-gold/15">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
