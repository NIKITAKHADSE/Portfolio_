# Nikita Khadse — 3D Portfolio

A premium React/Next.js portfolio built from the supplied creative brief. It uses React Three Fiber for the hero, Motion for UI animation, Lenis for smooth scrolling, a content-first data layer, and a server-side contact endpoint.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.
3. Configure Resend with a verified sending domain, then set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
4. Put Nikita's actual resume inside `public/` and set its public path in `src/content/portfolio.ts` (for example `/resume.pdf`).
5. Edit `src/content/portfolio.ts` with verified project URLs, screenshots, social links, roles, timelines, and case-study copy.
6. Run `npm run build` before deployment.

## Content management

All portfolio content is centralized in `src/content/portfolio.ts`. This is intentionally lightweight—no database or full CMS is required for a small personal portfolio.

## Project imagery

The supplied brief did not include verified screenshots or links. The project showcase therefore uses designed preview placeholders rather than fabricated site screenshots. Add real images through the `screenshot` field and update the preview component when assets are available.

## Contact form safety

The API validates input server-side, keeps email credentials server-only, includes a honeypot and minimum-fill-time bot check, and returns success/error states. For a high-traffic public deployment, add a managed rate limiter and/or Turnstile in addition to the included protections.

## Performance choices

- One primary WebGL canvas instead of many simultaneous canvases.
- `dpr` capped for the hero canvas.
- Motion/Lenis disabled or reduced for `prefers-reduced-motion`.
- DOM/CSS 3D for secondary effects.
- No heavy GLB assets in the starter build.
