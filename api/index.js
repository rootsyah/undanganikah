export default function handler(req, res) {
  return res.json({
    name: 'E-Undangan API',
    version: '1.0.0',
    endpoints: [
      '/api/templates',
      '/api/templates/:id',
      '/api/templates/featured',
      '/api/testimonials',
      '/api/contact'
    ]
  });
}