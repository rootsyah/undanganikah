import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Hubungi Kami - E-Undangan</title>
        <meta name="description" content="Hubungi tim E-Undangan untuk pertanyaan, dukungan, atau bantuan terkait template undangan pernikahan digital kami." />
        <meta property="og:title" content="Hubungi Kami - E-Undangan" />
        <meta property="og:description" content="Hubungi tim E-Undangan untuk pertanyaan, dukungan, atau bantuan terkait template undangan pernikahan digital kami." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="bg-light py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Hubungi Kami
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim kami.
                </p>
              </div>
            </div>
          </div>
          
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
