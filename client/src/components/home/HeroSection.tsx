import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-shadow">
            Undangan Pernikahan Digital
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow">
            Pilih template indah untuk momen spesial Anda. 30+ pilihan desain
            eksklusif untuk undangan pernikahan digital yang elegan.
          </p>
          <div className="space-x-4">
            <Link
              href="/templates"
              className="inline-block bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Lihat Template
            </Link>
            <Link
              href="/cara-pesan"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Cara Pesan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
