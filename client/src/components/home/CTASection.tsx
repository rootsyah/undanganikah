import { Link } from "wouter";

export default function CTASection() {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
          Siap Membuat Undangan Pernikahan Digital?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Pilih template undangan pernikahan digital yang sesuai dengan cerita
          cinta Anda dan buat momen spesial Anda lebih bermakna.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/templates"
            className="bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Lihat Template
          </Link>
          <Link
            href="/kontak"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
