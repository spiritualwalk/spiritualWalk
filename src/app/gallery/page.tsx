import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments of stillness from the sacred Buddhist pilgrimage circuit across India.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Visual Journey" title="Gallery" subtitle="Moments of stillness" image="/images/mahabodhi-2.jpg" />
      <Gallery />
    </>
  );
}
