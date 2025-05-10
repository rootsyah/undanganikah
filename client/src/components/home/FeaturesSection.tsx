import { Feature } from "@/lib/types";

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      title: "Desain Eksklusif",
      description: "Template dengan desain elegan dan eksklusif yang tidak ditemukan di tempat lain.",
      icon: "paint-brush",
    },
    {
      title: "Responsif",
      description: "Tampilan sempurna di semua perangkat, dari desktop hingga smartphone.",
      icon: "mobile-alt",
    },
    {
      title: "Mudah Digunakan",
      description: "Proses pemesanan dan penggunaan template yang sederhana dan mudah.",
      icon: "cog",
    },
    {
      title: "Dukungan Penuh",
      description: "Layanan pelanggan siap membantu Anda dengan segala pertanyaan.",
      icon: "headset",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Kami menyediakan koleksi template undangan pernikahan digital terbaik dengan fitur lengkap dan desain eksklusif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="mb-4 text-primary text-4xl">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
