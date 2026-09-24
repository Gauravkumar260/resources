# Divyanshu Singh — Portfolio

A production-ready personal portfolio webapp faithfully built from a Figma design export.
Light-mode design language: warm cream `#F9F7F3`, terracotta accent `#E06A3B`, ink text `#1E2022`,
with local self-hosted fonts (Clash Display, Inter, Caveat, Space Mono).

## Quick Start

**Bun (recommended)**

```bash
bun install
bun run db:generate   # generate Prisma client
bun run dev           # http://localhost:3000
```

**npm / Node 20+**

```bash
npm install
npx prisma generate
npm run dev
```

The SQLite database ships with the repo (`db/custom.db`) and contains demo data
(newsletter subscribers, contact messages). To start from a clean database:

```bash
rm db/custom.db
bun run db:push       # or: npx prisma db push
```

## Tech Stack

| Layer     | Tech                                                        |
| --------- | ----------------------------------------------------------- |
| Framework | Next.js 16 (App Router, TypeScript 5)                       |
| Styling   | Tailwind CSS 4 + shadcn/ui (New York) + Framer Motion       |
| Database  | Prisma ORM + SQLite                                         |
| Icons     | Lucide React                                                |
| Email     | z-ai-web-dev-sdk (LLM-generated welcome email template)     |
| SEO       | Metadata API, Open Graph image, sitemap.xml, robots.txt, RSS/JSON feeds |

## Environment Variables

A working `.env` is included. Change the values for your own deployment:

```env
# SQLite database (path is resolved relative to prisma/schema.prisma)
DATABASE_URL="file:../db/custom.db"

# Passcode for the /admin Studio Ledger
ADMIN_PASSCODE="night-studio-2026"
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home (hero, work, about, process, contact, footer)
│   ├── layout.tsx               # Root layout, fonts, theme, scroll progress
│   ├── work/[slug]/             # Case studies: klimashift, autoremov, trivira
│   ├── work/page.tsx            # Work index
│   ├── notes/                   # Journal: index + [slug] + RSS + JSON feed
│   ├── admin/                   # Studio Ledger (passcode protected)
│   ├── api/
│   │   ├── contact/             # POST contact form → ContactMessage
│   │   ├── newsletter/          # POST subscribe + GET live subscriber count
│   │   └── admin/               # login/logout, messages, subscribers, CSV export
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx
├── components/
│   ├── portfolio/               # Header, hero, selected work, case studies,
│   │                            # newsletter, footer, command palette, share rows…
│   └── ui/                      # shadcn/ui primitives
├── lib/
│   ├── db.ts                    # Prisma client singleton
│   ├── case-studies/            # Case-study content
│   ├── notes/                   # Journal content
│   └── emails/                  # Welcome-email template builder
└── fonts/                       # Self-hosted woff2 (Clash Display, Inter, Caveat, Space Mono)
```

## Features

- **Faithful Figma reproduction** — 1:1 layout, tokens, and typography
- **3 full case-study pages** (`/work/klimashift`, `/work/autoremov`, `/work/trivira`)
- **Journal** with reading-position memory (resume banner + progress ring), RSS & JSON feeds
- **Newsletter** with live subscriber count, LLM-generated branded welcome email
- **Contact form** persisted to SQLite
- **Studio Ledger admin** (`/admin`, passcode `night-studio-2026`): messages inbox,
  subscriber management, CSV export
- **Command palette** (⌘K / Ctrl+K), scroll progress bar, back-to-top, reveal animations,
  print-friendly case studies, sticky footer, fully responsive (390px → desktop)

## Scripts

| Script                | Action                                        |
| --------------------- | --------------------------------------------- |
| `bun run dev`         | Start dev server on port 3000                 |
| `bun run lint`        | ESLint                                        |
| `bun run db:push`     | Push Prisma schema to SQLite                  |
| `bun run db:generate` | Regenerate Prisma client                      |
| `bun run build`       | Production build (standalone output)          |
| `bun run start`       | Run the production standalone server          |

## Notes

- The `z-ai-web-dev-sdk` is a sandbox-side dependency used for the AI welcome-email
  generator and can be removed if you swap in your own email provider.
- All design assets (hero portrait, case covers) are in `public/design-assets/`.
- Deploy anywhere Next.js runs (Vercel, Node server, Docker). Swap SQLite for
  Postgres in `prisma/schema.prisma` if you need a serverless database.
