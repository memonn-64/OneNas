# [Company Name] — Recycling & Circular Economy Website

Premium corporate website for an international recycling and commodity-trading company operating in Canada and the UAE. Built with Next.js (App Router), Tailwind CSS, Framer Motion, and lucide-react.

## Pages
- `/` Home — hero, trust metrics, about preview, services, why-choose-us, CTA
- `/about` — story, mission, vision, values, timeline
- `/services` — scrap paper, plastic, metal, used oil, tires, commodity trading
- `/sustainability` — circular-economy process diagram + commitments
- `/industries` — eight sectors served
- `/contact` — quote form, office details, map embed

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```
Requires Node.js 18.17+.

## Customizing
- **Company details, contacts, offices, nav:** `src/lib/site.ts`
- **Services content:** `src/lib/services.ts`
- **Colors / fonts:** `tailwind.config.ts` and `src/app/globals.css`
- **SEO / metadata + domain:** `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` (replace `https://example.com`)

## Imagery
Hero and section images use Unsplash placeholder URLs. Replace each `src` with licensed photography of your own facilities, shipping containers, and recycling operations. Recommended subjects: full-bleed facility floor (hero), baled material, container yard / port (commodity trading), processing lines per material.

## Contact form
`src/components/ContactForm.tsx` currently captures and confirms submission client-side. Wire `handleSubmit` to an API route or a form provider (Resend, Formspree, etc.) to deliver emails.

## Map
The contact page uses an OpenStreetMap embed placeholder. Replace with a Google Maps iframe pinned to your office addresses.
