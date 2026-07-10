"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fieldClass =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-3 text-charcoal placeholder:text-charcoal-light/50 transition-colors duration-300 text-sm";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="py-28 md:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Begin Your Pilgrimage</p>
          <h2 className="text-4xl md:text-5xl text-charcoal font-medium">Reserve Your Journey</h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 border border-gold/20 rounded-sm bg-beige/30"
          >
            <p className="font-display text-2xl text-charcoal mb-2">Thank you</p>
            <p className="text-sm text-charcoal-light">Your journey request has been received. Our team will be in touch shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            <input required placeholder="Full Name" className={fieldClass} />
            <input required placeholder="Country" className={fieldClass} />
            <input required type="email" placeholder="Email Address" className={fieldClass} />
            <input required type="tel" placeholder="Phone Number" className={fieldClass} />
            <input required type="number" min={1} placeholder="Number of Guests" className={fieldClass} />
            <input required type="date" placeholder="Arrival Date" className={fieldClass} />
            <select required defaultValue="" className={fieldClass}>
              <option value="" disabled>Preferred Room Type</option>
              <option>Deluxe Room</option>
              <option>Luxury Suite</option>
              <option>Private Villa</option>
            </select>
            <div />
            <textarea placeholder="Message" rows={4} className={`${fieldClass} sm:col-span-2 resize-none`} />
            <button type="submit" className="btn-gold sm:col-span-2 w-fit mx-auto mt-4">
              Reserve Your Journey
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
