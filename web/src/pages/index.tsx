// pages/index.tsx
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import Bootcamp from "@/components/Bootcamp";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <Bootcamp />
      <Testimonials />
      <FooterCTA />
    </>
  );
}
