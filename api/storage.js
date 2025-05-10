// In-memory storage untuk API serverless
class MemStorage {
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
  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Template methods
  async getAllTemplates() {
    return Array.from(this.templates.values());
  }
  
  async getTemplateById(id) {
    return this.templates.get(id);
  }
  
  async getTemplatesByCategory(category) {
    return Array.from(this.templates.values()).filter(
      (template) => template.category === category
    );
  }
  
  async getFeaturedTemplates() {
    return Array.from(this.templates.values()).filter(
      (template) => template.featured === 1
    );
  }
  
  async createTemplate(insertTemplate) {
    const id = this.templateId++;
    const template = { ...insertTemplate, id };
    this.templates.set(id, template);
    return template;
  }
  
  // Testimonial methods
  async getAllTestimonials() {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial) {
    const id = this.testimonialId++;
    const testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Contact methods
  async createContact(insertContact) {
    const id = this.contactId++;
    const contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Initialize sample data
  initializeTemplates() {
    const templateData = [
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
      }
    ];
    
    templateData.forEach((template) => {
      const id = this.templateId++;
      this.templates.set(id, { ...template, id });
    });
    
    // Additional templates
    for (let i = 4; i <= 30; i++) {
      const category = ["modern", "rustic", "elegant", "minimalist"][Math.floor(Math.random() * 4)];
      const featured = Math.random() > 0.8 ? 1 : 0;
      const rating = 40 + Math.floor(Math.random() * 10);
      const reviewCount = 50 + Math.floor(Math.random() * 100);
      const price = 200000 + Math.floor(Math.random() * 150000);
      
      this.templates.set(i, {
        id: i,
        title: `Template Wedding ${i}`,
        description: `Template undangan pernikahan digital dengan desain ${category}.`,
        imageUrl: `https://images.unsplash.com/photo-${1500000000 + i * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`,
        previewUrl: `https://images.unsplash.com/photo-${1500000000 + i * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80`,
        category: category,
        price: price,
        rating: rating,
        reviewCount: reviewCount,
        featured: featured
      });
    }
  }
  
  initializeTestimonials() {
    const testimonialData = [
      {
        name: "Ratna Sari",
        location: "Jakarta",
        rating: 5,
        comment: "Undangan digital yang sangat cantik dan elegan. Semua tamu memuji desainnya!",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Budi Pratama",
        location: "Bandung",
        rating: 5,
        comment: "Prosesnya sangat mudah dan cepat. Layanan pelanggan juga sangat membantu.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        name: "Dian Permata",
        location: "Surabaya",
        rating: 4,
        comment: "Template yang sangat bagus dengan harga terjangkau. Sangat direkomendasikan!",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      }
    ];
    
    testimonialData.forEach((testimonial) => {
      const id = this.testimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }
}

export const storage = new MemStorage();