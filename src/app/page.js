import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";

/**
 * Main landing page
 * Composes all sections with Navbar and Footer
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0f1c]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
