import { useEffect } from "react";
import { Link } from "wouter";
import { Template } from "@/lib/types";

interface TemplatePreviewModalProps {
  template: Template;
  onClose: () => void;
}

export default function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscKey);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    };
  }, [onClose]);
  
  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="fixed inset-0 z-50"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="absolute inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl transform transition-all">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button 
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-4">Preview Template</h3>
              <div className="preview-content overflow-hidden rounded-lg">
                <div className="aspect-w-9 aspect-h-16 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={template.previewUrl} 
                    alt={`Preview ${template.title}`} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-display font-bold">{template.title}</h4>
                  <p className="text-primary font-bold text-lg">{formatPrice(template.price)}</p>
                </div>
                <Link 
                  href={`/templates/${template.id}`}
                  className="bg-primary hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Beli Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
