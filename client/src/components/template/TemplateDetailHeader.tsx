import { Link } from "wouter";
import { Template } from "@/lib/types";

interface TemplateDetailHeaderProps {
  template: Template;
  onPreviewClick: () => void;
}

export default function TemplateDetailHeader({ template, onPreviewClick }: TemplateDetailHeaderProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const formatRating = (rating: number) => {
    return (rating / 10).toFixed(1);
  };
  
  const getCategoryLabel = (category: string) => {
    const categories = {
      modern: "Modern",
      rustic: "Rustic",
      elegant: "Elegant",
      minimalist: "Minimalist"
    };
    return categories[category as keyof typeof categories] || category;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={template.imageUrl} 
              alt={template.title} 
              className="w-full h-auto object-cover"
            />
            <button 
              onClick={onPreviewClick}
              className="absolute bottom-4 right-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              <i className="fas fa-eye mr-2"></i>
              Preview
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
              {getCategoryLabel(template.category)}
            </span>
            {template.featured === 1 && (
              <span className="inline-block bg-primary bg-opacity-10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-3xl font-display font-bold mb-3">{template.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              <i className="fas fa-star"></i>
            </div>
            <span className="text-gray-700">
              {formatRating(template.rating)} ({template.reviewCount} reviews)
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{template.description}</p>
          
          <div className="text-3xl font-bold text-primary mb-6">
            {formatPrice(template.price)}
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Beli Sekarang
            </button>
            <Link href="/cara-pesan" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300">
              Cara Pemesanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
