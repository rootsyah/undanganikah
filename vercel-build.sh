{
  "version": 2,
  "buildCommand": "bash vercel-build.sh",
  "outputDirectory": "dist",
  "functions": {
    "api/**/*.js": {
      "memory": 1024
    }
  },
  "routes": [
    {
      "src": "/api/templates",
      "dest": "/api/templates.js",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    {
      "src": "/api/templates/featured",
      "dest": "/api/featured.js",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    {
      "src": "/api/templates/(\\d+)",
      "dest": "/api/templates/[id].js?id=$1",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    {
      "src": "/api/testimonials",
      "dest": "/api/testimonials.js",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    {
      "src": "/api/contact",
      "dest": "/api/contact.js",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    },
    { "handle": "filesystem" },
    { "src": "/assets/(.*)", "dest": "/assets/$1" },
    { "src": "/(.+)", "dest": "/$1" },
    { "src": "/(.*)", "dest": "/index.html", "status": 200 }
  ]
}
