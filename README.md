# JGW Dietetics Website

Premium redesign of the JGW Dietetics website — built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui.

## Live Site

[www.jgw-dietetics.co.uk](https://www.jgw-dietetics.co.uk)

## Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling & design system |
| Framer Motion | Animations & scroll reveals |
| shadcn/ui | UI primitives |
| Vercel | Deployment |

## Design System

**Palette:** Deep sage green · Eucalyptus · Off-white · Terracotta · Stone · Charcoal · Gold

**Typography:** Instrument Serif (headings) · Inter (body)

**Motion:** Scroll-triggered fade-ins · Smooth page transitions · Subtle card interactions

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Trust Bar, Services, Why Jackie, Testimonials, How It Works, Pricing, FAQ, CTA |
| `/about` | Jackie's story, timeline, values |
| `/services` | Services overview grid |
| `/services/[slug]` | Individual service pages (6 total) |
| `/programmes` | Full pricing and programme details |
| `/success-stories` | Client testimonials |
| `/resources` | Content hub — articles, recipes, guides |
| `/contact` | Enquiry form + contact details + FAQ |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed to Vercel from the `main` branch automatically.

## Adding Jackie's Portrait

Replace the portrait placeholders in:
- `src/components/sections/Hero.tsx`
- `src/app/about/page.tsx`

Add images to `/public/images/` and use Next.js `<Image>` component with `priority`.

## Content Updates

All site content lives in `src/lib/data.ts` — services, testimonials, programmes, FAQs, process steps.

## SEO

Optimised for: Dietitian Bristol, IBS Dietitian, Low FODMAP Dietitian, Diabetes Dietitian, Private Dietitian South West. JSON-LD structured data included.
