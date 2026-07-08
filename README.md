# Manu — Portfolio Website

A professional portfolio for a rigging and digital animation artist, built with Next.js and inspired by the cinematic aesthetic of [Already Been Chewed](http://Alreadybeenchewed.tv).

## Features

- **Tiles-first layout** — no top menu bar; work fills the screen from edge to edge
- **Category pages** — `/rigging/` and `/animation/` with looping YouTube video tiles
- **Work dropdown** — floating bottom-left selector to switch categories, about, and contact
- **Clickable project tiles** — each opens a detail page with full video
- **Static export** — ready for GitHub Pages deployment

## Updating content

All site content lives in **`content/portfolio.json`**. Edit that file to add, remove, or change projects and site info. When you push to GitHub, the site rebuilds automatically.

See [`content/README.md`](content/README.md) for a full field reference.

## Site structure

| Route | Description |
|-------|-------------|
| `/` | All work — rigging and animation mixed |
| `/rigging/` | Rigging projects only |
| `/animation/` | Animation projects only |
| `/work/[slug]/` | Individual project detail |
| `/about/` | Bio and contact |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Edit **`content/portfolio.json`** — no code changes needed. Each project supports:

- `title`, `year`, `category` (`rigging` or `animation`)
- `overview`, `tools`
- `youtubeUrl` — full YouTube link
- `loopStartMinute` / `loopEndMinute` — tile clip loop range (set `loopEndMinute` to `0` for full video)
- `span` — optional tile size: `normal`, `wide`, or `tall`

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. If using a project site (`username.github.io/repo-name`), set `basePath` in `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  basePath: "/repo-name",
  // ...
};
```

3. Build and deploy:

```bash
npm run build
# The static site is in the `out/` folder
```

Use GitHub Actions or push the `out/` folder to the `gh-pages` branch. Alternatively, deploy to Vercel for zero-config hosting.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
