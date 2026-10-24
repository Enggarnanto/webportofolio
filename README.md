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

Antarmuka CMS tersedia di `/admin/`. Konfigurasi koleksi project berada di `public/admin/config.yml` dan menggunakan Decap Turbo agar autentikasi GitHub dapat berjalan tanpa server OAuth sendiri.

Sebelum login pertama:

1. Buat akun gratis di [Decap Turbo](https://turbo.decapcms.org/signup).
2. Hubungkan GitHub dan batasi akses GitHub App ke repository `Enggarnanto/webportofolio`.
3. Buat site dengan pengaturan berikut:
   - Repo: `Enggarnanto/webportofolio`
   - Branch: `main`
   - Config path: `public/admin/config.yml`
   - Admin URL: `https://enggarnanto.github.io/webportofolio/admin/`
4. Salin Site ID dari halaman Overview.
5. Ganti `REPLACE_WITH_DECAP_TURBO_SITE_ID` di `public/admin/config.yml` dengan Site ID tersebut.

Setiap penyimpanan dari CMS akan membuat commit ke branch `main` dan memicu deploy GitHub Pages.
