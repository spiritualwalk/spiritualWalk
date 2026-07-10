import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JourneyTimeline from "@/components/JourneyTimeline";
import WellnessSection from "@/components/WellnessSection";
import PackageIncludes from "@/components/PackageIncludes";

export const metadata: Metadata = {
  title: "The 12 Day Journey",
  description: "A day-by-day guide through the 12-day luxury Buddhist pilgrimage across India's sacred circuit.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero eyebrow="Day by Day" title="The 12 Day Journey" subtitle="A story-style path through the sacred circuit" image="/images/bodhitree.jpg" />
      <JourneyTimeline />
      <WellnessSection />
      <PackageIncludes />
    </>
  );
}
