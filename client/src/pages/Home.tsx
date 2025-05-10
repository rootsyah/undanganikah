import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TemplateSection from "@/components/home/TemplateSection";
import HowToOrderSection from "@/components/home/HowToOrderSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>E-Undangan - Template Undangan Pernikahan Digital</title>
        <meta name="description" content="E-Undangan menyediakan template undangan pernikahan digital premium dengan desain eksklusif. Buat undangan pernikahan online dengan mudah dan cepat." />
        <meta property="og:title" content="E-Undangan - Template Undangan Pernikahan Digital" />
        <meta property="og:description" content="E-Undangan menyediakan template undangan pernikahan digital premium dengan desain eksklusif. Buat undangan pernikahan online dengan mudah dan cepat." />
        <meta property="og:url" content="https://e-undangan.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <TemplateSection />
          <HowToOrderSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
