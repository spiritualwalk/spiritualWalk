import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Retreat",
  description: "Reserve your place on the 12-day luxury Buddhist pilgrimage and wellness retreat.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero eyebrow="Begin Your Pilgrimage" title="Book Retreat" image="/images/mahabodhi-2.jpg" />
      <BookingForm />
    </>
  );
}
