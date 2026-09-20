# Buona Sera Cafe: 3D scroll cafe site (Next.js)

A Next.js (App Router, TypeScript) cafe site with a 3D coffee bean that rolls, changes roast and reacts to
your mouse as you scroll. Built with three.js, no extra animation libraries.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Needs Node 18.18 or newer.

## Make it your cafe

Everything you will normally edit is in **`lib/content.ts`**: name, tagline, menu sections, items, prices,
hours, address, and the colours for every section. Add or remove an entry in `stages` and the bean gets a new
stop automatically.

| File | What it does |
| --- | --- |
| `lib/content.ts` | All copy, menu data and per-section colours |
| `lib/roast.ts` | Turns content into bean keyframes (position, size, colours) |
| `lib/bean.ts` | Builds the bean shape and wrinkle texture in code |
| `lib/scene.ts` | three.js scene, scroll blending, mouse interaction, cleanup |
| `components/BeanScene.tsx` | The only client component: mounts the canvas |
| `components/Sections.tsx`, `Nav.tsx` | Server-rendered page sections |
| `app/globals.css` | All styling |

## How it works

- Every section has `data-stop`. On each frame the scene finds the two sections around the middle of the
  screen and blends the bean pose and page colour between them, resting at each section while you read.
- The huge words behind the bean are normal `<h1>`/`<h2>` elements. Their width and weight axes are driven by
  scroll position (Bricolage Grotesque is a variable font).
- The mouse tilts the bean, moves the light, and a fast horizontal swipe adds spin.
- `prefers-reduced-motion` turns off idle motion, mouse spin and drift. If WebGL fails, the colour and
  typography effects still work.

## Notes

- Section text is always light, so keep every `bg` colour dark enough for it (about 4.5:1 contrast).
- If the bean looks too bright or too dark after changing colours, adjust the light intensities in
  `createRig` in `lib/scene.ts`.
- Content comes from public listings (Google, Zomato, Justdial, EazyDiner) as of September 2026. Items with no `price` in `lib/content.ts` simply omit it. Swap in the official photos, and add EazyDiner/District/Swiggy links, once the client supplies them.
# buonasera
