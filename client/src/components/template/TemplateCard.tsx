import { Link } from "wouter";
import { Template } from "@/lib/types";

interface TemplateCardProps {
  template: Template;
  onPreview: () => void;
}

export default function TemplateCard({ template, onPreview }: TemplateCardProps) {
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

  return (
    <div 
      className="template-card group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
      data-category={template.category}
    >
      <div className="relative overflow-hidden">
        <img 
          src={template.imageUrl} 
          alt={template.title} 
          className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
          <button 
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 mr-2"
            onClick={onPreview}
          >
            <i className="fas fa-eye mr-1"></i> Preview
          </button>
          <Link 
            href={`/templates/${template.id}`}
            className="inline-block bg-white text-dark py-2 px-4 rounded-md hover:bg-gray-100"
          >
            <i className="fas fa-shopping-cart mr-1"></i> Beli
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold mb-2">{template.title}</h3>
        <p className="text-secondary mb-3">{template.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary text-xl">{formatPrice(template.price)}</span>
          <span className="text-sm text-secondary">
            <i className="fas fa-star text-yellow-400"></i> {formatRating(template.rating)} ({template.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}
