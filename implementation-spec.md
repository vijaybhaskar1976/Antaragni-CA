# Frontend Implementation Blueprint

## WEBSITE ARCHITECTURE OVERVIEW

**Overall Application Structure**
The application will be built as a modern React application using the Next.js App Router. Given the visual fidelity and marketing nature of the page, it will be heavily optimized for static generation (SSG) to ensure instant loading times and perfect SEO. The tech stack consists of Next.js, TypeScript, Tailwind CSS, and Framer Motion. Lenis will be integrated for smooth scrolling to provide the cinematic feel required by the design.

**Page Hierarchy**
This is a Single-Page Application (SPA) architecture disguised as a long-form editorial landing page. There is only one primary route (`/`). Navigation links in the header will act as anchor links with smooth scroll hijacking to jump to specific sections of the page.

**Component Hierarchy**
The architecture follows a strict Atomic Design methodology modified for Next.js:
1. **Layouts:** Global wrappers (Navbar, Smooth Scroll Context).
2. **Sections:** Large, full-width structural blocks (Hero, Stats, Accordion).
3. **Compositions:** Grouped UI elements (Accordion List, Contact Grid).
4. **Primitives:** Reusable, atomic design tokens (Typography, Buttons, Dividers).

**Development Approach**
We will employ a Component-Driven Development approach. Development will start from the smallest atoms (configuring Tailwind tokens, building typography components) and build up to sections. The process will follow a "Mobile-First styling, Desktop-First design" philosophy—meaning the CSS will be mobile-first (`min-width` media queries), but the architectural planning stems from the complex desktop grid.

---

## SECTION IMPLEMENTATION PLAN

### 1. Global Navigation (Navbar)
* **Purpose:** Persistent site routing.
* **Visual Goal:** Invisible until needed, blending into the dark void.
* **Components Required:** `Logo`, `NavLinks`, `MobileMenuButton`.
* **Layout Requirements:** Fixed top, `w-full`, `max-w-7xl` inner container, flex space-between.
* **Responsive Requirements:** On mobile, links disappear behind a hamburger menu.
* **Animation Opportunities:** Mix-blend-mode difference on scroll, or a slight backdrop-blur if it passes over images.
* **Reusable Elements:** `Container`.
* **Implementation Difficulty:** **Easy**. Standard fixed header pattern.

### 2. Hero Section
* **Purpose:** Brand establishment.
* **Visual Goal:** High-contrast cinematic poster.
* **Components Required:** `DisplayHeading`, `SubText`, `SpotlightBackground`.
* **Layout Requirements:** `min-h-screen`, CSS Grid (`grid-cols-12`), split 5/5 with a 2-column center gap.
* **Responsive Requirements:** Stacks to 1-column on mobile. Silhouette image must reposition behind or below the text.
* **Animation Opportunities:** Initial 1.5s fade-up. Parallax on the silhouette image as the user scrolls down.
* **Reusable Elements:** `SpotlightRadialGradient`.
* **Implementation Difficulty:** **Medium**. The difficulty lies in ensuring the spotlight gradient blends flawlessly with the absolute black background using `mix-blend-mode` without causing performance issues.

### 3. Manifesto Section ("SPIRIT OF ANTARAGNI")
* **Purpose:** Emotional hook.
* **Visual Goal:** Editorial layout.
* **Components Required:** `SectionHeading`, `BodyText`, `ResponsiveImage`.
* **Layout Requirements:** 80vh height. 4-column text left, 7-column image right.
* **Responsive Requirements:** Stacks to 1-column. Image aspect ratio shifts from 16:9 to 4:3.
* **Animation Opportunities:** Text stagger reveal (masking lines). Image slight scale-in on scroll.
* **Reusable Elements:** `GridContainer`.
* **Implementation Difficulty:** **Easy**. Basic CSS Grid implementation.

### 4. Statistics Bar
* **Purpose:** Establish scale.
* **Visual Goal:** Rhythmic, mathematical precision.
* **Components Required:** `HorizontalDivider`, `StatBlock`.
* **Layout Requirements:** Flexbox container, `justify-between`. Bounded by 1px top/bottom borders.
* **Responsive Requirements:** Mobile becomes a 2x2 grid or a horizontally scrollable container with hidden scrollbars.
* **Animation Opportunities:** Numbers counting up (`useSpring` in Framer Motion) when in view.
* **Reusable Elements:** `StatBlock`.
* **Implementation Difficulty:** **Medium**. Orchestrating the count-up animation to trigger exactly when the user reaches the section requires Intersection Observer hooks.

### 5. Testimonial Section
* **Purpose:** Human connection.
* **Visual Goal:** Immersive, fullscreen impact.
* **Components Required:** `QuoteText`, `FullscreenImageMask`.
* **Layout Requirements:** 100vh, absolute positioning for the image with a linear-gradient overlay masking the left side to `#050505`.
* **Responsive Requirements:** Background image object-position changes to ensure the subject remains visible. Text overlays the image directly on mobile.
* **Animation Opportunities:** Slow parallax on the background image.
* **Reusable Elements:** None (highly bespoke section).
* **Implementation Difficulty:** **Easy**. Primarily CSS background manipulation.

### 6. Incentives Showcase
* **Purpose:** Reward display.
* **Visual Goal:** High-end product photography layout.
* **Components Required:** `SectionHeading`, `ProductCard`.
* **Layout Requirements:** 3-column CSS Grid.
* **Responsive Requirements:** Stacks to 1-column.
* **Animation Opportunities:** Floating animation (CSS keyframes) on the products to simulate 3D space.
* **Reusable Elements:** None.
* **Implementation Difficulty:** **Hard**. Achieved purely through precise image exports. The frontend relies on the assets having transparent backgrounds and pre-baked lighting. Blending these over the `#050505` background without visible bounding boxes is critical.

### 7. Expectations Grid
* **Purpose:** Informational breakdown.
* **Visual Goal:** Strict, brutalist grid.
* **Components Required:** `GridHeader`, `ExpectationItem`.
* **Layout Requirements:** 4-column CSS Grid. Top border.
* **Responsive Requirements:** 2-column on tablet, 1-column on mobile.
* **Animation Opportunities:** Staggered fade-up of the 4 items (0.1s delay between each).
* **Reusable Elements:** `NumberLabel`.
* **Implementation Difficulty:** **Easy**. Standard grid layout.

### 8. Application Accordion ("BEFORE YOU APPLY")
* **Purpose:** Process outline.
* **Visual Goal:** Highly interactive, massive typography.
* **Components Required:** `StickySidebar`, `AccordionList`, `AccordionItem`.
* **Layout Requirements:** 12-column grid. Left 4 cols are `position: sticky`. Right 8 cols hold the accordion.
* **Responsive Requirements:** Sticky behavior is disabled on mobile. The title stacks above the list.
* **Animation Opportunities:** Smooth height transitions (AnimatePresence in Framer Motion) for expanding/collapsing rows. Color transitions on hover.
* **Reusable Elements:** `Divider`, `ChevronIcon`.
* **Implementation Difficulty:** **Very Hard**. Creating a sticky layout alongside a smoothly animating accordion requires precise DOM measurement. Handling `height: auto` animations in Framer Motion while maintaining layout stability is technically complex.

### 9. Contact Grid
* **Purpose:** Team display.
* **Visual Goal:** High-contrast portrait gallery.
* **Components Required:** `ProfileCard`.
* **Layout Requirements:** 2-column master split, with a 2x2 nested grid on the right.
* **Responsive Requirements:** 1-column stack. Portraits resize.
* **Animation Opportunities:** Image scale-on-hover inside an `overflow: hidden` wrapper.
* **Reusable Elements:** `ProfileCard`.
* **Implementation Difficulty:** **Easy**.

### 10. Sponsor Track
* **Purpose:** Credibility.
* **Visual Goal:** Muted, hierarchical logo display.
* **Components Required:** `LogoGrid`.
* **Layout Requirements:** Flexbox rows, centered.
* **Responsive Requirements:** Flex-wrap on mobile.
* **Animation Opportunities:** Infinite horizontal marquee if logos exceed viewport width.
* **Reusable Elements:** None.
* **Implementation Difficulty:** **Easy**.

### 11. Footer CTA
* **Purpose:** Final action.
* **Visual Goal:** Mirror the hero, intense red lighting.
* **Components Required:** `DisplayHeading`, `FooterSpotlight`.
* **Layout Requirements:** 100vh, centered flexbox.
* **Responsive Requirements:** Text scales down aggressively.
* **Animation Opportunities:** Slow pulse animation on the red spotlight opacity.
* **Reusable Elements:** `SpotlightRadialGradient`.
* **Implementation Difficulty:** **Medium**. Similar blending challenges to the Hero section, but with colored light (`#D92323`) bleeding into `#050505`.

---

## COMPONENT ARCHITECTURE

### `DisplayHeading`
* **Purpose:** Renders the massive, primary serif typography.
* **Props:** `text` (string), `as` (h1 | h2 | h3), `className` (string).
* **Variants:** `hero` (160px), `section` (80px).
* **States:** None.
* **Responsive Behavior:** Uses `clamp()` or Tailwind `text-[]` classes to scale from mobile to desktop flawlessly without JS.
* **Dependencies:** Custom Serif Font.

### `SectionDivider`
* **Purpose:** The 1px `#262626` structural line.
* **Props:** `className` (string for margin overrides).
* **Variants:** None.
* **States:** None.
* **Responsive Behavior:** Full width always.
* **Dependencies:** None.

### `AccordionItem`
* **Purpose:** Interactive row in the Application section.
* **Props:** `number` (string), `title` (string), `content` (ReactNode), `isOpen` (boolean), `onClick` (function).
* **Variants:** None.
* **States:** Hover (text turns white, chevron moves right), Active/Open (reveals content).
* **Responsive Behavior:** Padding reduces on mobile. Typography scales.
* **Accessibility Notes:** Must use `aria-expanded` and `button` semantics for keyboard navigation.
* **Dependencies:** Framer Motion (`AnimatePresence`, `motion.div`).

### `StatBlock`
* **Purpose:** Display a single number and label.
* **Props:** `value` (number), `suffix` (string), `label` (string).
* **Variants:** None.
* **States:** None.
* **Responsive Behavior:** Centers text.
* **Dependencies:** Framer Motion (for count-up).

---

## FILE STRUCTURE

```text
/
├── app/
│   ├── layout.tsx           # Global HTML, Font injection, Lenis Provider
│   ├── page.tsx             # Main assembly of all sections
│   └── globals.css          # Tailwind directives, base dark mode
├── components/
│   ├── ui/                  # Primitives (Heading, Divider, Buttons)
│   ├── layout/              # Navbar, Footer
│   ├── animations/          # Reusable Framer Motion wrappers (FadeUp, Stagger)
│   └── shared/              # StatBlock, AccordionItem, ProfileCard
├── sections/                # Massive blocks mapped to page.tsx
│   ├── HeroSection.tsx
│   ├── ManifestoSection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialSection.tsx
│   ├── IncentivesSection.tsx
│   ├── ExpectationsSection.tsx
│   ├── ApplicationSection.tsx
│   ├── ContactSection.tsx
│   └── FooterCTASection.tsx
├── styles/
│   └── fonts.ts             # next/font configurations
├── lib/
│   ├── utils.ts             # tailwind-merge, clsx utilities
│   └── constants.ts         # Static data (e.g., Accordion content, contact data)
├── hooks/
│   └── useLenis.ts          # Smooth scroll configuration hook
└── public/
    └── images/              # Highly optimized WebP/AVIF assets
```

---

## DESIGN TOKENS (tailwind.config.js)

**Colors**
*   `background`: `#050505` (Strictly use this, not `#000000`)
*   `foreground`: `#FFFFFF`
*   `muted`: `#A3A3A3`
*   `accent`: `#D92323`
*   `border`: `#262626`

**Typography**
*   `fontFamily.serif`: `var(--font-display-serif)`
*   `fontFamily.sans`: `var(--font-body-sans)`
*   `letterSpacing.tighter`: `-0.02em`
*   `letterSpacing.widest`: `0.1em`
*   `lineHeight.solid`: `0.9`

**Spacing**
*   `padding.section`: `160px`
*   `padding.section-sm`: `80px`

**Border Radius**
*   Disable all rounded classes or strictly enforce `rounded-none`.

**Z-Index Layers**
*   `z-background`: `-10` (Spotlights)
*   `z-base`: `0`
*   `z-foreground`: `10` (Text)
*   `z-nav`: `50` (Header)

---

## RESPONSIVE STRATEGY

**Desktop Strategy (1024px - 1440px+)**
*   Enforce `max-w-[1440px] mx-auto` to contain the layout on ultra-wide monitors.
*   Utilize full 12-column CSS grids (`grid-cols-12`).
*   Typography relies on `vw` units clamped to a maximum pixel value (e.g., `text-[clamp(80px,10vw,160px)]`).

**Tablet Strategy (768px - 1023px)**
*   Collapse 12-column grids into 8-column or 2-column splits.
*   Reduce section vertical padding from 160px to 80px or 120px to prevent excessive scrolling.
*   Disable complex parallax effects to ensure 60fps performance on iPads.

**Mobile Strategy (320px - 767px)**
*   Strict 1-column layout (`flex-col`).
*   Disable sticky positioning (specifically in the Accordion section).
*   Reduce section padding to 48px or 64px.
*   Convert horizontal flex layouts (Stats bar) to wrapping grids.
*   Ensure text sizes do not break words; use `hyphens-auto` or scale down serif headings to a strict `48px`.

---

## STATE MANAGEMENT

*   **Accordion States (Medium Complexity):** Requires React `useState` to track the currently open index. Only one accordion should be open at a time.
*   **Scroll States (High Complexity):** Framer Motion's `useScroll` and `useTransform` will map scroll Y position to Y-axis translation for parallax elements (Hero silhouette, Testimonial background).
*   **Intersection States (Low Complexity):** `useInView` to trigger entrance animations (fade-ups, stat counting) only once when an element enters the viewport.
*   **Navigation/Menu State (Low Complexity):** Boolean state for mobile hamburger menu toggle.

No global state management (Redux, Zustand) is required. Component-level React state is sufficient for this architecture.

---

## PERFORMANCE STRATEGY

**Lazy Loading Opportunities**
*   The `TestimonialSection`, `IncentivesSection`, and `ContactSection` are far below the fold. Their photographic assets must be lazy-loaded using Next.js `<Image loading="lazy" />`.
*   Heavy Framer Motion animation bundles should be loaded dynamically if they impact initial TTI (Time to Interactive).

**Image Optimization**
*   All photographs must be converted to WebP or AVIF.
*   The Hero silhouette must use `<Image priority />` to prevent LCP (Largest Contentful Paint) delays.
*   Monochrome images (Sponsor logos, Contact grid) should have color profiles removed and be heavily compressed.

**Animation Optimization**
*   Use CSS transforms (`translate`, `scale`, `opacity`) for all animations. Never animate layout properties (`width`, `height`, `margin`, `top`) to avoid layout thrashing, except explicitly in the Accordion using AnimatePresence.
*   Parallax effects must use `will-change-transform`.

**Rendering Optimization**
*   The entire site should be built as static HTML (`output: 'export'` or standard SSG in Next.js) since the content is not user-specific.

---

## DEVELOPMENT ROADMAP

**Phase 1: Foundation (Days 1-2)**
*   Initialize Next.js + Tailwind + TypeScript.
*   Configure `tailwind.config.js` with exact design tokens.
*   Load custom Serif and Sans fonts via `next/font`.
*   Create atomic UI components (`DisplayHeading`, `SectionDivider`).

**Phase 2: Layout & Scaffolding (Days 3-4)**
*   Build the `Navbar` and `FooterCTASection`.
*   Implement `Lenis` smooth scrolling globally.
*   Scaffold empty components for all 11 sections in `page.tsx` with basic 160px vertical padding.

**Phase 3: Core Implementation (Days 5-8)**
*   Build Hero Section (Spotlight blending and typography).
*   Build Manifesto & Testimonial sections (Image masking).
*   Build Accordion Section (Complex state and sticky CSS).
*   Build Grids (Expectations, Contact, Incentives).

**Phase 4: Motion & Polish (Days 9-10)**
*   Integrate Framer Motion `FadeUp` wrappers to all typography.
*   Implement parallax on specific images.
*   Add hover states (color shifts, underline animations).
*   Audit responsive breakpoints (Mobile QA).

---

## RISK ANALYSIS

**1. Blending Volumetric Lighting (High Risk)**
*   *Challenge:* The spotlights in the Hero and Footer must blend into `#050505`. If the asset is a PNG with transparency, edge-fringing will look terrible.
*   *Mitigation:* Use CSS `radial-gradient` where possible instead of images. If images are required, use `mix-blend-mode: screen` or `lighten` on black backgrounds to ensure a perfect optical blend.

**2. Accordion Animation Layout Shifts (Medium Risk)**
*   *Challenge:* Animating `height: 0` to `height: auto` cleanly.
*   *Mitigation:* Use Framer Motion's `AnimatePresence` with `initial={{ height: 0, opacity: 0 }}` and `animate={{ height: 'auto', opacity: 1 }}` applied to the overflow container.

**3. Typographic Scaling (Medium Risk)**
*   *Challenge:* A 160px word like "ANTARAGNI" will break the viewport on a 320px screen.
*   *Mitigation:* Do not use fixed pixel sizes for massive text. Use CSS `clamp()` to fluidly scale text based on viewport width, ensuring it never exceeds 100vw minus padding.

---

## FINAL ENGINEERING RECOMMENDATIONS

1. **Pixel Perfection is Mandatory:** The design relies entirely on precision. A 160px gap reduced to 80px will destroy the luxury feel. Adhere strictly to the spacing tokens.
2. **Respect the Void:** `#050505` is not just a background; it is a structural element. Do not introduce lighter gray panels or cards. Everything must sit on the absolute black canvas.
3. **Hardware Acceleration:** Ensure all parallax and scroll animations use `translate3d` to offload work to the GPU. A stuttering cinematic site feels broken.
4. **Accessibility over Aesthetics:** For hover states that are purely color-based (gray to white), ensure keyboard users receive a clear focus state (e.g., `focus-visible:outline-accent`).
5. **Asset Pipeline:** Reject any photographic assets from the design team that do not have pure black backgrounds. The frontend cannot fix bad masking. The assets must seamlessly fade into `#050505`.
