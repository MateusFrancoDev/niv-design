import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BannerCarousel from "@/components/BannerCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <BannerCarousel />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
    </main>
  );
};

export default Index;
