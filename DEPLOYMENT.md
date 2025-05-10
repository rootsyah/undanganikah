# Panduan Deployment di Vercel

Ini adalah panduan untuk men-deploy website E-Undangan ke Vercel.

## Perubahan Arsitektur untuk Vercel

Kode telah distruktur ulang untuk kompatibilitas dengan Vercel Serverless, dengan perubahan utama:

1. Menggunakan file API serverless di folder `api/` (bukan server Express)
2. Menambahkan file `api/storage.js` untuk menyimpan data dalam memori
3. Mengatur routing dengan `rewrites` dalam `vercel.json`
4. Mengoptimalkan build process dengan custom script `vercel-build.sh`

## Cara Deploy

### Opsi 1: Deploy dari GitHub

1. Push kode ini ke repositori GitHub Anda
2. Buat akun di [Vercel](https://vercel.com)
3. Klik "Add New" → "Project"
4. Import repositori GitHub yang berisi proyek ini
5. Pada halaman konfigurasi, secara otomatis Vercel akan mendeteksi:
   - **Framework Preset**: Vite
   - **Build Command**: `./vercel-build.sh` 
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Klik "Deploy"

### Opsi 2: Deploy dari Vercel CLI

1. Install Vercel CLI: `npm install -g vercel`
2. Login ke Vercel: `vercel login`
3. Jalankan command di root directory: `vercel`
4. Ikuti petunjuk yang diberikan

## Konfigurasi yang Diterapkan

Proyek ini sudah dikonfigurasi untuk Vercel dengan:

1. File `vercel.json` dengan pengaturan:
   - `rewrites`: untuk routing API dan frontend
   - `functions`: konfigurasi serverless functions
   - `headers`: untuk CORS dan keamanan
   - `cleanUrls` & `trailingSlash`: untuk optimasi URL
2. Folder `api` dengan file-file serverless:
   - `api/storage.js`: Penyimpanan data dalam memori
   - `api/templates.js`: Endpoint untuk daftar template
   - `api/templates/[id].js`: Endpoint untuk detail template
   - `api/featured.js`: Endpoint untuk template unggulan
   - `api/testimonials.js`: Endpoint untuk testimonial
   - `api/contact.js`: Endpoint untuk form kontak
   - `api/_middleware.js`: Middleware untuk CORS dan header
   - `api/index.js`: Endpoint untuk informasi API
3. Script build khusus `vercel-build.sh` yang:
   - Membangun frontend dengan Vite
   - Menyalin file API ke folder output

## Troubleshooting

Jika mengalami masalah saat deployment:

1. Periksa log build di dashboard Vercel
2. Pastikan semua path di `vercel.json` sudah benar
3. Verifikasi bahwa `vercel-build.sh` memiliki permission untuk dieksekusi (`chmod +x vercel-build.sh`)
4. Pastikan folder `api` dan semua file di dalamnya disertakan dalam repositori

## Perhatian

- API diimplementasikan sebagai serverless functions yang berjalan on-demand
- Data disimpan di memori sehingga akan di-reset setiap kali aplikasi di-deploy ulang atau saat function cold start
- Untuk kebutuhan data yang persisten, Anda perlu menggunakan database seperti Supabase, MongoDB Atlas, atau layanan database lainnya

## Rekomendasi Pengembangan Selanjutnya

- Tambahkan database persisten seperti Vercel Postgres atau Supabase
- Implementasikan sistem autentikasi untuk akses admin
- Tingkatkan performa dengan strategi caching pada endpoint API
