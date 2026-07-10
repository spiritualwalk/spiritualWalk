import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about the Spiritual Walk luxury Buddhist pilgrimage retreat.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero eyebrow="Questions, Answered" title="FAQ" image="/images/mahabodhi-1.jpg" />
      <FAQSection />
    </>
  );
}
