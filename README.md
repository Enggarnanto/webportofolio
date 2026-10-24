# Web Portofolio

Portofolio statis berbasis Astro dan Markdown, siap di-host gratis menggunakan GitHub Pages.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Build produksi dan pemeriksaan TypeScript:

```bash
npm run build
```

## Mengganti identitas

Informasi profil dan kontak utama berada di `src/pages/index.astro` dan `src/layouts/BaseLayout.astro`.

## Menambah project

Duplikasi salah satu file di `src/content/projects/`. Nama file akan menjadi URL project. Frontmatter yang tersedia:

```yaml
title: "Nama Project"
description: "Deskripsi singkat"
date: 2026-10-24
category: "Website"
technologies: ["Astro", "TypeScript"]
featured: true
status: "Selesai"
accent: "lime" # lime, orange, violet, atau blue
demo: "https://example.com" # opsional
github: "https://github.com/username/repo" # opsional
```

## Deploy ke GitHub Pages

1. Buat repository GitHub dan push proyek ini ke branch `main`.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **GitHub Actions**.
4. Push berikutnya akan menjalankan workflow `.github/workflows/deploy.yml`.

Untuk custom domain, set environment variable `SITE_URL` atau ganti nilai `site` dalam `astro.config.mjs`.

## Decap CMS

Konten sudah disusun agar mudah dihubungkan ke Decap CMS. Integrasi admin sengaja belum diaktifkan karena backend GitHub memerlukan nama repository dan konfigurasi autentikasi OAuth.
