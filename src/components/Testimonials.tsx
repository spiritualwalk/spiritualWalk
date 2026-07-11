"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-[#8B6A2F] mb-4">
            Voices From the Path
          </p>

          <h2 className="text-4xl md:text-5xl text-[#1F2937] font-medium">
            Testimonials
          </h2>

          <div className="gold-divider mx-auto mt-6" />

          <p className="mt-6 text-[#6B7280] leading-relaxed">
            Experiences shared by pilgrims who walked the sacred path and
            discovered peace, mindfulness, and unforgettable memories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E6D7B8] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#4B5563] text-[15px] leading-8 italic mb-8">
                "{t.quote}"
              </p>

              {/* User */}
              <div className="border-t border-[#ECE5D8] pt-5">
                <h4 className="font-semibold text-[#1F2937] text-lg">
                  {t.name}
                </h4>

                <p className="text-[#8B6A2F] text-sm mt-1">
                  {t.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}