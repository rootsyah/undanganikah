import { HowToOrderStep } from "@/lib/types";

export default function HowToOrderSection() {
  const steps: HowToOrderStep[] = [
    {
      number: 1,
      title: "Pilih Template",
      description: "Pilih template undangan pernikahan yang sesuai dengan selera dan kebutuhan Anda."
    },
    {
      number: 2,
      title: "Lakukan Pembayaran",
      description: "Selesaikan proses pembayaran melalui metode yang tersedia (transfer bank, e-wallet)."
    },
    {
      number: 3,
      title: "Isi Data & Terima Link",
      description: "Isi data pernikahan, dan terima link undangan digital yang siap dibagikan."
    }
  ];

  return (
    <section id="cara-pesan" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Cara Pemesanan
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Proses pemesanan template undangan pernikahan digital kami sangat mudah dan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
