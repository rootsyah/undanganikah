#!/bin/bash

# Clear dist directory if it exists
if [ -d "dist" ]; then
  echo "🧹 Clearing dist directory..."
  rm -rf dist
fi

# Create fresh dist directory
mkdir -p dist

# Build client
echo "🔨 Building client..."
vite build

# Move files from dist/public to dist root if needed
if [ -d "dist/public" ]; then
  echo "📂 Moving files from dist/public to dist root..."
  cp -r dist/public/* dist/
  rm -rf dist/public
fi

# Create index.html in dist if it doesn't exist (safety check)
if [ ! -f "dist/index.html" ]; then
  echo "⚠️ index.html not found in dist, creating basic one..."
  cat <<EOF > dist/index.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-Undangan - Template Undangan Digital</title>
  <link rel="stylesheet" href="/assets/index-Cp6rgrUk.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-BLAc_xpX.js"></script>
</body>
</html>
EOF
fi

# Copy API files
echo "📂 Copying API files to dist..."
mkdir -p dist/api
cp -r api/* dist/api/

# Verify dist structure
echo "📂 Final dist structure:"
find dist -type f | sort

echo "✅ Build completed successfully!"
