import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import DestinationsTimeline from "@/components/DestinationsTimeline";
import JourneyTimeline from "@/components/JourneyTimeline";
import WellnessSection from "@/components/WellnessSection";
import ExperienceGrid from "@/components/ExperienceGrid";
import Gallery from "@/components/Gallery";
import Director from "@/components/Director";
import AboutMission from "@/components/AboutMission";
import PackageIncludes from "@/components/PackageIncludes";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <DestinationsTimeline />
      <JourneyTimeline />
      <WellnessSection />
      <ExperienceGrid />
      <Gallery />
      <Director />
      <AboutMission />
      <PackageIncludes />
      <Testimonials />
      <FAQSection />
      <BookingForm />
      
    </>
  );
}
