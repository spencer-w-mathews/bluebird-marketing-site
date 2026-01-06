# Bluebird marketing site

Vite + React + TypeScript marketing experience for the Bluebird AI email filter. Uses styled-components for theming, framer-motion for motion, react-router-dom for routing, and pulls all copy from Sanity.

## Setup

1) Copy `.env.example` to `.env` and set your Sanity project values:
```
VITE_SANITY_PROJECT_ID=...
VITE_SANITY_DATASET=...
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```
2) Install deps (already installed in this repo): `npm install`

## Development

- Start the app: `npm run dev`
- Build for prod: `npm run build`

Content for navigation, footer, hero, pricing, and all section copy is sourced from the Sanity Studio in `../studio-bluebirdagi`. Refresh the site after editing content in Studio to see updates.
