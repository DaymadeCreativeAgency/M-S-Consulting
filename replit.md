# M&S Consulting Site

Enterprise digital transformation consulting site rebuild for mandsconsulting.com — 250-consultant firm, 20+ years delivery, Morgantown WV. Institutional consulting aesthetic with selective technical accents.

## Run & Operate

- `pnpm --filter @workspace/mands-site run dev` — run the site (Next.js 15, port from $PORT)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks from OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9 (strict)
- **Site:** Next.js 15 (App Router) + Tailwind CSS v3 + shadcn/ui primitives
- **Fonts:** Source Serif 4 (serif, h1/h2), Figtree (sans, body/UI/all accents)
- **Motion:** Framer Motion (tasteful only — no decorative animation)
- **Content:** MDX via @next/mdx (blog, case studies)
- **Meta/SEO:** next-seo + next-sitemap
- **API:** Express 5 (shared api-server artifact)
- **DB:** PostgreSQL + Drizzle ORM

## Where things live

```
artifacts/mands-site/
  app/
    (marketing)/        ← top-level marketing pages (routes at /)
    (insights)/         ← blog, case studies, podcast
      blog/
      case-studies/
    dev/foundation/     ← design foundation verification page (NOT indexed)
    api/                ← Next.js route handlers (form submit, AI assessment)
    globals.css         ← all CSS custom properties + Tailwind directives
    layout.tsx          ← root layout, font loading
  components/
    ui/                 ← shadcn/ui primitives
    sections/           ← composed page sections (Hero, LogoCloud, CTABanner, etc.)
    layout/             ← Header, Footer, Nav
    technical/          ← StatCallout, TechnicalMeta, SystemDiagram, CodeBlock, NumberedSectionMark
  content/
    blog/               ← .mdx files
    case-studies/       ← .mdx files
    pages/              ← long-form page copy
  lib/
    utils.ts            ← cn() utility
    seo/                ← SEO helpers
    content/            ← MDX loaders, frontmatter typing
  public/
    media/              ← images (future FTP pull from WordPress uploads)
    icons/              ← service line + practice area SVGs
  tailwind.config.ts    ← complete M&S design token system
  next.config.ts        ← MDX support, image config
```

## Design Token System

**Colors (brand-locked)**
- `ms-navy: #001F65` — primary, headlines, buttons
- `ms-cream: #EFEADB` — editorial backgrounds (~30% of vertical space)
- `ms-ink: #1A1B17` — body text
- `ms-paper: #FFFFFF` — default page background

**Dark section tokens** (not site-wide dark mode — only 3-5 dark sections per site)
- `dark-base: #0A0E1A` — navy undertone, NOT pure black
- `dark-elevated: #131829`, `dark-border: #1F2438`, `dark-ink: #E8EAED`, `dark-muted: #8B92A8`
- `tech-accent: #5CA7F3` — electric blue, takes over as primary on dark

**Typography roles**
- `font-serif` → Source Serif 4 (h1, h2, pull quotes)
- `font-sans` → Figtree (h3/h4, body, UI, buttons, eyebrows, section markers, stats — everything)

**Technical element classes**
- `.eyebrow` — sans, xs, semibold, uppercase, tracking-widest
- `.technical-meta` — sans, xs, uppercase, tracking-widest
- `.stat-large` — sans, semibold, tabular-nums, large
- `.stat-label` — sans, xs, uppercase
- `.section-marker` — sans, xs, semibold, uppercase (e.g. "01 / WHAT WE DO")

**Section padding defaults**
- Light sections: `.ms-section` (py-16 → py-24)
- Editorial (cream): `.ms-section-editorial` (py-24 → py-32)
- Dark: `.ms-section-dark` (py-24 → py-32)
- Container: `.ms-container` (max-w-7xl, px-6/px-8)

## Architecture decisions

- **Next.js 15 not Tailwind v4**: User spec required `tailwind.config.ts`, which is Tailwind v3's contract. Tailwind v4 uses a different CSS-only config. Used v3 for full token fidelity.
- **Sectional dark mode, not site-wide**: Dark token vars applied via `.dark-section` class, not the global `.dark` class. This enables 3-5 targeted dark sections without toggling a global theme.
- **No CMS yet**: MDX is file-based. CMS integration deferred per user spec.
- **`_dev` folder is private in Next.js App Router**: Files prefixed with `_` are excluded from routing by Next.js convention. The foundation verification page lives at `app/dev/foundation/` and is served at `/dev/foundation`. The `robots` metadata is set to `noindex`.
- **Vite scaffold removed**: The workspace bootstrapped as react-vite; vite.config.ts and src/ have been removed. Next.js uses app/ directory.

## Product

Marketing/brand site for M&S Consulting. Pages planned:
- Home (/)
- About / Team
- Service Lines / Practice Areas
- Case Studies
- Blog / Insights / Podcast
- AI Readiness Assessment (interactive)
- Contact / Careers

## User preferences

- NO AI-company aesthetic: no black backgrounds, gradient meshes, particle effects, neon accents, glitch typography
- NO decorative animation: no parallax, floating elements, auto-rotating carousels
- NO generic consulting/AI stock imagery (no glowing brains, robot hands, holographic interfaces)
- NO clichéd copy ("Harness the power of...", em dashes, AI staccato, press-release voice)
- Institutional = confident, not startup-y. Technical accents earn their place by being functional.
- Default to plain, specific, audience-first English
- NO mono/typewriter font anywhere — Figtree only for all non-heading text

## Gotchas

- `tailwind.config.ts` uses Tailwind v3 — do NOT upgrade to v4 without re-mapping all token references
- No mono font — JetBrains Mono has been removed; Figtree (font-sans) is used for everything including eyebrows, section markers, and stat numbers
- Dark sections use `.ms-section-dark` class + explicit inline styles (not `.dark` class) — this is intentional
- `sun-500` accent (#FCC541) is used 2-3× per page MAX
- `tech-accent` (#5CA7F3) is only used on dark grounds or for "live" states on light — never as a decorative accent on white backgrounds
- Container is `.ms-container`, not `.container` (Tailwind's default) — max-w-7xl with px-6/px-8

## Pointers

- Design token source of truth: `artifacts/mands-site/tailwind.config.ts` + `artifacts/mands-site/app/globals.css`
- Foundation verification page (not indexed): `/dev/foundation`
- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
