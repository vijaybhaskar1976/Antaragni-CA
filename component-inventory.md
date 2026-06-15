# Frontend Component Inventory

This document serves as the absolute source of truth for all reusable React components required to build the Antaragni cultural festival website. It is derived entirely from the established design system, reconstruction specifications, and implementation blueprints.

---

## 1. LAYOUT COMPONENTS

### 1.1 SectionWrapper
* **Purpose:** Provides consistent vertical rhythm and bounds content to the massive spacing tokens.
* **Category:** Layout
* **Description:** A semantic `<section>` wrapper that enforces the 120px-160px top/bottom padding logic based on viewport size.
* **Required Props:** `children` (ReactNode)
* **Optional Props:** `className` (string), `id` (string)
* **Variants:** `default` (160px padding), `compact` (120px padding), `hero` (min-h-screen).
* **States:** None.
* **Responsive Behavior:** 
  * Desktop: `py-[160px]`
  * Tablet: `py-[80px]`
  * Mobile: `py-[48px]`
* **Accessibility Requirements:** Should support `aria-labelledby` if an ID is provided.
* **Animation Requirements:** None inherently.
* **Dependencies:** None. Used by all page sections.
* **Complexity Rating:** 1/10. Simple wrapper.
* **Reusability Rating:** 10/10. Used for every section on the page.
* **Suggested File Name:** `SectionWrapper.tsx`
* **Suggested Folder Location:** `components/layout`
* **Design Token Usage:** Spacing tokens (`padding.section`, `padding.section-sm`).

### 1.2 GridContainer
* **Purpose:** Establishes the core 12-column architectural grid.
* **Category:** Layout
* **Description:** A maximum-width container (`1440px`) that applies a CSS grid layout with predefined gutters.
* **Required Props:** `children` (ReactNode)
* **Optional Props:** `columns` (number - defaults to 12), `gap` (string), `className` (string)
* **Variants:** `12-col`, `4-col` (for specific sub-grids).
* **States:** None.
* **Responsive Behavior:**
  * Desktop: `max-w-[1440px] grid-cols-12 gap-6`
  * Tablet: `grid-cols-8 gap-4`
  * Mobile: `flex-col` (Grid collapses completely).
* **Accessibility Requirements:** None.
* **Animation Requirements:** None.
* **Dependencies:** None. Used by `SectionWrapper`.
* **Complexity Rating:** 2/10. CSS Grid configuration.
* **Reusability Rating:** 10/10. The foundation of the entire page structure.
* **Suggested File Name:** `GridContainer.tsx`
* **Suggested Folder Location:** `components/layout`
* **Design Token Usage:** Spacing tokens (Gutters, Max-Width).

### 1.3 DividerLine
* **Purpose:** Acts as the primary structural separator between sections.
* **Category:** Layout
* **Description:** A full-width, 1px dark gray hairline border. It is the only explicit structural boundary used in the design.
* **Required Props:** None.
* **Optional Props:** `className` (string)
* **Variants:** `horizontal` (default), `vertical` (rare).
* **States:** None.
* **Responsive Behavior:** Spans 100% width on all devices.
* **Accessibility Requirements:** `role="separator"`, `aria-orientation="horizontal"`.
* **Animation Requirements:** Can be wrapped in `FadeUpWrapper` to fade in on scroll.
* **Dependencies:** None.
* **Complexity Rating:** 1/10.
* **Reusability Rating:** 8/10.
* **Suggested File Name:** `DividerLine.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Color token (`border: #262626`).

---

## 2. TYPOGRAPHY COMPONENTS

### 2.1 DisplayHeading
* **Purpose:** Renders the massive, high-contrast serif typography.
* **Category:** Typography
* **Description:** The primary typographic monolith of the brand. Highly condensed, ultra-tight line height, negative letter spacing.
* **Required Props:** `children` (string)
* **Optional Props:** `as` (h1 | h2 | h3), `variant` (hero | section | number), `className` (string)
* **Variants:**
  * `hero`: Massive, clamp-scaled (up to 160px).
  * `section`: Large, fixed size (80px).
  * `number`: Specifically styled for accordion numbers/stats (e.g., '01').
* **States:** None.
* **Responsive Behavior:**
  * Desktop: 160px (`hero`)
  * Tablet: Scales down ~30% (`hero`)
  * Mobile: Clamped to screen width or strict 48px/64px. Words break with hyphens if necessary.
* **Accessibility Requirements:** Proper heading semantics (`h1`-`h6`).
* **Animation Requirements:** Frequently wrapped in `TextRevealMask` for line-by-line entrance.
* **Dependencies:** Custom Serif Font loaded via `next/font`.
* **Complexity Rating:** 3/10. Complexity lies in responsive fluid scaling (`clamp()`).
* **Reusability Rating:** 9/10.
* **Suggested File Name:** `DisplayHeading.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Typography (`font-serif`), Colors (`text-foreground`).

### 2.2 MetadataLabel
* **Purpose:** The microscopic, wide-tracked utilitarian text.
* **Category:** Typography
* **Description:** A tiny, uppercase, highly tracked sans-serif component used for categories, stat labels, and micro-copy.
* **Required Props:** `children` (string)
* **Optional Props:** `color` (white | gray | red), `className` (string)
* **Variants:** None. Color dictates usage.
* **States:** None.
* **Responsive Behavior:** Remains small (10px - 12px) across all breakpoints.
* **Accessibility Requirements:** High contrast validation required when placed over gradients.
* **Animation Requirements:** Usually fades in alongside the component it describes.
* **Dependencies:** Custom Sans Font.
* **Complexity Rating:** 1/10.
* **Reusability Rating:** 10/10. Used extensively to counterbalance the `DisplayHeading`.
* **Suggested File Name:** `MetadataLabel.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Typography (`font-sans`, `letter-spacing: 0.1em`), Colors.

### 2.3 BodyText
* **Purpose:** General paragraph rendering.
* **Category:** Typography
* **Description:** Clean, 16px sans-serif text in `#A3A3A3`.
* **Required Props:** `children` (ReactNode)
* **Optional Props:** `className` (string)
* **Variants:** None.
* **States:** None.
* **Responsive Behavior:** Scales to 14px on mobile. Line-height remains 1.6.
* **Accessibility Requirements:** Must meet 4.5:1 AA contrast ratio against `#050505`.
* **Animation Requirements:** Wrapped in `FadeUpWrapper`.
* **Dependencies:** None.
* **Complexity Rating:** 1/10.
* **Reusability Rating:** 8/10.
* **Suggested File Name:** `BodyText.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Typography (`font-sans`), Color (`text-muted`).

---

## 3. NAVIGATION COMPONENTS

### 3.1 Navbar
* **Purpose:** Global site routing.
* **Category:** Navigation
* **Description:** Minimalist, transparent header. Contains logo and `TextLink`s.
* **Required Props:** None.
* **Optional Props:** None.
* **Variants:** None.
* **States:** Transparent (default), Blurred/Solid (on scroll down).
* **Responsive Behavior:** 
  * Desktop: Full inline list.
  * Mobile: Collapses links into a `MobileMenu` triggered by a hamburger button.
* **Accessibility Requirements:** `<nav>` semantics, `aria-label="Main navigation"`. Focus trapping for mobile menu.
* **Animation Requirements:** Link hover interactions. Mobile menu slide-in.
* **Dependencies:** `TextLink`, `MetadataLabel` (for CTA), `MobileMenu`.
* **Complexity Rating:** 5/10. State management for scroll detection and mobile menu.
* **Reusability Rating:** 1/10. Singleton component.
* **Suggested File Name:** `Navbar.tsx`
* **Suggested Folder Location:** `components/layout`
* **Design Token Usage:** Z-Index (`z-nav`), Spacing.

### 3.2 TextLink (CTA Button)
* **Purpose:** Primary interaction element.
* **Category:** Interaction
* **Description:** The brutalist substitute for traditional pill buttons. Uppercase sans-serif text with aggressive hover states.
* **Required Props:** `href` (string), `children` (ReactNode)
* **Optional Props:** `active` (boolean), `className` (string)
* **Variants:** `nav-link` (subtle hover), `cta` (red underline expansion or solid red fill).
* **States:** 
  * Default: Minimal text.
  * Hover: Red underline draws from left-to-right (`scale-x: 1`), or text shifts to `#D92323`.
  * Focused: 2px sharp `#D92323` outline.
* **Responsive Behavior:** Touch targets must be minimum 44x44px on mobile despite tiny text.
* **Accessibility Requirements:** Proper `href` usage. `focus-visible` outline is critical due to dark mode.
* **Animation Requirements:** Framer motion or CSS transitions for the hover line expansion.
* **Dependencies:** Next.js `<Link>`.
* **Complexity Rating:** 3/10. Hover micro-interactions.
* **Reusability Rating:** 8/10.
* **Suggested File Name:** `TextLink.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Colors (`accent`, `muted`), Typography.

---

## 4. CONTENT COMPONENTS

### 4.1 StatBlock
* **Purpose:** Renders a single statistic (number + label).
* **Category:** Content
* **Description:** Used in the Stats Bar. Combines a red `DisplayHeading` (number variant) and a gray `MetadataLabel`.
* **Required Props:** `value` (number), `label` (string)
* **Optional Props:** `suffix` (string, e.g., "K+", "+")
* **Variants:** None.
* **States:** None.
* **Responsive Behavior:** Text centers perfectly.
* **Accessibility Requirements:** `aria-label` merging the number and label for screen readers.
* **Animation Requirements:** The `value` prop animates from 0 to target number when intersecting the viewport.
* **Dependencies:** `DisplayHeading`, `MetadataLabel`, `Framer Motion` (`useSpring`, `useInView`).
* **Complexity Rating:** 6/10. Due to the number counting animation relying on scroll intersection.
* **Reusability Rating:** 5/10. Used multiple times in one section.
* **Suggested File Name:** `StatBlock.tsx`
* **Suggested Folder Location:** `components/shared`
* **Design Token Usage:** Colors (`accent`).

### 4.2 AccordionItem
* **Purpose:** Interactive step in the "BEFORE YOU APPLY" section.
* **Category:** Content / Interaction
* **Description:** A complex row combining massive typography, a hairline top border, and an expanding content area.
* **Required Props:** `number` (string), `title` (string), `content` (ReactNode), `isOpen` (boolean), `onToggle` (function).
* **Optional Props:** None.
* **Variants:** None.
* **States:** 
  * Default: Number/Title are gray.
  * Hover: Number/Title shift to white. Chevron shifts right 8px.
  * Expanded (`isOpen=true`): Sub-content height animates to auto. Title stays white.
* **Responsive Behavior:** Padding decreases drastically on mobile.
* **Accessibility Requirements:** `button` semantic wrapper. `aria-expanded` state. `aria-controls` linking to the content region.
* **Animation Requirements:** Height animation via `AnimatePresence`. Color transition via CSS.
* **Dependencies:** `DisplayHeading`, `BodyText`, `DividerLine`.
* **Complexity Rating:** 8/10. Complex Framer Motion height interpolation without layout jitter.
* **Reusability Rating:** 5/10. Used 5 times in the Accordion section.
* **Suggested File Name:** `AccordionItem.tsx`
* **Suggested Folder Location:** `components/shared`
* **Design Token Usage:** Transitions, Colors (`muted` -> `foreground`).

### 4.3 ProfileCard
* **Purpose:** Renders a team member in the Contact Grid.
* **Category:** Content
* **Description:** Grayscale portrait image paired with name and title.
* **Required Props:** `imageSrc` (string), `name` (string), `role` (string)
* **Optional Props:** None.
* **Variants:** None.
* **States:** Hover (Image scales up 1.05x inside an `overflow-hidden` mask).
* **Responsive Behavior:** Spans columns based on parent grid.
* **Accessibility Requirements:** `alt` text for the portrait image.
* **Animation Requirements:** CSS scale on hover.
* **Dependencies:** `next/image`.
* **Complexity Rating:** 2/10.
* **Reusability Rating:** 4/10. Used for team members.
* **Suggested File Name:** `ProfileCard.tsx`
* **Suggested Folder Location:** `components/shared`
* **Design Token Usage:** Typography.

### 4.4 IncentiveCard
* **Purpose:** Displays a physical reward object.
* **Category:** Content
* **Description:** An invisible container holding a high-end 3D render of a product, resting on a pedestal. No borders.
* **Required Props:** `imageSrc` (string), `index` (string), `title` (string)
* **Optional Props:** None.
* **Variants:** None.
* **States:** Hover (Image performs a very slow, subtle floating animation).
* **Responsive Behavior:** Center-aligned stacking on mobile.
* **Accessibility Requirements:** `alt` text.
* **Animation Requirements:** Continuous subtle CSS keyframe float (translate Y up and down).
* **Dependencies:** `next/image`.
* **Complexity Rating:** 4/10. Relies heavily on transparent PNG/WebP blending.
* **Reusability Rating:** 3/10.
* **Suggested File Name:** `IncentiveCard.tsx`
* **Suggested Folder Location:** `components/shared`
* **Design Token Usage:** None (Image driven).

---

## 5. MEDIA COMPONENTS

### 5.1 VolumetricSpotlight
* **Purpose:** Creates the deep atmospheric lighting effect behind silhouettes.
* **Category:** Media / Animation
* **Description:** A purely CSS-based radial gradient that simulates a physical stage spotlight cutting through smoke.
* **Required Props:** None.
* **Optional Props:** `color` (default: white. Can be red `#D92323`), `className` (string for positioning).
* **Variants:** `hero` (white, top-down), `footer` (red, back-lit).
* **States:** None.
* **Responsive Behavior:** Absolute positioned, scales with parent container.
* **Accessibility Requirements:** `aria-hidden="true"`.
* **Animation Requirements:** May pulse opacity slightly over a 4s CSS keyframe loop.
* **Dependencies:** None.
* **Complexity Rating:** 5/10. Requires precise tuning of `radial-gradient` stops and `mix-blend-mode` to prevent harsh banding against the `#050505` background.
* **Reusability Rating:** 4/10. Used in Hero, Accordion Title, and Footer.
* **Suggested File Name:** `VolumetricSpotlight.tsx`
* **Suggested Folder Location:** `components/ui`
* **Design Token Usage:** Colors (`background`, `accent`), Z-Index (`z-background`).

---

## 6. ANIMATION COMPONENTS

### 6.1 FadeUpWrapper
* **Purpose:** Global entrance animation primitive.
* **Category:** Animation
* **Description:** A Framer Motion wrapper that fades and translates an element upwards when it enters the viewport.
* **Required Props:** `children` (ReactNode)
* **Optional Props:** `delay` (number), `duration` (number).
* **Variants:** None.
* **States:** Initial (opacity 0, y: 20px), InView (opacity 1, y: 0).
* **Responsive Behavior:** Triggers based on intersection observer.
* **Accessibility Requirements:** Checks `prefers-reduced-motion`. If true, bypasses translation and only performs a rapid opacity fade.
* **Animation Requirements:** Framer Motion `useInView`.
* **Dependencies:** `framer-motion`.
* **Complexity Rating:** 3/10.
* **Reusability Rating:** 10/10. Applied to almost every text block and image on the page.
* **Suggested File Name:** `FadeUpWrapper.tsx`
* **Suggested Folder Location:** `components/animations`

### 6.2 TextRevealMask
* **Purpose:** High-end typographic entrance animation.
* **Category:** Animation
* **Description:** Wraps text in an `overflow: hidden` container. The text inside animates its `y` position from `100%` to `0%`, making it look like it's rising out of a cut in the screen.
* **Required Props:** `text` (string or array of strings for lines).
* **Optional Props:** `staggerDelay` (number).
* **Variants:** `word`, `line`.
* **States:** Initial, InView.
* **Responsive Behavior:** Disables complex line-splitting on mobile to prevent layout thrashing; falls back to `FadeUpWrapper`.
* **Accessibility Requirements:** `prefers-reduced-motion` fallback. `aria-hidden` on the animated spans, with visually hidden text for screen readers so the sentence reads normally.
* **Animation Requirements:** Complex Framer Motion variants.
* **Dependencies:** `framer-motion`.
* **Complexity Rating:** 8/10. Splitting text safely while maintaining semantics and responsive wrapping is difficult.
* **Reusability Rating:** 7/10. Used on massive `DisplayHeading` components.
* **Suggested File Name:** `TextRevealMask.tsx`
* **Suggested Folder Location:** `components/animations`

---

## 7. COMPONENT RELATIONSHIP MAP

```text
Page (/)
├── Layout (Navbar, SmoothScroll, FooterCTA)
│   ├── Navbar
│   │   ├── Logo
│   │   ├── TextLink (Nav Links)
│   │   └── MobileMenu
│
├── SectionWrapper (HeroSection)
│   ├── GridContainer
│   │   ├── TextRevealMask -> DisplayHeading ("ANTARAGNI")
│   │   ├── MetadataLabel
│   │   ├── VolumetricSpotlight (White)
│   │   └── ParallaxWrapper -> ResponsiveImage (Silhouette)
│
├── SectionWrapper (StatsSection)
│   ├── DividerLine (Top)
│   ├── FlexRow
│   │   └── StatBlock (x5)
│   │       ├── DisplayHeading (Number)
│   │       └── MetadataLabel
│   └── DividerLine (Bottom)
│
├── SectionWrapper (ApplicationSection)
│   ├── GridContainer
│   │   ├── StickySidebar
│   │   │   ├── VolumetricSpotlight
│   │   │   └── DisplayHeading ("BEFORE YOU APPLY")
│   │   └── AccordionList
│   │       └── AccordionItem (x5)
│   │           ├── DividerLine
│   │           ├── DisplayHeading (Number & Title)
│   │           └── BodyText (Content)
│
└── SectionWrapper (FooterCTASection)
    ├── DisplayHeading ("REPRESENT ANTARAGNI?")
    ├── VolumetricSpotlight (Red)
    └── ResponsiveImage (Silhouette)
```

---

## 8. BUILD PRIORITY

To ensure a smooth architectural buildup without blocking dependencies, components must be built in this strict order:

**Phase 1: Design Tokens & Primitives (The Atoms)**
1. `DividerLine` (Establishes layout boundaries)
2. `MetadataLabel` (Smallest typography)
3. `BodyText`
4. `DisplayHeading` (Core brand typography)
5. `TextLink` (Interactive primitive)

**Phase 2: Architectural Layouts (The Bones)**
6. `GridContainer`
7. `SectionWrapper`
8. `VolumetricSpotlight` (Critical for background blending tests early on)

**Phase 3: Animation Wrappers (The Motion)**
9. `FadeUpWrapper`
10. `TextRevealMask`

**Phase 4: Complex Content Blocks (The Organs)**
11. `StatBlock` (Requires typography + animation)
12. `ProfileCard` (Requires layout + interaction)
13. `IncentiveCard`
14. `ExpectationItem`

**Phase 5: High-Complexity Interactive Compositions (The Brain)**
15. `AccordionItem` (Requires everything: layout, motion, states, typography, borders)
16. `Navbar` & `MobileMenu`

---

## 9. RECOMMENDED SHARED COMPONENTS

* **`VolumetricSpotlight` vs Static Images:** The white spotlight in the Hero, the glow behind the Accordion title, and the red spotlight in the Footer should all utilize the exact same `VolumetricSpotlight.tsx` component. By passing a `color` prop, we avoid loading multiple heavy PNGs, ensuring a perfectly consistent CSS blend mode across the entire site while drastically improving load times.
* **`DisplayHeading` polymorphism:** The massive headings, the numbers in the Stats Bar, and the numbers in the Accordion share the exact same typographic DNA. Instead of creating a `StatNumber` component, we use `<DisplayHeading variant="number">`. This keeps the custom font loading and letter-spacing logic in a single file.
* **`DividerLine` abstraction:** Every 1px horizontal line on the page is identical. Do not hardcode `border-t border-[#262626]` into individual sections. Abstracting this to `<DividerLine />` ensures that if the brand color shifts from `#262626` to `#333333` for accessibility reasons, the change propagates instantly across the entire architecture.
