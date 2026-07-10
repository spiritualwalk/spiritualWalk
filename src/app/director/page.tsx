import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Director from "@/components/Director";

export const metadata: Metadata = {
  title: "Our Director",
  description: "Meet the founder and director behind Spiritual Walk's luxury Buddhist pilgrimage experiences.",
};

export default function DirectorPage() {
  return (
    <>
      <PageHero eyebrow="A Personal Word" title="Meet Our Director" image="/images/mahabodhi-1.jpg" />
      <Director />
    </>
  );
}
