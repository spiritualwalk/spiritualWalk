import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DestinationsTimeline from "@/components/DestinationsTimeline";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Sacred Destinations",
  description: "Explore Bodh Gaya, Rajgir, Nalanda, Vaishali, Kushinagar, Lumbini, Sarnath and Varanasi — the sacred Buddhist circuit.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero eyebrow="The Sacred Circuit" title="Destinations" subtitle="Eight places, one path" image="/images/mahabodhi-1.jpg" />
      <DestinationsTimeline />
      <MapSection />
    </>
  );
}
