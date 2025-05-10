import { storage } from './storage';

export default async function handler(req, res) {
  try {
    // Mengambil kategori dari query parameters
    const category = req.query.category;
    
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
}