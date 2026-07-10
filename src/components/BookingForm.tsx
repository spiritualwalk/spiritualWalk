"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fieldClass =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-3 text-charcoal placeholder:text-charcoal-light/50 transition-colors duration-300 text-sm";

const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbw0CNlgDCokJHaPCQoxjEVSpiCiBf5IpvShxcXoEeMatXhZMiPpCvNe4rqikEK_RaEykw/exec"; // paste your URL

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    country: "",
    email: "",
    phone: "",
    guests: "",
    arrivalDate: "",
    roomType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // Apps Script doesn't return CORS headers
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <p className="text-sm text-charcoal-light">
              Your journey request has been received. Our team will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            <input required name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className={fieldClass} />
            <input required name="country" value={form.country} onChange={handleChange} placeholder="Country" className={fieldClass} />
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={fieldClass} />
            <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={fieldClass} />
            <input required type="number" min={1} name="guests" value={form.guests} onChange={handleChange} placeholder="Number of Guests" className={fieldClass} />
            <input required type="date" name="arrivalDate" value={form.arrivalDate} onChange={handleChange} placeholder="Arrival Date" className={fieldClass} />
            <select required name="roomType" value={form.roomType} onChange={handleChange} className={fieldClass}>
              <option value="" disabled>Preferred Room Type</option>
              <option>Deluxe Room</option>
              <option>Luxury Suite</option>
              <option>Private Villa</option>
            </select>
            <div />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className={`${fieldClass} sm:col-span-2 resize-none`}
            />
            {error && <p className="text-red-500 text-sm sm:col-span-2">{error}</p>}
            <button type="submit" disabled={loading} className="btn-gold sm:col-span-2 w-fit mx-auto mt-4">
              {loading ? "Sending..." : "Reserve Your Journey"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}