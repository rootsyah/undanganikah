import { storage } from './storage';

export default async function handler(req, res) {
  try {
    const testimonials = await storage.getAllTestimonials();
    return res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return res.status(500).json({ message: 'Failed to fetch testimonials' });
  }
}