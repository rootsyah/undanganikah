#!/bin/bash

# Build frontend
echo "🔨 Building frontend..."
vite build

# Structure check
if [ -d "dist/public" ]; then
  echo "Moving files from dist/public to dist..."
  cp -r dist/public/* dist/
  rm -rf dist/public
fi

# Create API directory
echo "Creating API directory..."
mkdir -p dist/api

# Copy API files
echo "Copying API files..."
cp -r api/* dist/api/

echo "Build completed successfully!"
