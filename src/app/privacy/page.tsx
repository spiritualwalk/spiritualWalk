import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image="/images/mahabodhi-2.jpg" />
      <section className="py-24 max-w-3xl mx-auto px-6 md:px-10 prose prose-neutral">
        <p className="text-charcoal-light leading-relaxed">
          Spiritual Walk respects your privacy. Information collected through this website, including
          booking enquiries and newsletter subscriptions, is used solely to provide and improve our
          pilgrimage and retreat services, and is never sold to third parties.
        </p>
        <p className="text-charcoal-light leading-relaxed mt-4">
          We retain personal data only as long as necessary to fulfil your booking or enquiry, and
          you may request access to, correction of, or deletion of your data at any time by contacting
          journeys@spiritualwalk.com.
        </p>
      </section>
    </>
  );
}
