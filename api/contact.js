import { storage } from './storage';

export default async function handler(req, res) {
  // Hanya izinkan metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const contactData = req.body;
    
    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.message) {
      return res.status(400).json({ 
        message: 'Invalid contact information. Name, email, and message are required.' 
      });
    }
    
    const contact = await storage.createContact(contactData);
    return res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: 'Failed to submit contact form' });
  }
}