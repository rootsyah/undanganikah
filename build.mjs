#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Fungsi untuk menjalankan command
function run(command) {
  console.log(`🔨 Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Clear dist directory
if (fs.existsSync('dist')) {
  console.log('🧹 Clearing dist directory...');
  fs.rmSync('dist', { recursive: true, force: true });
}

// Create fresh dist directory
fs.mkdirSync('dist', { recursive: true });

// Build client
console.log('🔨 Building client...');
run('vite build');

// Move files from dist/public to dist root if needed
if (fs.existsSync('dist/public')) {
  console.log('📂 Moving files from dist/public to dist root...');
  const files = fs.readdirSync('dist/public');
  for (const file of files) {
    const srcPath = path.join('dist/public', file);
    const destPath = path.join('dist', file);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
  fs.rmSync('dist/public', { recursive: true, force: true });
}

// Create API directory
fs.mkdirSync('dist/api', { recursive: true });

// Copy API files
console.log('📂 Copying API files...');
const apiFiles = fs.readdirSync('api');
for (const file of apiFiles) {
  const srcPath = path.join('api', file);
  const destPath = path.join('dist/api', file);
  
  if (fs.lstatSync(srcPath).isDirectory()) {
    fs.mkdirSync(destPath, { recursive: true });
    const nestedFiles = fs.readdirSync(srcPath);
    for (const nestedFile of nestedFiles) {
      fs.copyFileSync(
        path.join(srcPath, nestedFile),
        path.join(destPath, nestedFile)
      );
    }
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
}

// Verify build
if (!fs.existsSync('dist/index.html')) {
  console.error('❌ Error: index.html not found in dist');
  process.exit(1);
}

console.log('✅ Build completed successfully!');
