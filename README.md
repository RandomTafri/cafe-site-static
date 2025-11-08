
# Café Site (Next.js Static Export → GitHub Pages)

This repo is pre-configured to **export static HTML** and **auto-deploy to GitHub Pages** on every push to `main`.

## Local Dev
```bash
npm install
npm run dev
```

## Produce static files locally
```bash
npm run build:static   # outputs to ./out
```

## One-time GitHub setup
1. Create a repo on GitHub (any name, e.g., `cafe-site`).
2. Push this code to that repo.
3. GitHub → Settings → Pages → **Source: GitHub Actions** (no branch selection needed).

The provided workflow `.github/workflows/deploy.yml` will build and publish to `gh-pages` automatically.

## Where to edit content
- `data/menu.json`
- `data/gallery.json`
- `data/reviews.json`
- `data/events.json`
- `data/settings.json`

## Base path
When deploying as a **project site** (https://username.github.io/repo-name/), the config auto-sets `basePath` using `GITHUB_REPOSITORY` so assets work correctly.
