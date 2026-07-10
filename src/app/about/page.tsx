import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutMission from "@/components/AboutMission";
import Director from "@/components/Director";

export const metadata: Metadata = {
  title: "About Us",
  description: "Our mission to preserve India's spiritual heritage, empower artisans and offer authentic luxury pilgrimage experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="About Spiritual Walk" subtitle="Preserving heritage, one sacred step at a time" />
      <AboutMission />
      <Director />
    </>
  );
}
