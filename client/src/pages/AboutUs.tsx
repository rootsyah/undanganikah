import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Tentang Kami - E-Undangan</title>
        <meta name="description" content="E-Undangan adalah penyedia template undangan pernikahan digital premium dengan desain eksklusif dan layanan terbaik untuk momen spesial Anda." />
        <meta property="og:title" content="Tentang Kami - E-Undangan" />
        <meta property="og:description" content="E-Undangan adalah penyedia template undangan pernikahan digital premium dengan desain eksklusif dan layanan terbaik untuk momen spesial Anda." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="bg-light py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Tentang Kami
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  Mengenal lebih dekat dengan E-Undangan dan visi kami untuk undangan pernikahan digital
                </p>
              </div>
            </div>
          </div>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Tim E-Undangan" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                    Siapa Kami
                  </h2>
                  <p className="text-gray-700 mb-4">
                    E-Undangan didirikan pada tahun 2020 oleh sekelompok desainer dan developer yang memiliki visi untuk memberikan solusi undangan pernikahan digital yang elegan, praktis, dan terjangkau bagi pasangan yang akan menikah.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Kami percaya bahwa setiap pernikahan adalah unik dan spesial, sehingga kami berkomitmen untuk menyediakan template undangan pernikahan digital dengan desain eksklusif yang dapat mencerminkan keunikan dan keindahan setiap momen pernikahan.
                  </p>
                  <p className="text-gray-700">
                    Dengan tim yang terdiri dari para profesional berpengalaman dalam bidang desain grafis, web development, dan customer service, kami siap membantu Anda membuat undangan pernikahan digital yang berkesan.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-light">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Visi & Misi Kami
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-gray-700 mb-6">
                    Visi kami adalah menjadi penyedia template undangan pernikahan digital terdepan di Indonesia dengan desain yang eksklusif, berkualitas tinggi, dan layanan terbaik untuk setiap klien.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">Misi</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Menyediakan template undangan pernikahan digital dengan desain eksklusif dan berkualitas tinggi</li>
                        <li>Memberikan solusi praktis dan efisien untuk undangan pernikahan di era digital</li>
                        <li>Memberikan pelayanan terbaik dengan respon cepat dan dukungan penuh</li>
                        <li>Berinovasi secara konsisten untuk menghadirkan teknologi dan desain terbaru</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">Nilai-Nilai Kami</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Kualitas - Kami menjunjung tinggi kualitas dalam setiap aspek produk dan layanan</li>
                        <li>Kreativitas - Kami terus berinovasi dan menciptakan desain yang unik</li>
                        <li>Keramahan - Kami mengutamakan pelayanan yang ramah dan membantu</li>
                        <li>Kepercayaan - Kami membangun kepercayaan melalui kejujuran dan transparansi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Tim Kami
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Kenali tim profesional di balik E-Undangan yang siap membantu Anda membuat undangan pernikahan digital yang berkesan.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="mb-4 w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Founder & CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Rudi Santoso</h3>
                  <p className="text-primary font-medium mb-2">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Berpengalaman lebih dari 10 tahun dalam bidang desain digital dan pengembangan web.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4 w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Creative Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Dewi Anggraini</h3>
                  <p className="text-primary font-medium mb-2">Creative Director</p>
                  <p className="text-gray-600 text-sm">
                    Memiliki keahlian dalam desain grafis dengan fokus pada desain undangan dan branding.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4 w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Lead Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Budi Pratama</h3>
                  <p className="text-primary font-medium mb-2">Lead Developer</p>
                  <p className="text-gray-600 text-sm">
                    Ahli dalam pengembangan website dan aplikasi mobile dengan pengalaman lebih dari 8 tahun.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4 w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Customer Support Manager" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Siti Rahayu</h3>
                  <p className="text-primary font-medium mb-2">Customer Support Manager</p>
                  <p className="text-gray-600 text-sm">
                    Berdedikasi untuk memberikan pelayanan terbaik dan memastikan kepuasan setiap klien.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <TestimonialsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
