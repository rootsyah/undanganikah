export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  previewUrl: string;
  category: 'modern' | 'rustic' | 'elegant' | 'minimalist';
  price: number;
  rating: number;
  reviewCount: number;
  featured: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface HowToOrderStep {
  number: number;
  title: string;
  description: string;
}
