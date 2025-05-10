import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TemplateCard from "@/components/template/TemplateCard";
import TemplatePreviewModal from "@/components/template/TemplatePreviewModal";
import { Template } from "@/lib/types";

export default function Templates() {
  const [location] = useLocation();
  const [category, setCategory] = useState("all");
  const [showPreview, setShowPreview] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  
  // Check if there's a category in the URL query
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [location]);
  
  const { data: templates = [], isLoading } = useQuery({
    queryKey: ['/api/templates', category],
    queryFn: async () => {
      const url = category === 'all' 
        ? '/api/templates' 
        : `/api/templates?category=${category}`;
      return fetch(url).then(res => res.json());
    }
  });
  
  const handlePreview = (template: Template) => {
    setPreviewTemplate(template);
    setShowPreview(true);
  };
  
  const handleClosePreview = () => {
    setShowPreview(false);
  };
  
  const categories = [
    { id: "all", name: "Semua" },
    { id: "modern", name: "Modern" },
    { id: "rustic", name: "Rustic" },
    { id: "elegant", name: "Elegant" },
    { id: "minimalist", name: "Minimalist" },
  ];
  
  const getCategoryTitle = () => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : "Semua";
  };

  return (
    <>
      <Helmet>
        <title>Template Undangan Pernikahan Digital - E-Undangan</title>
        <meta name="description" content="Pilih dari 30+ template undangan pernikahan digital dengan desain eksklusif dan fitur lengkap. Template responsif untuk semua perangkat." />
        <meta property="og:title" content="Template Undangan Pernikahan Digital - E-Undangan" />
        <meta property="og:description" content="Pilih dari 30+ template undangan pernikahan digital dengan desain eksklusif dan fitur lengkap. Template responsif untuk semua perangkat." />
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
                  Template Undangan Pernikahan {category !== "all" ? getCategoryTitle() : ""}
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                  Pilih template undangan pernikahan digital yang sesuai dengan selera dan kebutuhan Anda.
                </p>
              </div>
              
              {/* Filter Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`py-2 px-6 rounded-full transition duration-300 ${
                      category === cat.id
                        ? "bg-primary text-white hover:bg-opacity-90"
                        : "bg-white text-dark hover:bg-primary hover:text-white shadow-sm"
                    }`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-5 h-96 animate-pulse">
                      <div className="w-full h-72 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : templates.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {templates.map((template: Template) => (
                    <TemplateCard 
                      key={template.id} 
                      template={template} 
                      onPreview={() => handlePreview(template)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="text-4xl text-gray-300 mb-4">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tidak Ada Template</h3>
                  <p className="text-gray-500">
                    Maaf, tidak ada template yang tersedia dalam kategori ini saat ini.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
        
        {showPreview && previewTemplate && (
          <TemplatePreviewModal 
            template={previewTemplate} 
            onClose={handleClosePreview} 
          />
        )}
      </div>
    </>
  );
}
