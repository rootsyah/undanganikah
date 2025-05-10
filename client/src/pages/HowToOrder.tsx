import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowToOrderSection from "@/components/home/HowToOrderSection";
import FAQSection from "@/components/home/FAQSection";

export default function HowToOrder() {
  return (
    <>
      <Helmet>
        <title>Cara Pemesanan - E-Undangan</title>
        <meta name="description" content="Panduan lengkap cara memesan dan menggunakan template undangan pernikahan digital E-Undangan. Proses mudah dan cepat untuk undangan pernikahan online Anda." />
        <meta property="og:title" content="Cara Pemesanan - E-Undangan" />
        <meta property="og:description" content="Panduan lengkap cara memesan dan menggunakan template undangan pernikahan digital E-Undangan. Proses mudah dan cepat untuk undangan pernikahan online Anda." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <div className="bg-light py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Cara Pemesanan
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  Panduan lengkap cara memesan dan menggunakan template undangan pernikahan digital.
                </p>
              </div>
            </div>
          </div>
          
          <HowToOrderSection />
          
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
                  Panduan Lengkap Pemesanan
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-light rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg mr-3">1</span>
                      Pilih Template
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Pilih template undangan pernikahan yang sesuai dengan tema dan konsep pernikahan Anda. Anda dapat melihat preview dari setiap template untuk mendapatkan gambaran lengkap.
                    </p>
                    <Link href="/templates" className="text-primary hover:underline font-medium">
                      Lihat Katalog Template →
                    </Link>
                  </div>
                  
                  <div className="bg-light rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg mr-3">2</span>
                      Lakukan Pembayaran
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Setelah memilih template, lakukan pembayaran melalui metode yang tersedia. Kami menerima pembayaran melalui:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                      <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                      <li>E-Wallet (GoPay, OVO, DANA)</li>
                      <li>Kartu Kredit</li>
                    </ul>
                    <p className="text-gray-700">
                      Setelah pembayaran, konfirmasi dengan mengirimkan bukti transfer melalui WhatsApp atau email kami.
                    </p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg mr-3">3</span>
                      Isi Data & Terima Link
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Setelah pembayaran dikonfirmasi, Anda akan menerima formulir untuk mengisi data pernikahan, seperti:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                      <li>Nama pengantin pria dan wanita</li>
                      <li>Nama orang tua pengantin</li>
                      <li>Tanggal, waktu, dan lokasi acara</li>
                      <li>Foto-foto prewedding</li>
                      <li>Quotes atau ucapan</li>
                      <li>Link Google Maps lokasi</li>
                    </ul>
                    <p className="text-gray-700">
                      Setelah data dilengkapi, tim kami akan memproses dan mengirimkan link undangan digital yang siap dibagikan dalam waktu 1-2 hari kerja.
                    </p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg mr-3">4</span>
                      Bagikan Undangan
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Setelah menerima link undangan digital, Anda dapat membagikannya kepada para tamu melalui:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>WhatsApp</li>
                      <li>Email</li>
                      <li>Media sosial</li>
                      <li>QR Code (untuk undangan fisik)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <FAQSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
