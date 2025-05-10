#!/bin/bash

# Build client saja (tanpa server)
echo "🔨 Building client..."
vite build

# Pastikan output berada di root dist bukan di dist/public
echo "📂 Menyesuaikan struktur output..."
if [ -d "dist/public" ]; then
  echo "Memindahkan file dari dist/public ke dist..."
  cp -r dist/public/* dist/
  rm -rf dist/public
fi

# Pastikan folder API disalin
echo "📂 Copying API files to dist..."
mkdir -p dist/api

# Salin file API
cp -r api/* dist/api/

# Pastikan index.html ada di root
echo "📂 Verifikasi index.html ada di root..."
if [ ! -f "dist/index.html" ]; then
  echo "PERINGATAN: index.html tidak ditemukan di root dist"
  ls -la dist
fi

echo "✅ Build selesai!"
