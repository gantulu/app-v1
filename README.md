# Travel & Tours App

React application foundation using Vite, TypeScript, Tailwind CSS, and Lucide React.

## Requirements

- Node.js 20+
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |

## Current structure

```text
.
├── App.tsx                 # Existing application UI (preserved in Phase 1)
├── index.html
├── src/
│   ├── main.tsx            # React entry point
│   └── index.css            # Tailwind and global styles
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Phase 1 scope

This phase establishes the build and development foundation. The existing application UI and business logic remain unchanged. Feature-level modularization is intentionally deferred to Phase 2.
