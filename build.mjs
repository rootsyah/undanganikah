import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Pastikan build untuk vercel
console.log('🏗️ Memulai proses build untuk Vercel...');

// Build client menggunakan Vite
console.log('🔨 Building client...');
execSync('vite build', { stdio: 'inherit' });

// Pastikan folder api disalin ke dist
console.log('📂 Copying API files to dist...');
const apiSourceDir = path.resolve('./api');
const apiDestDir = path.resolve('./dist/api');

// Buat folder api jika belum ada
if (!fs.existsSync(apiDestDir)) {
  fs.mkdirSync(apiDestDir, { recursive: true });
  console.log('📁 Created api directory in dist');
}

// Salin file API
fs.readdirSync(apiSourceDir).forEach(file => {
  const sourcePath = path.join(apiSourceDir, file);
  const destPath = path.join(apiDestDir, file);

  // Jika file adalah direktori, salin secara rekursif
  if (fs.statSync(sourcePath).isDirectory()) {
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }
    
    // Salin file di dalam direktori
    fs.readdirSync(sourcePath).forEach(subFile => {
      const subSourcePath = path.join(sourcePath, subFile);
      const subDestPath = path.join(destPath, subFile);
      fs.copyFileSync(subSourcePath, subDestPath);
      console.log(`📄 Copied ${subSourcePath} to ${subDestPath}`);
    });
  } else {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`📄 Copied ${sourcePath} to ${destPath}`);
  }
});

console.log('✅ Build selesai!');