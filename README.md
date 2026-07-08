# Aetheria — Creative Constellation Hub

A living archive of games, AI systems, and magical creative tools. Built with
Astro (static, content-collection driven). Projects live as Markdown in
`src/content/projects/` — drop a file, it publishes.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
```

## Add a project
Copy `src/content/projects/pet-grave.md`, edit the frontmatter, save. The
schema (src/content/config.ts) validates every field.

## Build & deploy
```bash
npm run build      # → dist/
```
Pushed to `main` → GitHub Actions builds and publishes to GitHub Pages.

## Structure
- `src/layouts/Base.astro` — shell, fonts, footer
- `src/components/` — Header, Footer, ProjectCard
- `src/pages/` — home, projects/, projects/[slug], ideas/, roadmap/, about/
- `src/content/projects/*.md` — the data (Deliverable 3 schema)
- `src/styles/global.css` — the mystical/cozy visual system
