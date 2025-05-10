import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Template } from "@/lib/types";

interface TemplateDetailContentProps {
  template: Template;
}

export default function TemplateDetailContent({ template }: TemplateDetailContentProps) {
  const [activeTab, setActiveTab] = useState("description");
  
  // Get similar templates based on category
  const { data: similarTemplates = [] } = useQuery({
    queryKey: ['/api/templates', template.category],
    queryFn: async () => {
      const res = await fetch(`/api/templates?category=${template.category}`);
      return res.json();
    }
  });
  
  // Filter out current template and limit to 3
  const filteredSimilarTemplates = similarTemplates
    .filter((t: Template) => t.id !== template.id)
    .slice(0, 3);
  
  const tabs = [
    { id: "description", label: "Deskripsi" },
    { id: "features", label: "Fitur" },
    { id: "specs", label: "Spesifikasi" }
  ];
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="flex border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`py-3 px-6 font-medium ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold mb-3">Detail Template</h3>
                <p className="text-gray-700 mb-4">
                  {template.description} Template undangan pernikahan digital ini memiliki desain yang elegan dan eksklusif,
                  cocok untuk momen spesial pernikahan Anda.
                </p>
                <p className="text-gray-700">
                  Dengan tampilan yang responsif, undangan digital ini dapat diakses dengan baik melalui berbagai perangkat 
                  seperti smartphone, tablet, dan desktop. Anda dapat dengan mudah mengirimkan undangan kepada tamu melalui 
                  WhatsApp, Email, atau media sosial lainnya.
                </p>
              </div>
            )}
            
            {activeTab === "features" && (
              <div>
                <h3 className="text-xl font-bold mb-3">Fitur Template</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Desain eksklusif dan elegan</li>
                  <li>Responsif di semua perangkat</li>
                  <li>Informasi pasangan pengantin</li>
                  <li>Detail acara pernikahan</li>
                  <li>Peta lokasi dengan Google Maps</li>
                  <li>Galeri foto prewedding</li>
                  <li>Fitur RSVP untuk konfirmasi kehadiran</li>
                  <li>Countdown timer menuju hari pernikahan</li>
                  <li>Quotes atau ucapan romantis</li>
                  <li>Live streaming link (opsional)</li>
                </ul>
              </div>
            )}
            
            {activeTab === "specs" && (
              <div>
                <h3 className="text-xl font-bold mb-3">Spesifikasi</h3>
                <table className="w-full text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Format</td>
                      <td className="py-2">Responsive Web</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Kompatibilitas</td>
                      <td className="py-2">Desktop, Tablet, Mobile</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Masa Aktif</td>
                      <td className="py-2">1 Tahun</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Revisi</td>
                      <td className="py-2">2x Gratis</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Proses Pengerjaan</td>
                      <td className="py-2">1-2 Hari Kerja</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Support</td>
                      <td className="py-2">WhatsApp, Email</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        {/* Similar Templates */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Template Serupa</h3>
          
          {filteredSimilarTemplates.length > 0 ? (
            <div className="space-y-4">
              {filteredSimilarTemplates.map((similar: Template) => (
                <Link key={similar.id} href={`/templates/${similar.id}`}>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition duration-200">
                    <img 
                      src={similar.imageUrl} 
                      alt={similar.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-bold">{similar.title}</h4>
                      <p className="text-primary font-medium">{formatPrice(similar.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Tidak ada template serupa saat ini.</p>
          )}
          
          <div className="mt-6">
            <Link
              href="/templates"
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Lihat Semua Template
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
