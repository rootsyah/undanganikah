import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TemplateDetailHeader from "@/components/template/TemplateDetailHeader";
import TemplateDetailContent from "@/components/template/TemplateDetailContent";
import TemplatePreviewModal from "@/components/template/TemplatePreviewModal";
import { Template } from "@/lib/types";

export default function TemplateDetail() {
  const [, params] = useRoute("/templates/:id");
  const templateId = params?.id ? parseInt(params.id) : 0;
  const [showPreview, setShowPreview] = useState(false);
  
  const { data: template, isLoading, error } = useQuery<Template>({
    queryKey: [`/api/templates/${templateId}`],
    queryFn: async () => {
      const res = await fetch(`/api/templates/${templateId}`);
      
      if (!res.ok) {
        throw new Error('Template tidak ditemukan');
      }
      
      return res.json();
    },
  });
  
  const handlePreviewClick = () => {
    setShowPreview(true);
  };
  
  const handleClosePreview = () => {
    setShowPreview(false);
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
                <div className="w-full md:w-1/2">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                  <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-12 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !template) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Template Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">
              Maaf, template yang Anda cari tidak tersedia atau telah dihapus.
            </p>
            <a 
              href="/templates" 
              className="bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Kembali ke Daftar Template
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{template.title} - E-Undangan</title>
        <meta name="description" content={template.description} />
        <meta property="og:title" content={`${template.title} - E-Undangan`} />
        <meta property="og:description" content={template.description} />
        <meta property="og:image" content={template.imageUrl} />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <TemplateDetailHeader 
            template={template} 
            onPreviewClick={handlePreviewClick} 
          />
          
          <TemplateDetailContent template={template} />
        </main>
        
        <Footer />
        
        {showPreview && (
          <TemplatePreviewModal 
            template={template} 
            onClose={handleClosePreview} 
          />
        )}
      </div>
    </>
  );
}
