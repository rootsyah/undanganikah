import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactForm } from "@/lib/types";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => 
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Pesan terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
        variant: "success"
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Gagal mengirim pesan",
        description: error.message || "Terjadi kesalahan. Silakan coba lagi nanti.",
        variant: "destructive"
      });
    }
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="kontak" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi kami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-dark font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-dark font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan alamat email Anda"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-dark font-medium mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan nomor telepon Anda"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tulis pesan Anda di sini"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex justify-center items-center"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : "Kirim Pesan"}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-4">Informasi Kontak</h3>
              <p className="text-secondary mb-6">
                Hubungi kami melalui salah satu metode di bawah ini.
              </p>
              
              <div className="flex items-start mb-4">
                <div className="text-primary text-xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Alamat</h4>
                  <p className="text-secondary">Jl. Merdeka No. 123, Jakarta Pusat, 10110</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-primary text-xl mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-secondary">info@e-undangan.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-primary text-xl mr-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telepon</h4>
                  <p className="text-secondary">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Jam Operasional</h3>
              <p className="text-secondary mb-2">Senin - Jumat: 09:00 - 17:00 WIB</p>
              <p className="text-secondary">Sabtu: 09:00 - 14:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
