import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WellnessSection from "@/components/WellnessSection";
import ExperienceGrid from "@/components/ExperienceGrid";

export const metadata: Metadata = {
  title: "Wellness",
  description: "Daily yoga, meditation and mindfulness woven into every day of the pilgrimage.",
};

export default function WellnessPage() {
  return (
    <>
      <PageHero eyebrow="A Rhythm for the Soul" title="Wellness" subtitle="Yoga, meditation and mindful living" image="/images/bodhitree.jpg" />
      <WellnessSection />
      <ExperienceGrid />
    </>
  );
}
