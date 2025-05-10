import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get('/api/templates', async (req, res) => {
    try {
      const category = req.query.category as string;
      
      if (category && category !== 'all') {
        const templates = await storage.getTemplatesByCategory(category);
        return res.json(templates);
      } else {
        const templates = await storage.getAllTemplates();
        return res.json(templates);
      }
    } catch (error) {
      console.error('Error fetching templates:', error);
      return res.status(500).json({ message: 'Failed to fetch templates' });
    }
  });

  app.get('/api/templates/featured', async (req, res) => {
    try {
      const templates = await storage.getFeaturedTemplates();
      return res.json(templates);
    } catch (error) {
      console.error('Error fetching featured templates:', error);
      return res.status(500).json({ message: 'Failed to fetch featured templates' });
    }
  });

  app.get('/api/templates/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid template ID' });
      }
      
      const template = await storage.getTemplateById(id);
      if (!template) {
        return res.status(404).json({ message: 'Template not found' });
      }
      
      return res.json(template);
    } catch (error) {
      console.error('Error fetching template:', error);
      return res.status(500).json({ message: 'Failed to fetch template' });
    }
  });

  app.get('/api/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      return res.json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return res.status(500).json({ message: 'Failed to fetch testimonials' });
    }
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const validation = insertContactSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: 'Invalid contact information',
          errors: validation.error.errors 
        });
      }
      
      const contact = await storage.createContact(validation.data);
      return res.status(201).json(contact);
    } catch (error) {
      console.error('Error creating contact:', error);
      return res.status(500).json({ message: 'Failed to submit contact form' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
