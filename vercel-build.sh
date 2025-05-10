#!/bin/bash

# Build client saja (tanpa server)
echo "🔨 Building client..."
vite build

# Pastikan folder API disalin
echo "📂 Copying API files to dist..."
mkdir -p dist/api

# Salin file API
cp -r api/* dist/api/

echo "✅ Build selesai!"