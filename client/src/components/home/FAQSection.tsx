import { useState } from "react";
import { FAQ } from "@/lib/types";

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "Apakah template undangan dapat disesuaikan?",
      answer: "Ya, semua template dapat disesuaikan dengan informasi pernikahan Anda, termasuk nama, tanggal, lokasi, dan foto. Namun, desain dasar template akan tetap sama.",
      isOpen: false
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan link undangan?",
      answer: "Setelah pembayaran dikonfirmasi dan data pernikahan dilengkapi, link undangan akan siap dalam waktu 1-2 hari kerja.",
      isOpen: false
    },
    {
      question: "Apakah saya bisa melakukan revisi setelah link dibuat?",
      answer: "Ya, Anda dapat melakukan revisi minor (seperti kesalahan penulisan, perubahan waktu) sebanyak 2 kali secara gratis. Revisi lebih lanjut akan dikenakan biaya tambahan.",
      isOpen: false
    },
    {
      question: "Berapa lama link undangan akan aktif?",
      answer: "Link undangan akan aktif selama 1 tahun sejak tanggal aktivasi. Perpanjangan tersedia dengan biaya tambahan.",
      isOpen: false
    },
    {
      question: "Metode pembayaran apa yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA), dan kartu kredit.",
      isOpen: false
    }
  ]);
  
  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      }
      return faq;
    }));
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang template undangan pernikahan kami.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button 
                className="faq-toggle flex justify-between items-center w-full bg-light hover:bg-gray-100 p-4 rounded-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={faq.isOpen}
              >
                <span className="font-display font-bold text-lg text-left">{faq.question}</span>
                <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${faq.isOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`bg-gray-50 p-4 rounded-b-lg ${faq.isOpen ? 'block' : 'hidden'}`}>
                <p className="text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
