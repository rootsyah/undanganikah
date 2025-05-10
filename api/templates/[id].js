import { storage } from '../storage';

export default async function handler(req, res) {
  try {
    const id = parseInt(req.query.id);
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
}