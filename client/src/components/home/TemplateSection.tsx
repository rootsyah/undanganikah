import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import TemplateCard from "@/components/template/TemplateCard";
import TemplatePreviewModal from "@/components/template/TemplatePreviewModal";
import { Template } from "@/lib/types";

export default function TemplateSection() {
  const [category, setCategory] = useState("all");
  const [showPreview, setShowPreview] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [displayLimit, setDisplayLimit] = useState(6);
  
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
  
  const handleLoadMore = () => {
    setDisplayLimit(prev => prev + 6);
  };
  
  const categories = [
    { id: "all", name: "Semua" },
    { id: "modern", name: "Modern" },
    { id: "rustic", name: "Rustic" },
    { id: "elegant", name: "Elegant" },
    { id: "minimalist", name: "Minimalist" },
  ];

  return (
    <section id="template" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Koleksi Template
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Pilih dari 30+ template undangan pernikahan digital dengan desain eksklusif dan fitur lengkap.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Templates Grid */}
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.slice(0, displayLimit).map((template: Template) => (
              <TemplateCard 
                key={template.id} 
                template={template} 
                onPreview={() => handlePreview(template)} 
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {templates.length > displayLimit && (
          <div className="text-center mt-12">
            <button
              className="bg-secondary hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
              onClick={handleLoadMore}
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
        
        {/* View All Button */}
        {templates.length > 0 && (
          <div className="text-center mt-8">
            <Link
              href="/templates"
              className="text-primary hover:underline font-medium transition duration-300"
            >
              Lihat Semua Template
            </Link>
          </div>
        )}
      </div>
      
      {/* Preview Modal */}
      {showPreview && previewTemplate && (
        <TemplatePreviewModal 
          template={previewTemplate} 
          onClose={handleClosePreview} 
        />
      )}
    </section>
  );
}
