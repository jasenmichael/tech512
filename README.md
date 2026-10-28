# TECH 512

Website for TECH 512. Nuxt 4, Tailwind, and Nuxt Content. `robots.txt` and `sitemap.xml` are generated from the pages.

Production builds allow indexing. A Netlify deploy preview should set `NUXT_SITE_ENV=staging` so that preview is not indexed.

## Setup

Nuxt 4.6 needs Node.js 22.22.3 or newer on the 22 line, Node.js 24.15.0 or newer on the 24 line, or Node.js 26 or newer.

```bash
git clone <repository-url>
cd tech512
npm install
npm run dev
```

The dev server opens at http://localhost:3000.

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes the production server to `.output`. `npm run preview` serves that build locally.

`npm run generate` writes a static site to `.output/public` on your machine. Netlify does not publish that folder.

## Google Business Profile

Update the existing TECH 512 listing by hand. Do not create a second listing.

- Keep the business name TECH 512.
- Set the primary category to Software company.
- Remove computer repair and IT-support categories.
- Set the website to https://tech512.com.
- Keep the phone at (512) 906-7113.
- Leave the verified street address on Google. The website does not print it.

## Deploy

Netlify hosts the site. Cloudflare keeps DNS. Do not point tech512.com at a new deploy until asked.

Netlify runs `npm install` before the build. Do not add an install step to the build command.

`main` is the branch Netlify deploys. An existing site stays on the Node.js version it was created with. Link this repository to that site, then set:

**Project configuration → Developer settings → Continuous deployment → Build settings**

- Base directory: empty (repository root)
- Build command: `npm run build`
- Publish directory: `dist`

**Project configuration → Developer settings → Continuous deployment → Branches and deploy contexts**

- Production branch: `main`

**Project configuration → Developer settings → Continuous deployment → Dependency management**

- Node.js version: `24`

Node 24 is the current default for new Netlify sites and satisfies Nuxt 4.6. If the functions runtime is already pinned to an older Node, set that to 24 as well. It usually follows the build version.

**Project configuration → Environment variables**

- Key: `NUXT_SITE_ENV`
- Deploy Previews value: `staging`
- Production: leave unset

Pages are prerendered during the build, so the variable has to be present on the preview build. Production stays indexable. Scope can stay on all scopes. Limiting scope is a paid option and is not required.

Leave the custom domain and the Cloudflare DNS records alone.

On Netlify, Nuxt detects the Netlify build and writes the site to `dist`, including a Netlify Function for the server. A local `npm run build` writes `.output` instead. That split is expected.
