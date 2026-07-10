"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/mahabodhi-1.jpg", alt: "Mahabodhi Temple with monks", tall: true },
  { src: "/images/bodhitree.jpg", alt: "Lotus offerings at the Bodhi Tree" },
  { src: "/images/mahabodhi-2.jpg", alt: "A monk beside the Mahabodhi Temple", tall: true },
  { src: "/images/mahabodhi-1.jpg", alt: "Monks in procession" },
  { src: "/images/bodhitree.jpg", alt: "Pilgrims beneath the sacred tree" },
  { src: "/images/mahabodhi-2.jpg", alt: "Golden hour at the temple", tall: true },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">Moments of Stillness</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">Gallery</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setActive(i)}
              className={`relative w-full block rounded-sm overflow-hidden break-inside-avoid group ${img.tall ? "h-96" : "h-60"}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="400px" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setActive(null)}>
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-3xl h-[70vh]"
            >
              <Image src={galleryImages[active].src} alt={galleryImages[active].alt} fill className="object-contain" sizes="900px" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
