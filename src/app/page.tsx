import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
