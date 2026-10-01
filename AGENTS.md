# Carpe Diem - Project Information

## Project Overview

Premium cabin rental website for 4 cabins across Paraná and Santa Catarina, Brazil. Editorial design with focus on visual experience and direct booking through Airbnb.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## Key Design Principles

1. **Editorial aesthetic**: Magazine-like layouts, asymmetric compositions
2. **Nature-inspired palette**: Off-white, sand, beige, wood tones, subtle green
3. **Typography hierarchy**: Serif for headlines, sans-serif for body
4. **Generous spacing**: Editorial white space
5. **Subtle animations**: Fade-up, reveal, gentle hover effects
6. **Photography-focused**: Large images, galleries, lightbox
7. **No WhatsApp**: Primary CTA is "Reservar no Airbnb"

## Project Structure

### Data Centralization

All cabin data is in `src/data/cabins.ts`:
- `cabins` array with all 4 cabins
- `locations` array for region pages
- Helper functions: `getCabinsByRegion()`, `getCabinBySlug()`

### Component Architecture

- **Header**: Fixed, transparent-to-solid on scroll, mobile menu
- **Footer**: Multi-column, no WhatsApp, links to Airbnb/Instagram
- **Hero**: Full-screen, cinematic opening
- **LocationSection**: Asymmetric layouts for PR/SC
- **ExperienceSection**: 4-column grid with numbered features
- **CabanasSection**: Alternating layouts for each cabin
- **CabinCard**: Reusable cabin presentation
- **CabinGallery**: Grid with lightbox functionality
- **BlogSection**: Editorial blog preview
- **FinalCTA**: Strong closing section

### Pages

```
/                          # Home
/parana                    # Paraná region
/parana/cabana-01          # PR 01 individual
/parana/cabana-02          # PR 02 individual
/santa-catarina           # SC region
/santa-catarina/cabana-01 # SC 01 individual
/santa-catarina/cabana-02 # SC 02 individual
/blog                     # Blog listing
/blog/[slug]              # Blog post individual
```

## Airbnb Links (must preserve exactly)

- PR 01: https://www.airbnb.com.br/rooms/1403049730359012341?unique_share_id=68d40ed0-de2d-4e1d-9467-c3dabfb65851&viralityEntryPoint=1&s=76
- PR 02: https://www.airbnb.com.br/rooms/1073480283238243483?unique_share_id=0a782d05-7267-4d99-b2c1-20d1df905591&viralityEntryPoint=1&s=76
- SC 01: https://www.airbnb.com.br/rooms/1502725732524921064?unique_share_id=245e80f7-dbfd-42d0-ae16-86087a76b04c&viralityEntryPoint=1&s=76
- SC 02: https://www.airbnb.com.br/rooms/1502770501209272623?unique_share_id=af2ccea6-99a3-4df6-85e9-04ee478b84c5&viralityEntryPoint=1&s=76

## Development Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm run lint      # ESLint check
npm start         # Production server
```

## Images

Image structure is in `public/images/`:
- `cabins/pr-01/`, `cabins/pr-02/`, `cabins/sc-01/`, `cabins/sc-02/`
- `locations/parana/`, `locations/santa-catarina/`
- `blog/`

See `IMAGES.md` for detailed instructions on adding Airbnb photos.

## Design System

### Colors
- Background: `#faf9f7` (off-white)
- Sand: `#e8e4df`
- Beige: `#d4cfc7`
- Wood: `#8b7355`
- Green-subtle: `#5a6b5a`
- Graphite: `#3d3d3d`
- Soft-black: `#1a1a1a`

### Typography
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)
- Tracking: Wide for uppercase (0.3em), normal for body
- Hierarchy: Strong contrast between sizes

### Animations
- Use Framer Motion sparingly
- Duration: 0.6-0.8s for section reveals
- Easing: `[0.22, 1, 0.36, 1]` for premium feel
- Respect `prefers-reduced-motion`

## Important Constraints

1. **NO WhatsApp buttons** - Never add floating WhatsApp or phone CTAs
2. **NO invented data** - Only use real cabin information when available
3. **NO template feel** - Avoid generic hotel/resort patterns
4. **NO green neon** - Use subtle, natural greens only
5. **NO rounded everything** - Mix of rounded and sharp edges
6. **NO automatic carousels** - Manual navigation only
7. **NO loading screens** - Fast, progressive loading

## SEO

Each page has:
- Title tag
- Meta description
- Open Graph tags
- Semantic HTML structure
- Alt text (to be added with real images)

## Performance

- Next.js Image optimization (ready for real images)
- Lazy loading
- Code splitting
- Minimal dependencies
- No heavy libraries

## Responsive Breakpoints

- Mobile: 375px, 390px, 430px
- Tablet: 768px
- Laptop: 1024px, 1280px
- Desktop: 1440px+

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus states
- Aria labels
- Reduced motion support
- Color contrast (WCAG AA)

## Future Improvements

1. Add real Airbnb photos (see IMAGES.md)
2. Add real cabin features when available
3. Implement sitemap.xml
4. Add robots.txt
5. Create favicon
6. Add structured data (JSON-LD)
7. Consider CMS integration for blog
8. Add form for inquiries (if needed)
