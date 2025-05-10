import { storage } from './storage';

export default async function handler(req, res) {
  try {
    const templates = await storage.getFeaturedTemplates();
    return res.json(templates);
  } catch (error) {
    console.error('Error fetching featured templates:', error);
    return res.status(500).json({ message: 'Failed to fetch featured templates' });
  }
}