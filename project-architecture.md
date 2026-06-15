# Project Architecture Blueprint

This document defines the strict architectural guidelines, folder structures, and engineering strategies required to build the Antaragni Campus Ambassador website. 

It is designed to ensure scalability, maintainability, peak performance, and pixel-perfect adherence to the design system.

---

## 1. WEBSITE ARCHITECTURE OVERVIEW

### Overall Application Structure
The application uses the **Next.js App Router** (`app/` directory) for server-side rendering, routing, and metadata management. The architecture is strictly component-driven, separating the layout logic from the UI presentation layer.

### Component Philosophy
We follow the **Atomic Design** principles adapted for React. Components must be stateless and pure wherever possible. State and animation logic should be abstracted into hooks or wrapper components. No component should fetch its own data unless explicitly part of a Server Component data-fetching tree.

### Reusability Strategy
Never repeat layout structures. If a pattern repeats (e.g., 1px horizontal borders, massive staggered text, statistic counters), it must be abstracted into a primitive component in the `components/ui/` folder before being used in a specific section.

### Development Strategy
We employ a strictly **bottom-up** approach. Developers must build and lock the design tokens, layout wrappers, and typography primitives before composing the major page sections. Development moves from Atoms -> Molecules -> Organisms -> Templates (Sections) -> Pages.

---

## 2. PROJECT FOLDER STRUCTURE

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, Loading, Error states)
├── components/           # All React Components
│   ├── ui/               # Base primitives (Buttons, Typography, Dividers)
│   ├── layout/           # Structural wrappers (GridContainer, SectionWrapper, Navbar)
│   ├── animations/       # Reusable Framer Motion wrappers (FadeUp, TextReveal)
│   └── shared/           # Cross-section components (StatBlocks, AccordionItems)
├── sections/             # Page-specific sections (HeroSection, ManifestoSection)
├── hooks/                # Custom React hooks (useLenis, useMediaQuery)
├── lib/                  # Utility functions (cn() for Tailwind, formatting)
├── styles/               # Global CSS and Tailwind directives (globals.css)
├── types/                # TypeScript interfaces and global type definitions
└── assets/               # Co-located component-specific assets (if not using public/)

public/                   # Static assets (fonts, global images, raw SVGs)
```

### Folder Explanations
* **`app/`**: Owned by Next.js. Used exclusively for routing, layout composition, and SEO metadata.
* **`components/ui/`**: Owned by Design System Engineers. Dumb, stateless primitives.
* **`sections/`**: Owned by Feature Developers. These compose multiple UI components into a full viewport section (e.g., `HeroSection.tsx`).
* **`lib/`**: Owned by Architecture. Contains the essential `cn` (clsx + tailwind-merge) utility for clean class composition.
* **`public/`**: Owned by the Asset Pipeline. Adheres strictly to `asset-manifest.md`.

---

## 3. COMPONENT ARCHITECTURE

### Component Hierarchy

1. **Base Components (Atoms):**
   * `DisplayHeading`, `BodyText`, `DividerLine`, `TextLink`, `MetadataLabel`
   * *Dependencies:* Tailwind tokens, `next/font`.
2. **Composite Components (Molecules):**
   * `StatBlock`, `ProfileCard`, `IncentiveCard`
   * *Dependencies:* Base Components, `next/image`.
3. **Interactive Components (Organisms):**
   * `AccordionItem`, `Navbar`
   * *Dependencies:* Composite Components, Framer Motion, React State.
4. **Section Components (Templates):**
   * `HeroSection`, `ExpectationsSection`
   * *Dependencies:* Interactive Components, `GridContainer`, `SectionWrapper`.
5. **Page Components (Pages):**
   * `app/page.tsx`
   * *Dependencies:* Section Components, Global Layout.

---

## 4. DESIGN TOKEN SYSTEM

Tokens are centrally managed via `tailwind.config.ts` and `globals.css`.

* **Colors:** Defined in CSS variables (e.g., `--background: #050505`, `--accent: #D92323`). Configured in Tailwind under `theme.colors`.
* **Typography:** `next/font` maps local woff2 files to CSS variables (e.g., `--font-serif`, `--font-sans`). Tailwind configures `fontFamily.serif` and `fontFamily.sans`.
* **Spacing:** Rely exclusively on Tailwind's default spacing scale, extended with specific tokens like `section: '160px'`, `section-sm: '80px'`.
* **Border Radius:** The design is brutalist. No border-radius tokens are required (`rounded-none` is default).
* **Shadows:** No generic drop-shadows. Shadows are disabled in favor of CSS radial-gradient glows or 3D asset baked shadows.
* **Z-Index:** Defined in Tailwind: `behind: -1`, `base: 0`, `overlay: 10`, `nav: 50`, `modal: 100`.
* **Breakpoints:** Tailwind defaults: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
* **Motion Tokens:** CSS variables for standard easing: `--ease-premium: cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 5. ANIMATION ARCHITECTURE

### Motion Strategy (Framer Motion)
* **Motion Providers:** No global wrapper is strictly needed unless using `AnimatePresence` for page routing.
* **Reusable Motion Wrappers:** All animations are abstracted away from UI components. Do not put `motion.div` inside `BodyText`. Instead, wrap `BodyText` in `<FadeUpWrapper>`.
* **Scroll Animation Strategy:** Use `useInView` with `margin: "-20%"` for one-time trigger reveals. Use `useScroll` + `useTransform` for continuous parallax effects.
* **Stagger Strategy:** Parent wrappers use `variants` with `staggerChildren: 0.1` and `delayChildren`. Child wrappers use a simple `item` variant.
* **Reduced Motion:** All Framer Motion variants must respect `useReducedMotion()`. If true, set `y: 0` and transition `opacity` instantly.

---

## 6. RESPONSIVE ARCHITECTURE

### Desktop Strategy (First-class citizen)
* Fluid grids up to a `1440px` max-width.
* Typographic clamping (`clamp(80px, 8vw, 160px)`).

### Tablet Strategy (`lg` and `md`)
* Columns collapse from 12 to 8.
* Massive 160px paddings reduce to 80px.

### Mobile Strategy (`sm` and below)
* Grids collapse to single-column flex-columns.
* Complex hover states are disabled (or triggered via Intersection Observer).
* Horizontal rules (`DividerLine`) are preserved to maintain structure.
* Typography is strictly capped to prevent horizontal overflow; hyphenation is enabled via CSS.

---

## 7. STATE MANAGEMENT STRATEGY

React's built-in `useState` and `useRef` are sufficient. No Redux, Zustand, or Context is required for this purely presentational site.

* **Navigation (Scroll tracking):** 
  * *Complexity:* Medium. 
  * *Approach:* Use `framer-motion`'s `useScroll` to determine if `scrollY > 50` to apply a blur backdrop to the Navbar.
* **Mobile Menu:** 
  * *Complexity:* Low. 
  * *Approach:* Standard boolean `isOpen` state in the Navbar component. Locks `body` scroll when open.
* **FAQ Accordion:** 
  * *Complexity:* Medium. 
  * *Approach:* Manage active index state in the parent `AccordionList`. Pass `isOpen` boolean and `onToggle` function to `AccordionItem` children.

---

## 8. ASSET INTEGRATION STRATEGY

* **Logo Management:** Stored as raw SVGs in `public/logos`. Inline them or use `<Image>` if currentColor manipulation isn't needed.
* **Image Management:** Use `next/image` exclusively. Use the `sizes` prop meticulously to prevent serving 4K images to mobile devices.
* **Background Asset Management:** `VolumetricSpotlight` is a CSS-first component. If performance issues arise on mobile, fallback to heavily compressed WebP images.
* **SEO Assets:** OpenGraph images stored in `app/opengraph-image.jpg` for Next.js auto-generation.
* **Optimization:** Next.js handles WebP conversion automatically, but source images should be pre-compressed WebPs to minimize build times.

---

## 9. ACCESSIBILITY ARCHITECTURE

* **Keyboard Navigation:** Every `TextLink` and `AccordionItem` must be reachable via `Tab`. Outline styles (`focus-visible:ring`) must be explicitly defined using the red brand color to contrast against the black background.
* **Focus Management:** Mobile menu must trap focus when open using a library like `focus-trap-react` or custom refs.
* **ARIA Strategy:** 
  * Accordion: `aria-expanded`, `aria-controls`.
  * Stat counters: `<span aria-hidden="true">` for the animated number, accompanied by a screen-reader only `<span>` with the static final number.
* **Reduced Motion:** See Animation Architecture. Crucial for compliance.

---

## 10. PERFORMANCE ARCHITECTURE

Targeting Lighthouse 95+ and perfect Core Web Vitals.

* **LCP (Largest Contentful Paint):** The Hero "ANTARAGNI" text and Hero Silhouette. Text is prioritized. The Silhouette image must use `<Image priority />` to bypass lazy loading.
* **CLS (Cumulative Layout Shift):** All custom fonts (`next/font`) use `display: swap`. The Accordion height transitions must not push content below the fold erratically—animations must be smooth.
* **Animation Performance:** GPU acceleration (`will-change: transform, opacity`) is mandatory for the text reveals. `mix-blend-mode` on spotlights should be monitored; if FPS drops, disable blend modes on mobile devices via CSS media queries.
* **Bundle Optimization:** `framer-motion` can be large. Ensure we import specific hooks, not the entire library blindly. Server Components are used for all static sections. Client Components (`"use client"`) are restricted ONLY to the `Accordion`, `Navbar`, and `Animations` wrappers.

---

## 11. COMPONENT DEPENDENCY GRAPH

```text
Page (Server Component)
 ├── HeroSection (Server)
 │    ├── GridContainer (Server)
 │    ├── TextRevealMask (Client) -> DisplayHeading (Server)
 │    └── FadeUpWrapper (Client) -> Next/Image (Server)
 │
 ├── AccordionSection (Server)
 │    └── AccordionList (Client)
 │         └── AccordionItem (Client) -> DisplayHeading, DividerLine (Server)
 │
 └── FooterSection (Server)
```
*Rule:* Push the `"use client"` directive as far down the tree as possible. The sections themselves should remain Server Components.

---

## 12. DEVELOPMENT ORDER

Developers must execute the build in this exact sequence to prevent refactoring loops:

* **Step 1: Environment & Tooling.** Init Next.js, configure Tailwind, setup `next/font`, lock `globals.css` with CSS variables.
* **Step 2: Asset Pipeline.** Place all verified SVGs and WebPs in `public/`.
* **Step 3: Base Primitives.** Build `DisplayHeading`, `BodyText`, `DividerLine`.
* **Step 4: Layout Wrappers.** Build `GridContainer`, `SectionWrapper`.
* **Step 5: Animation Wrappers.** Build `FadeUpWrapper`, `TextRevealMask`.
* **Step 6: Composite UI.** Build `StatBlock`, `ProfileCard`, `IncentiveCard`.
* **Step 7: Complex UI.** Build `AccordionList` and `Navbar`.
* **Step 8: Section Assembly.** Compose the actual page sections using the built blocks.
* **Step 9: Motion & Scroll Polish.** Integrate Lenis scroll, hook up Parallax, test scroll triggers.
* **Step 10: Performance & Accessibility Audit.** Run Lighthouse, test Keyboard Nav, verify Mobile layout.

---

## 13. RISK ANALYSIS

* **Architecture Risk:** Leaking `"use client"` to the top of the tree, destroying Server Side Rendering benefits.
  * *Mitigation:* Strict Code Review ensuring `"use client"` is only on leaf animation components.
* **Animation Risk:** Frame drops on low-end mobile devices due to overlapping `mix-blend-mode` and parallax.
  * *Mitigation:* Disable parallax and blend modes via `@media (max-width: 768px)` if profiling shows > 16ms frame times.
* **Asset Risk:** High-res transparent 3D renders causing massive payload sizes.
  * *Mitigation:* Strict WebP compression before placing in `public/`. Next.js `<Image>` handles responsive sizing.
* **Maintenance Risk:** Tailwind class string bloat making JSX unreadable.
  * *Mitigation:* Use the `cn()` utility carefully. If a class string exceeds 3 lines, abstract it into a `variants` object using `cva` (Class Variance Authority) or a Tailwind `@apply` rule (as a last resort).

---

## 14. FINAL ARCHITECTURE BLUEPRINT

The architecture for the Antaragni Campus Ambassador website leverages Next.js App Router for optimal SEO and loading performance, utilizing Server Components for layout structure and isolating Client Components strictly to animation and interaction nodes. The Atomic Design structure ensures absolute visual consistency, while the strict separation of layout wrappers (`SectionWrapper`, `GridContainer`) from semantic UI primitives guarantees maintainability. 

By adhering strictly to the `tailwind.config.ts` design tokens and abstracting all Framer Motion logic into reusable wrapper components, the development team can construct the page sections rapidly, safely, and with flawless adherence to the premium, cinematic design specification.
