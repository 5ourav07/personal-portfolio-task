import AboutMeSection from "@/components/CustomSections/AboutMeSection";
import BannerSection from "@/components/CustomSections/BannerSection";
import MyProjectsSection from "@/components/CustomSections/MyProjectsSection";
import ServicesSection from "@/components/CustomSections/ServicesSection";
import TestimonialsSection from "@/components/CustomSections/TestimonialsSection";
import TogetherSection from "@/components/CustomSections/TogetherSection";

export default function Home() {
  return (
    <>
      <section id="hero">
        <BannerSection />
      </section>

      <section id="about">
        <AboutMeSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="projects">
        <MyProjectsSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <TogetherSection />
      </section>
    </>
  );
}
