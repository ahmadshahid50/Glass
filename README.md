# Azan Glass Aluminium

Premium glass and aluminium solutions website for a Pakistani business based in Lahore.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting this repository.

## Project Structure

```
app/              # Next.js App Router pages
components/       # Reusable UI and section components
  ui/             # Base UI primitives
  layout/         # Header, Footer, Providers
  sections/       # Page sections
constants/        # Site config and static data
data/             # Services, projects, testimonials
hooks/            # Custom React hooks
lib/              # Utilities, SEO helpers
types/            # TypeScript interfaces
public/           # Static assets
```

## Features

- Fully responsive mobile-first design
- Dark/light mode toggle
- SEO optimized (metadata, sitemap, robots.txt, JSON-LD)
- Contact form with validation
- WhatsApp floating button
- Project gallery with filtering and lightbox
- Dynamic service and project pages

## Customization

Update business details in `constants/index.ts`:
- Phone, email, address
- Social media links
- Service areas

Replace placeholder images with your own project photos.

## Email Integration

The contact form in `components/sections/ContactSection.tsx` is ready for API integration. Connect to services like Resend, SendGrid, or a custom API route.

## License

Private — All rights reserved.
