"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const profiles = [
  // {
  //   id: "director",
  //   title: "Meet Our Director",
  //   image: "/images/director.jpg",
  //   name: "Founder & Director",
  //   role: "Spiritual Walk",
  //   experience: "20+ Years of Experience",
  //   quote: "Every journey we craft is an invitation to walk gently through history, and to leave each place a little better than we found it.",
  //   signatureTitle: "Founder & Director",
  //   signatureName: "Roni Porat",
  //   points: [
  //     "Over two decades of experience guiding spiritual and cultural journeys across India",
  //     "A lifelong commitment to authentic Buddhist pilgrimage, rooted in respect and reverence",
  //     "Deep partnerships with local monasteries, artisans and rural communities",
  //     "Dedicated to the preservation of India's ancient heritage for future generations",
  //     "A personal, considered approach to every guest's spiritual and wellness experience",
  //   ]
  // },

  {
    id: "reyaz-alam",
    title: "Meet Our Founder & Director",
    image: "/images/reyaz.jpeg",
    name: "Reyaz Alam",
    role: "Founder & Director | Spiritual Walk Retreat",
    experience: "With over 12 years of experience",
    quote: "My mission is simple: to welcome every guest with warmth, guide them with integrity, and leave them with memories that last a lifetime.",
    signatureTitle: "Founder & Director",
    signatureName: "Reyaz Alam",
    points: [
      "With over 12 years of experience in the tourism and hospitality industry, I have dedicated my career to creating meaningful, authentic, and well-organized travel experiences. My vision for Spiritual Walk Retreat is to offer journeys that go beyond sightseeing—experiences that inspire inner peace, cultural understanding, and personal transformation.",
      "I firmly believe that every traveler deserves exceptional service, genuine care, and true value for money. Customer satisfaction has always been at the heart of everything I do, and I am committed to ensuring that every guest enjoys a seamless, comfortable, and memorable journey from arrival to departure.",
      "At Spiritual Walk Retreat, we carefully design premium Buddhist pilgrimage tours, meditation retreats, yoga experiences, and cultural immersions that combine quality accommodations, reliable transportation, wholesome meals, and authentic local experiences. Every itinerary reflects our commitment to excellence, transparency, and personalized service."
    ]
  },

  {
    id: "roni-co-director",
    title: "Meet Our Co-Director",
    image: "/images/director.jpg",
    name: "Roni Porat",
    role: "My-Lifes-Creation - The Art of Living",
    experience: "Nearly four decades of research",
    quote: "In MyLifesCreation course we actually learn to act and manage ourselves in our lives, as composers and conductors. We can say that we learn to \"conduct the orchestra that is us and compose our personal symphony\"",
    signatureTitle: "Co-Director",
    signatureName: "Roni Porat",
    points: [
      "Orchestra conductor, stage artist, mentor and spiritual teacher Roni Porat has been engaged for nearly four decades in the study and researching of the mind (consciousness / awareness), the world of music and the connection between them.",
      "The core lessons that Roni teaches as part of his retreats worldwide, are original, extraordinary and actually constitute a concentrated, experiential \"my lifes creation\" course full of mental and physical musical experiences.",
      "In the course, Roni opens up to us the world of music (mainly western classical and local classical folklore music), analyzes and introduces us - in an equal way for everyone - to the great and immortal works as well as the art of conducting, as tools for observing and studying our way of thinking, just as the conductor knows his orchestra, leads and produces from it what he wants.",
      "Music has a wonderful ability to penetrate directly into the emotional world, bypass the world of thought and influence our mood and strength.",
      "Roni teaches us what can be learned from musical structures, motifs, melodies, frequency of repetition in music, musical tensions and more, about our automatic thought structures.",
      "As part of the experiments, we learn to use non-automatic thinking, creative, predictable and beneficial thinking, as well as to listen to the depth of the music and to several musical lines that appear simultaneously that we were not aware of, and this is in analogy to our unconscious world, which has a huge impact on our feelings and functioning.",
      "Another great bonus in the lessons - we get to know wonderful music and learn to listen to it.",
      "Most importantly - there is no need for any education or musical skill in order to be rewarded and enjoy the retreat.",
      "This year, within the framework of the content, we will focus on the value of creativity in thought and practice, as the key to creating a quality of life and inner peace. Creation, and especially conscious creation, constitutes the human right over any other living being.",
      "When we use the innate creativity in us, for the sake of improving our self-management ability and from there to improve our life experience and quality, we will actually become 'artists of our lives' and hence, the words 'art of life' were added to the title of the Life Creation project.",
      "As part of the pilgrimage tours following the Buddha's journey, Roni Porat, who breathes Buddhism, will integrate the spiritual contents taught by local teachers as well as the values of local culture, into the content of 'MyLifesCrestion'"
    ]
  },

{
    id: "dinesh-mishra",
    title: "Meet Our Classical Music & Kathak Ensemble",
    image: "/images/dinesh.jpeg",
    name: "Dinesh Mishra & Team",
    role: "Classical Music & Kathak Ensemble",
    experience: "With over 30 years of distinguished experience",
    quote: "Where tradition meets devotion, every performance becomes a journey of the soul.",
    signatureTitle: "Classical Music & Kathak Ensemble",
    signatureName: "Dinesh Mishra & Team",
    points: [
      "With over 30 years of distinguished experience, Dinesh Mishra & Team are highly respected performers in the field of Indian Classical Music and Kathak Dance. Their artistic journey reflects a lifelong commitment to preserving and promoting India’s rich cultural and spiritual heritage through soulful performances.",
      "Recognized for their contributions to Indian classical arts, the team has performed at prestigious cultural festivals, spiritual gatherings, government programs, and national and international events. Their performances beautifully blend the elegance of Kathak, the depth of Hindustani Classical Music, and the timeless traditions of Indian spirituality, creating unforgettable experiences for audiences. Their work aligns with India’s broader efforts to preserve and promote classical performing arts.",
      "At Spiritual Walk, Dinesh Mishra & Team present immersive cultural experiences through live classical concerts, devotional music, Kathak recitals, meditation music, and heritage performances that enrich every spiritual retreat and pilgrimage."
    ]
  },

  {
    id: "bhante",
    title: "Meet Our Meditator • Vipassana Teacher",
    image: "/images/Sangha-Jyoti-Teacher.jpeg",
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
  const [showMore, setShowMore] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<(typeof profiles)[0] | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setShowMore(false);
      setCurrent((prev) => (prev + 1) % profiles.length);
    }, 20000);
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
    setShowMore(false);
    setCurrent((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    setShowMore(false);
    setCurrent((prev) => (prev + 1) % profiles.length);
    startTimer();
  };

  const activeProfile = profiles[current];

  return (
    <section id="director" className="py-28 md:py-36 bg-beige/40 relative overflow-hidden">
      {/* Outer wrapper relative positioning container to safely sit arrows at screen canvas limits */}
      <div className="max-w-6xl mx-auto px-10 md:px-16 relative">
        
        {/* Global Nav Controls: Pinned seamlessly to left & right limits of layout content box */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 pointer-events-none items-center justify-between z-20">
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
            className="relative cursor-pointer"
            onClick={() => setSelectedProfile(activeProfile)}
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
            className="cursor-pointer"
            onClick={() => setSelectedProfile(activeProfile)}
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

                <ul className="space-y-4 mb-6">
                  {(activeProfile.id === "roni-co-director"
                    ? (showMore
                        ? activeProfile.points
                        : activeProfile.points.slice(0, 4))
                    : activeProfile.points
                  ).map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-charcoal-light leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>

                {activeProfile.id === "roni-co-director" && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="mb-10 px-5 py-2 border border-gold rounded-full text-gold text-sm font-medium hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                )}

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
    
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center p-5"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={() => setSelectedProfile(null)}
          >
            <motion.div
              initial={{scale:0.92,opacity:0}}
              animate={{scale:1,opacity:1}}
              exit={{scale:0.92,opacity:0}}
              onClick={(e)=>e.stopPropagation()}
              className="relative bg-[#F8F5EF] rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute right-5 top-5 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-gold hover:text-white transition-all z-50"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-[380px_1fr]">
                <div className="relative h-[350px] md:h-auto bg-charcoal/5">
                  <Image src={selectedProfile.image} alt={selectedProfile.name} fill className="object-contain p-6"/>
                </div>
                <div className="overflow-y-auto max-h-[90vh] px-10 py-10">
                  <p className="uppercase tracking-[0.25em] text-gold text-sm mb-2">{selectedProfile.role}</p>
                  <h2 className="text-4xl font-semibold text-charcoal mb-3">{selectedProfile.name}</h2>
                  <p className="text-charcoal-light mb-8">{selectedProfile.experience}</p>
                  <blockquote className="italic text-xl text-charcoal-light border-l-4 border-gold pl-5 mb-10">
                    "{selectedProfile.quote}"
                  </blockquote>
                  <div className="space-y-6">
                    {selectedProfile.points.map((point,index)=>(
                      <div key={index} className="flex gap-4">
                        <span className="w-2 h-2 rounded-full bg-gold mt-3 shrink-0"/>
                        <p className="leading-8 text-charcoal-light">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}