"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const profiles = [
  {
    id: "director",
    title: "Meet Our Director",
    image: "/images/director.jpg",
    name: "Founder & Director",
    role: "Spiritual Walk",
    experience: "20+ Years of Experience",
    quote: "Every journey we craft is an invitation to walk gently through history, and to leave each place a little better than we found it.",
    signatureTitle: "Founder & Director",
    signatureName: "Roni Porat",
    points: [
      "Over two decades of experience guiding spiritual and cultural journeys across India",
      "A lifelong commitment to authentic Buddhist pilgrimage, rooted in respect and reverence",
      "Deep partnerships with local monasteries, artisans and rural communities",
      "Dedicated to the preservation of India's ancient heritage for future generations",
      "A personal, considered approach to every guest's spiritual and wellness experience",
    ]
  },
  {
    id: "bhante",
    title: "Meet Our Meditator • Vipassana Teacher",
    image: "/images/Sangha-Jyoti.jpeg",
    name: "Bhante Sangha Jyoti",
    role: "Meditator • Vipassana Teacher",
    experience: "20+ Years Experience",
    quote: "True mindfulness is not just about silent meditation, but bringing deep awareness, peace, and loving-kindness into every step of our daily path.",
    signatureTitle: "Meditator, Vipassana Teacher",
    signatureName: "Bhante Sangha Jyoti",
    points: [
      "Decades dedicated to deep Vipassana meditation practice and teaching mental clarity",
      "Guiding seekers through authentic inner journeys and classical Buddhist mindfulness practices",
      "Fostering spaces of profound silence, reflection, and spiritual transformation",
      "Sharing timeless wisdom rooted in compassion, self-awareness, and inner peace",
      "Providing personal guidance to helpers and spiritual practitioners on the path",
    ]
  },
];

export default function Director() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % profiles.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % profiles.length);
    startTimer();
  };

  const activeProfile = profiles[current];

  return (
    <section id="director" className="py-28 md:py-36 bg-beige/40 relative overflow-hidden">
      {/* Outer wrapper relative positioning container to safely sit arrows at screen canvas limits */}
      <div className="max-w-6xl mx-auto px-10 md:px-16 relative">
        
        {/* Global Nav Controls: Pinned seamlessly to left & right limits of layout content box */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 ml-2 md:-ml-4 border border-gold/40 rounded-full flex items-center justify-center text-gold bg-beige/80 backdrop-blur-sm pointer-events-auto hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 mr-2 md:-mr-4 border border-gold/40 rounded-full flex items-center justify-center text-gold bg-beige/80 backdrop-blur-sm pointer-events-auto hover:bg-gold hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>

        {/* Inner Grid System Split Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left Side: Photo Frame Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/30 rounded-sm -z-10" />

            {/* Added bg-charcoal/5 background fallback to cleanly frame non-cropped full images */}
            <div className="relative h-[480px] rounded-sm overflow-hidden shadow-xl bg-charcoal/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProfile.image}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={activeProfile.image}
                    alt={activeProfile.name}
                    fill
                    className="object-contain" // "object-contain" keeps the image fully visible without cropping
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side: Content Frame Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="eyebrow mb-4">A Personal Word</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <h2 className="text-4xl md:text-5xl text-charcoal font-medium mb-8 max-w-[90%]">
                  {activeProfile.title}
                </h2>

                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-charcoal">
                    {activeProfile.name}
                  </h3>

                  <p className="text-gold uppercase tracking-[0.25em] mt-2 text-sm">
                    {activeProfile.role}
                  </p>

                  <p className="text-charcoal-light mt-3 text-lg">
                    {activeProfile.experience}
                  </p>
                </div>

                <p className="quote-text text-charcoal-light text-lg mb-8 leading-relaxed italic">
                  "{activeProfile.quote}"
                </p>

                <ul className="space-y-4 mb-10">
                  {activeProfile.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-charcoal-light leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Structured Multi-line Footer Signature Component Area */}
                <div className="border-t border-gold/20 pt-6 flex flex-col gap-1 inline-block">
                  <span className="font-quote text-xl md:text-2xl text-charcoal font-medium tracking-wide">
                    {activeProfile.signatureTitle}
                  </span>
                  <span className="font-quote text-lg md:text-xl text-charcoal/80 pl-6 md:pl-10 block tracking-wide">
                    &mdash; {activeProfile.signatureName}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}