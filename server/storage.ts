import { 
  users, type User, type InsertUser, 
  templates, type Template, type InsertTemplate,
  testimonials, type Testimonial, type InsertTestimonial,
  contacts, type Contact, type InsertContact 
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Template methods
  getAllTemplates(): Promise<Template[]>;
  getTemplateById(id: number): Promise<Template | undefined>;
  getTemplatesByCategory(category: string): Promise<Template[]>;
  getFeaturedTemplates(): Promise<Template[]>;
  createTemplate(template: InsertTemplate): Promise<Template>;
  
  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private templates: Map<number, Template>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  
  private userId: number;
  private templateId: number;
  private testimonialId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.templates = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    
    this.userId = 1;
    this.templateId = 1;
    this.testimonialId = 1;
    this.contactId = 1;
    
    // Initialize with sample templates
    this.initializeTemplates();
    this.initializeTestimonials();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Template methods
  async getAllTemplates(): Promise<Template[]> {
    return Array.from(this.templates.values());
  }
  
  async getTemplateById(id: number): Promise<Template | undefined> {
    return this.templates.get(id);
  }
  
  async getTemplatesByCategory(category: string): Promise<Template[]> {
    return Array.from(this.templates.values()).filter(
      (template) => template.category === category
    );
  }
  
  async getFeaturedTemplates(): Promise<Template[]> {
    return Array.from(this.templates.values()).filter(
      (template) => template.featured === 1
    );
  }
  
  async createTemplate(insertTemplate: InsertTemplate): Promise<Template> {
    const id = this.templateId++;
    const template: Template = { ...insertTemplate, id };
    this.templates.set(id, template);
    return template;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Initialize sample data
  private initializeTemplates() {
    const templateData: InsertTemplate[] = [
      {
        title: "Elegance Gold",
        description: "Template elegan dengan aksen gold dan desain klasik.",
        imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 299000,
        rating: 49,
        reviewCount: 120,
        featured: 1
      },
      {
        title: "Minimal Chic",
        description: "Desain minimalis kontemporer dengan tipografi modern.",
        imageUrl: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 249000,
        rating: 48,
        reviewCount: 98,
        featured: 1
      },
      {
        title: "Rustic Garden",
        description: "Template dengan tema taman dan sentuhan alami.",
        imageUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 279000,
        rating: 47,
        reviewCount: 85,
        featured: 0
      },
      {
        title: "Geometric Bliss",
        description: "Desain modern dengan elemen geometris dan warna-warna cerah.",
        imageUrl: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 329000,
        rating: 49,
        reviewCount: 156,
        featured: 1
      },
      {
        title: "Floral Dreams",
        description: "Template dengan ilustrasi bunga dan warna pastel yang lembut.",
        imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 289000,
        rating: 48,
        reviewCount: 112,
        featured: 0
      },
      {
        title: "Monochrome",
        description: "Desain minimalis hitam putih dengan tipografi elegan.",
        imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 259000,
        rating: 47,
        reviewCount: 92,
        featured: 0
      },
      {
        title: "Golden Flourish",
        description: "Template mewah dengan ornamen gold dan detail elegan.",
        imageUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 309000,
        rating: 47,
        reviewCount: 78,
        featured: 0
      },
      {
        title: "Botanical Love",
        description: "Desain dengan elemen botanikal dan nuansa alam.",
        imageUrl: "https://images.unsplash.com/photo-1560337832-453c92e9de4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1560337832-453c92e9de4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 269000,
        rating: 46,
        reviewCount: 65,
        featured: 0
      },
      {
        title: "Art Deco",
        description: "Template bergaya art deco dengan sentuhan glamor.",
        imageUrl: "https://images.unsplash.com/photo-1550784343-e48826525c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80", 
        previewUrl: "https://images.unsplash.com/photo-1550784343-e48826525c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 339000,
        rating: 48,
        reviewCount: 87,
        featured: 0
      },
      {
        title: "Ethereal Light",
        description: "Desain ringan dengan efek cahaya dan elemen transparan.",
        imageUrl: "https://images.unsplash.com/photo-1516528920742-9a607b3a29e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1516528920742-9a607b3a29e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 279000,
        rating: 45,
        reviewCount: 56,
        featured: 0
      },
      {
        title: "Marble Elegance",
        description: "Template dengan tekstur marmer dan detail gold yang mewah.",
        imageUrl: "https://images.unsplash.com/photo-1592854899481-f78db4baccb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1592854899481-f78db4baccb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 319000,
        rating: 50,
        reviewCount: 134,
        featured: 1
      },
      {
        title: "Vintage Charm",
        description: "Desain dengan gaya vintage dan sentuhan klasik.",
        imageUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 289000,
        rating: 47,
        reviewCount: 91,
        featured: 0
      },
      {
        title: "Watercolor Dream",
        description: "Template dengan latar efek cat air dan nuansa lembut.",
        imageUrl: "https://images.unsplash.com/photo-1544144554-41d3098c8e9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1544144554-41d3098c8e9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 299000,
        rating: 48,
        reviewCount: 103,
        featured: 0
      },
      {
        title: "Classic Script",
        description: "Desain klasik dengan kaligrafi dan ornamen elegan.",
        imageUrl: "https://images.unsplash.com/photo-1498276458251-54750936c6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1498276458251-54750936c6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 279000,
        rating: 46,
        reviewCount: 82,
        featured: 0
      },
      {
        title: "Urban Minimalist",
        description: "Template modern dengan gaya urban dan desain simpel.",
        imageUrl: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 249000,
        rating: 47,
        reviewCount: 79,
        featured: 0
      },
      {
        title: "Sunset Love",
        description: "Desain dengan tema sunset dan warna gradasi hangat.",
        imageUrl: "https://images.unsplash.com/photo-1570051008600-b34baa49e751?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1570051008600-b34baa49e751?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 289000,
        rating: 48,
        reviewCount: 92,
        featured: 0
      },
      {
        title: "Modern Calligraphy",
        description: "Template dengan kaligrafi modern dan layout clean.",
        imageUrl: "https://images.unsplash.com/photo-1592433105560-3a47102b2d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1592433105560-3a47102b2d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 259000,
        rating: 49,
        reviewCount: 108,
        featured: 1
      },
      {
        title: "Royal Wedding",
        description: "Desain mewah dengan ornamen royal dan nuansa elegan.",
        imageUrl: "https://images.unsplash.com/photo-1609610533035-3991a6d0f0b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1609610533035-3991a6d0f0b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 349000,
        rating: 50,
        reviewCount: 142,
        featured: 1
      },
      {
        title: "Garden Party",
        description: "Template dengan tema garden party dan elemen floral.",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 299000,
        rating: 47,
        reviewCount: 89,
        featured: 0
      },
      {
        title: "Bohemian Spirit",
        description: "Desain dengan nuansa bohemian dan elemen alam.",
        imageUrl: "https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 269000,
        rating: 46,
        reviewCount: 75,
        featured: 0
      },
      {
        title: "Clean Typography",
        description: "Template dengan fokus pada tipografi dan ruang putih.",
        imageUrl: "https://images.unsplash.com/photo-1551376347-075b0121a903?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1551376347-075b0121a903?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 239000,
        rating: 48,
        reviewCount: 96,
        featured: 0
      },
      {
        title: "Luxury Gold",
        description: "Desain mewah dengan aksen gold dan detail ornamen.",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 329000,
        rating: 49,
        reviewCount: 124,
        featured: 0
      },
      {
        title: "Tropical Vibes",
        description: "Template dengan tema tropis dan warna-warna cerah.",
        imageUrl: "https://images.unsplash.com/photo-1460058418905-d61a1b4a55fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1460058418905-d61a1b4a55fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 279000,
        rating: 47,
        reviewCount: 88,
        featured: 0
      },
      {
        title: "Rustic Charm",
        description: "Desain rustic dengan elemen kayu dan detail vintage.",
        imageUrl: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 289000,
        rating: 48,
        reviewCount: 98,
        featured: 0
      },
      {
        title: "Modern Gradient",
        description: "Template dengan efek gradient dan desain kontemporer.",
        imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 299000,
        rating: 49,
        reviewCount: 115,
        featured: 0
      },
      {
        title: "Classic Romance",
        description: "Desain klasik dengan nuansa romantis dan elegan.",
        imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 299000,
        rating: 48,
        reviewCount: 105,
        featured: 0
      },
      {
        title: "Simple Leaves",
        description: "Template simpel dengan motif daun dan nuansa natural.",
        imageUrl: "https://images.unsplash.com/photo-1546333604-bb1969f57e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1546333604-bb1969f57e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "minimalist",
        price: 249000,
        rating: 47,
        reviewCount: 84,
        featured: 0
      },
      {
        title: "Vintage Rose",
        description: "Desain vintage dengan motif mawar dan detail klasik.",
        imageUrl: "https://images.unsplash.com/photo-1569854095063-f58d986c1f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1569854095063-f58d986c1f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "rustic",
        price: 279000,
        rating: 46,
        reviewCount: 78,
        featured: 0
      },
      {
        title: "Geometric Gold",
        description: "Template dengan pola geometris dan aksen emas.",
        imageUrl: "https://images.unsplash.com/photo-1601224335116-c253544047c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1601224335116-c253544047c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "modern",
        price: 309000,
        rating: 49,
        reviewCount: 118,
        featured: 0
      },
      {
        title: "Elegant Script",
        description: "Desain elegan dengan kaligrafi dan garis-garis halus.",
        imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
        previewUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80",
        category: "elegant",
        price: 289000,
        rating: 47,
        reviewCount: 93,
        featured: 0
      }
    ];
    
    for (let template of templateData) {
      this.createTemplate(template);
    }
  }
  
  private initializeTestimonials() {
    const testimonialData: InsertTestimonial[] = [
      {
        name: "Ratna Sari",
        location: "Jakarta",
        rating: 5,
        comment: "Template yang sangat indah dan elegan. Banyak teman kami yang memuji desain undangan pernikahan kami. Proses pemesanan juga sangat mudah.",
        imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Budi Santoso",
        location: "Bandung",
        rating: 5,
        comment: "Pelayanan super cepat dan responsif. Template yang kami pilih sangat sesuai dengan tema pernikahan kami. Sangat merekomendasikan!",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Rina & Andi",
        location: "Surabaya",
        rating: 4.5,
        comment: "Desain yang sangat cantik dan profesional. Tim support sangat membantu ketika kami membutuhkan penyesuaian. Terima kasih!",
        imageUrl: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Diana & Reza",
        location: "Yogyakarta",
        rating: 5,
        comment: "Undangan digital kami mendapat banyak pujian dari tamu. Desainnya sangat elegan dan terlihat mewah. Sangat puas dengan hasilnya!",
        imageUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Arif Wicaksono",
        location: "Semarang",
        rating: 4.5,
        comment: "Proses pemesanan sangat mudah dan tim customer service sangat membantu. Template yang kami pilih sesuai dengan yang diharapkan.",
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      }
    ];
    
    for (let testimonial of testimonialData) {
      this.createTestimonial(testimonial);
    }
  }
}

export const storage = new MemStorage();
