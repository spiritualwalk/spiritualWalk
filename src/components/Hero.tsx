"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-end md:items-center">
      <Image
  src="/images/mahabodhi-1.jpg"
  alt="Mahabodhi Temple at sunrise with monks in saffron robes"
  fill
  priority
  className="object-cover object-center scale-105 brightness-90 saturate-90"
  sizes="100vw"
/>

{/* Main dark overlay */}
<div className="absolute inset-0 bg-black/45" />

{/* Bottom fade for text readability */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

{/* Left-side shade for heading */}
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

{/* Floating lotus petals */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-gold-soft/40 blur-[1px]"
      style={{
        width: 6 + (i % 3) * 3,
        height: 6 + (i % 3) * 3,
        left: `${10 + i * 15}%`,
        top: `${20 + (i % 4) * 15}%`,
      }}
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
      transition={{
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.6,
      }}
    />
  ))}
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-0 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="eyebrow text-[#5C4300] font-semibold mb-6"
        >
          12 Days · Bihar &amp; Uttar Pradesh, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] max-w-4xl font-medium"
        >
          Walk in the Footsteps of the Buddha
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.55 }}
  className="quote-text text-white text-xl md:text-2xl mt-6 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
>
  A Premium Buddhist Pilgrimage &amp; Wellness Retreat
</motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white/80 font-body text-base md:text-lg mt-6 max-w-xl leading-relaxed"
        >
          Discover the sacred places where the Buddha lived, meditated and enlightened humanity — while
          experiencing luxury accommodations, wellness practices, authentic culture and inner transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a href="/booking" className="btn-gold">Book Your Journey</a>
          <a href="/journey" className="btn-outline">Explore Retreat</a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
