import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" image="/images/bodhitree.jpg" />
      <section className="py-24 max-w-3xl mx-auto px-6 md:px-10">
        <p className="text-charcoal-light leading-relaxed">
          By booking a journey with Spiritual Walk, guests agree to our booking, cancellation and
          conduct policies. Full itinerary details, inclusions and cancellation terms are confirmed
          in writing at the time of reservation.
        </p>
        <p className="text-charcoal-light leading-relaxed mt-4">
          Spiritual Walk reserves the right to adjust itineraries where necessary for safety, weather
          or local circumstances, while preserving the spirit and intent of each pilgrimage.
        </p>
      </section>
    </>
  );
}
