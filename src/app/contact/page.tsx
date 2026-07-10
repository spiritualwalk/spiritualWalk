import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import MapSection from "@/components/MapSection";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Spiritual Walk team to plan your luxury Buddhist pilgrimage.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="We're Here to Help" title="Contact" image="/images/bodhitree.jpg" />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <Mail className="mx-auto text-gold-deep mb-3" size={24} strokeWidth={1.5} />
            <p className="text-sm text-charcoal-light">journeys@spiritualwalk.com</p>
          </div>
          <div>
            <Phone className="mx-auto text-gold-deep mb-3" size={24} strokeWidth={1.5} />
            <p className="text-sm text-charcoal-light">+91 98765 43210</p>
          </div>
          <div>
            <MapPin className="mx-auto text-gold-deep mb-3" size={24} strokeWidth={1.5} />
            <p className="text-sm text-charcoal-light">Bodh Gaya, Bihar, India</p>
          </div>
        </div>
      </section>
      <BookingForm />
      <MapSection />
    </>
  );
}
