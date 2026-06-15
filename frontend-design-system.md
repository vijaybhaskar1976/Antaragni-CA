# Frontend Design Specification Document

## 1. DESIGN PHILOSOPHY

* **Overall aesthetic:** Dark, cinematic, high-contrast, edgy, and brutalist-influenced editorial design.
* **Emotional feeling:** Anticipation, energy, exclusivity, prestige, mystery, and scale.
* **Brand personality:** Bold, authoritative, youth-centric, dynamic, rebellious yet highly organized.
* **Design influences:** Brutalism mixed with high-end editorial layouts, concert/event posters, and cinematic lighting/stage design.
* **Visual hierarchy:** Large, elegant display serif typography dominates the page, followed by high-contrast imagery, and finally small, precise sans-serif metadata.
* **User perception:** The user feels they are looking at an exclusive club or a major, life-changing event. It feels premium and trustworthy due to consistent spacing, high-quality bespoke imagery, and deliberate use of negative space.
* **Premium/luxury cues:** Generous negative space, thin delicate lines (1px dividers), elegant serif fonts, subtle red accents on a deep black background, and cinematic spotlights.
* **Modern web references:** Oversized typography, dark UI, grainy textures (implied by the spotlight and stage smoke effects), horizontal lines as structural separators, and minimal, intentional use of color.

## 2. COLOR SYSTEM

### Primary Colors
* **Deep Black (Background)**
  * HEX: `#050505`
  * RGB: `5, 5, 5`
  * Usage: Main background for all sections, creating the cinematic void.
  * Percentage of usage: 75%
* **Pure White (Primary Text)**
  * HEX: `#FFFFFF`
  * RGB: `255, 255, 255`
  * Usage: Main headings, primary body copy, key icons.
  * Percentage of usage: 15%

### Secondary Colors
* **Light Gray (Secondary Text)**
  * HEX: `#A3A3A3`
  * RGB: `163, 163, 163`
  * Usage: Body paragraphs, descriptions, secondary metadata.
  * Percentage of usage: 5%

### Accent Colors
* **Crimson Red**
  * HEX: `#D92323` (Approximate)
  * RGB: `217, 35, 35`
  * Usage: Highlights, small metadata text, active states, key branding elements (like the logo and tiny diagonal accents).
  * Percentage of usage: 2%

### Neutral Colors
* **Dark Gray (Borders)**
  * HEX: `#262626`
  * RGB: `38, 38, 38`
  * Usage: 1px divider lines, subtle card borders.
  * Percentage of usage: 1%

### Background Colors
* Identical to Primary Deep Black.

### Text Colors
* Primary: Pure White
* Secondary: Light Gray
* Accent: Crimson Red

### Border Colors
* Primary: Dark Gray (`#262626`)
* Accent: Crimson Red (for active/hover borders)

### Glow Colors
* **Spotlight White**
  * HEX: `#FFFFFF` with opacity
  * RGB: `255, 255, 255`
  * Usage: Behind silhouettes and key elements to create depth.
  * Percentage of usage: 2%

### Gradient Colors
* **Background Spotlight**
  * Gradient direction: Radial (Center)
  * Opacity values: From `rgba(255, 255, 255, 0.15)` fading to `rgba(5, 5, 5, 0)` at 50-70% extent.
  * Layering behavior: Placed beneath typography and foreground images/silhouettes, using `mix-blend-mode: screen` or `lighten` for realistic stage lighting effects.

## 3. TYPOGRAPHY SYSTEM

### Hero Heading
* Font family: Elegant, ultra-condensed Display Serif (e.g., Ogg, Playfair Display Extra Condensed, or custom).
* Estimated font weight: 400 (Regular).
* Font size: 12vw / 160px (Desktop), scaling responsively.
* Line height: 0.9.
* Letter spacing: -0.02em (tightly tracked).
* Text transform: Uppercase.
* Usage: Main section titles ("ANTARAGNI", "SPIRIT OF ANTARAGNI", "BEFORE YOU APPLY").

### Section Heading
* Font family: Display Serif (Same as Hero).
* Estimated font weight: 400.
* Font size: 80px.
* Line height: 1.0.
* Letter spacing: 0em.
* Text transform: Title Case / Uppercase.
* Usage: Secondary section headers ("INCENTIVES", "What We Expect", "CONTACT US").

### Subheading
* Font family: Clean Sans-serif (e.g., Inter, Helvetica Neue).
* Estimated font weight: 500 (Medium).
* Font size: 24px.
* Line height: 1.3.
* Letter spacing: 0.05em.
* Text transform: Uppercase.
* Usage: Pre-titles, category labels above headings.

### Body Text
* Font family: Clean Sans-serif (Inter).
* Estimated font weight: 400 (Regular).
* Font size: 16px.
* Line height: 1.6.
* Letter spacing: 0em.
* Text transform: None.
* Usage: General descriptions, paragraphs.

### Caption / Metadata
* Font family: Monospace or wide Sans-serif.
* Estimated font weight: 600 (SemiBold).
* Font size: 12px.
* Line height: 1.4.
* Letter spacing: 0.1em.
* Text transform: Uppercase.
* Usage: Red small labels, numbered lists (01, 02), micro-copy.

### Button Text
* Font family: Sans-serif.
* Estimated font weight: 500.
* Font size: 14px.
* Line height: 1.0.
* Letter spacing: 0.05em.
* Text transform: Uppercase.
* Usage: CTA buttons, interactive links.

### Statistic Numbers
* Font family: Serif or specialized Display Sans.
* Estimated font weight: 400.
* Font size: 48px to 64px.
* Line height: 1.0.
* Letter spacing: 0.02em.
* Text transform: None.
* Usage: Highlighted metrics (e.g., 100K+, 50+).

### FAQ Text / List Text
* Font family: Display Serif.
* Estimated font weight: 400.
* Font size: 32px to 48px.
* Line height: 1.2.
* Letter spacing: 0em.
* Text transform: Uppercase.
* Usage: Items in the "BEFORE YOU APPLY" sequence ("APPLICATION", "SELECTION").

### Footer Text
* Font family: Sans-serif.
* Estimated font weight: 400.
* Font size: 14px.
* Line height: 1.5.
* Letter spacing: 0em.
* Text transform: None.
* Usage: Copyright, standard links.

* **Font pairing logic:** Extreme contrast. A highly decorative, dramatic serif is grounded by a hyper-minimal, utilitarian sans-serif. This creates a tension that feels both artistic and systematic.
* **Hierarchy strategy:** Size and typeface denote importance. Large Serif = Concept/Emotion. Small Sans = Information/Action.
* **Visual rhythm:** Headings act as massive graphical blocks, punctuated by thin horizontal lines and sparse clusters of small text.

## 4. SPACING SYSTEM

* **Section padding:** 160px (Desktop), 80px (Tablet), 48px (Mobile).
* **Container width:** 1440px max-width, centered.
* **Content width:** 1280px within the container.
* **Grid gutters:** 24px (Desktop), 16px (Mobile).
* **Margin system:** Large vertical gaps. Headings have 64px bottom margin. Structural dividers have 48px vertical margins.
* **Vertical rhythm:** Based on an 8px baseline grid.

**Spacing Table (Estimated):**
* `4px` (micro adjustments, icon to text)
* `8px` (list item spacing)
* `16px` (paragraph spacing)
* `24px` (grid gutters, component internal padding)
* `32px` (sub-section spacing)
* `48px` (divider spacing)
* `64px` (major element spacing, heading to content)
* `120px` (standard section padding)
* `160px` (hero/major section padding)

## 5. LAYOUT SYSTEM

* **Maximum content width:** 1440px.
* **Grid structure:** 12-column CSS Grid.
* **Number of columns:** 12.
* **Responsive breakpoints:**
  * `sm`: 640px
  * `md`: 768px
  * `lg`: 1024px
  * `xl`: 1280px
  * `2xl`: 1536px
* **Alignment principles:** Hard left-alignment for typography establishing a strong vertical reading line. Images and decorative elements are used to balance the right side asynchronously.
* **Visual balance rules:** Heavy typography on one side is counter-weighted by atmospheric imagery or empty space cut by a spotlight on the other.

**Desktop Layout:**
12-column grid. Complex asymmetrical layouts. Text often spans 5-6 columns on the left, with images occupying 6-7 columns on the right, or centered completely for dramatic pauses (like the hero silhouette).

**Tablet Layout:**
8-column grid. Two-column layouts become slightly tighter. Text sizes scale down to 80% of desktop.

**Mobile Layout:**
4-column grid. All content stacks vertically. Extreme typography sizes are reduced to fit screen width (e.g., 12vw becomes 18vw or fixed 64px). Spotlights are centered behind stacked content.

## 6. COMPONENT INVENTORY

* **Navbar**
  * Purpose: Primary site navigation.
  * Dimensions: 100% width, 80px height.
  * Padding: 0 40px.
  * Background: Transparent.
  * Interaction behavior: Links fade on hover. May transform to solid black background on scroll.

* **Hero Section**
  * Purpose: Immediate visual impact and brand establishment.
  * Dimensions: 100vh height min.
  * Padding: 160px top.
  * Background: Deep black with radial spotlight.
  * Interaction behavior: Parallax on scroll.

* **Statistic Card/Block**
  * Purpose: Display impressive event metrics.
  * Dimensions: Auto.
  * Padding: 0.
  * Border: Top and bottom 1px solid #262626 (often forming a continuous row).
  * Interaction behavior: Numbers count up on scroll into view.

* **Quote Block**
  * Purpose: Testimonial/impact statement.
  * Dimensions: Full width container.
  * Padding: 120px 0.
  * Background: Transparent.
  * Interaction behavior: Staggered text fade-in.

* **Incentive Card (Glass Card / Image Container)**
  * Purpose: Showcase physical rewards.
  * Dimensions: Variable (approx 300px width).
  * Padding: 24px.
  * Background: Transparent or very subtle `#111` to `#000` linear gradient.
  * Border: None (relies on image lighting to define edges).
  * Interaction behavior: Image floats/scales slightly on hover.

* **Feature Card / Expectation Item**
  * Purpose: List requirements.
  * Dimensions: Spans 3 columns.
  * Padding: 0.
  * Border: Top border 1px solid `#262626`.
  * Interaction behavior: Sub-text opacity increases on hover.

* **FAQ Item / Accordion Step (BEFORE YOU APPLY)**
  * Purpose: Expandable list of steps.
  * Dimensions: 100% width.
  * Padding: 32px 0.
  * Border: Top border 1px solid `#262626`.
  * Interaction behavior: On click/hover, item expands vertically to reveal description. Number and Title colors may shift to pure white.

* **Contact Card**
  * Purpose: Team member display.
  * Dimensions: Spans 3-4 columns.
  * Padding: 0.
  * Background: Transparent.
  * Image: Grayscale, high contrast.
  * Interaction behavior: Image slightly zooms or shifts to color on hover.

* **Footer Block / CTA Component**
  * Purpose: Final call to action.
  * Dimensions: Full width, large vertical height.
  * Padding: 160px 0.
  * Background: Radial spotlight on silhouette.
  * Interaction behavior: Spotlight intensity pulses.

## 7. BUTTON SYSTEM

* **Height:** Minimal, often relies on text line-height rather than box padding.
* **Width behavior:** Hug content.
* **Typography:** Sans-serif, 12-14px, Uppercase, Wide tracking.
* **Radius:** 0px (sharp and brutalist).
* **Border:** None or 1px solid Crimson Red / Dark Gray.
* **Background:** Transparent.
* **Hover state:** A red 1px underline animates from left to right, or text turns Crimson Red. If it's a solid button, background fills with Crimson Red and text turns White.
* **Active state:** Scale down by 0.95.
* **Disabled state:** Opacity 30%, cursor not-allowed.
* **Why it feels premium:** It eschews bulky, pill-shaped default buttons in favor of editorial, hyper-minimalist typographic links that demand precise interaction.

## 8. CARD SYSTEM

* **Border radius:** 0px. Absolutely sharp corners maintain the edgy, architectural feel.
* **Border style:** 1px solid `#262626` (Dark Gray).
* **Background:** Mostly transparent, relying on the page's deep black. Sometimes a very subtle linear gradient `linear-gradient(180deg, #111111 0%, #000000 100%)`.
* **Shadow:** No CSS drop shadows. The design uses internal lighting in the 3D rendered images (like the incentive products) to create depth.
* **Blur:** No glassmorphism on cards.
* **Hover interaction:** Borders may glow slightly (`border-color: #D92323`) or contents shift up by 4px.
* **Layering and depth:** Depth is achieved entirely through the interplay of pure black backgrounds, 1px structural lines, and dramatically lit photographic assets. It mimics print layout rather than typical UI layering.

## 9. ANIMATION LANGUAGE

* **Animation style:** Cinematic, deliberate, smooth, and slightly decelerated.
* **Motion references:** Film title sequences, high-end fashion websites.
* **Scroll behavior:** Smooth scrolling (Lenis or Locomotive Scroll) is essential to give weight to the layout.
* **Entrance animations:**
  * Duration: 1.2s to 1.5s.
  * Delay: 0.1s to 0.4s staggering.
  * Easing: Custom cubic-bezier (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` - strong ease out).
  * Direction: Bottom to top.
  * Intensity: Subtle 20px translation.
  * Expected emotional effect: Creates a feeling of unfolding scale and drama.
* **Text animations:** Reveal Mask (overflow-hidden wrapper). Text slides up line by line or word by word.
* **Image animations:** Parallax (moves at a different speed than scroll) and Scale In (slowly scales from 1.1 to 1.0 upon entering viewport).
* **Section transitions:** Smooth blending of deep blacks. Fade Up of 1px structural lines.
* **Hover animations:** Cursor Interactions (custom blend-mode cursor), Magnetic Hover on specific buttons.

## 10. HOVER EFFECTS

* **Text Links:**
  * Trigger: Hover over text.
  * Animation: Color shift or underline expansion.
  * Duration: 0.3s.
  * Scale: 1.0.
  * Opacity: 1.0.
  * Blur: 0.
  * Movement: 0.
  * Shadow change: None.
  * Color change: White to Crimson Red (`#D92323`).
* **Accordion Items ("BEFORE YOU APPLY"):**
  * Trigger: Hover over row.
  * Animation: Text changes color, chevron shifts right.
  * Duration: 0.4s.
  * Scale: 1.0.
  * Opacity: Sub-text fades in from 0 to 1.
  * Movement: 8px horizontal shift on icons.
  * Color change: Gray to Pure White.
* **Portrait Images (Contact Us):**
  * Trigger: Hover over image container.
  * Animation: Image scales within mask.
  * Duration: 0.6s.
  * Scale: 1.05.
  * Movement: None.
  * Color change: Optional grayscale to color reveal.

## 11. RESPONSIVE BEHAVIOR

* **Desktop:** Full cinematic experience. Massive typography, horizontal rhythm, complex asymmetrical grids.
* **Tablet:**
  * Typography changes: Hero text scales down by ~30%.
  * Grid collapse behavior: 12 columns collapse to 8 or 4. Side-by-side text and image sections begin to stack.
  * Section spacing changes: Section padding reduces from 160px to 80px.
* **Mobile:**
  * Typography changes: Extreme typography sizes are reduced to fit screen width (e.g., 12vw becomes 18vw or fixed 64px).
  * Grid collapse behavior: Strictly 1-column layout. All content stacks vertically.
  * Section spacing changes: Padding drops to 48px to preserve screen real estate.
  * Animation simplification: Parallax effects are disabled for performance. Complex text staggering is simplified to simple fade-ups.
  * Navigation changes: Top links collapse into a full-screen dark modal menu triggered by a hamburger icon.

## 12. ACCESSIBILITY

* **Contrast improvements:** Ensure the dark gray text (`#A3A3A3`) on black (`#050505`) meets the 4.5:1 ratio for AA compliance. Lighten slightly if needed.
* **Keyboard navigation:** Critical. Since hover states are subtle, focus states (`:focus-visible`) must be explicitly defined using a sharp 2px solid `#D92323` outline with a 2px offset.
* **Reduced motion mode:** Respect `@media (prefers-reduced-motion: reduce)`. Disable smooth scrolling, parallax, and text staggering. Replace with simple opacity fades.
* **Focus states:** Use high-contrast bounding boxes around active elements to compensate for the dark theme.

## 13. FRONTEND IMPLEMENTATION NOTES

* **Component hierarchy:**
  * `Layout`
    * `Navbar`
    * `SmoothScrollProvider` (Lenis context)
      * `HeroSection`
      * `StatBar`
      * `QuoteSection`
      * `IncentivesShowcase`
      * `ExpectationsGrid`
      * `ApplicationStepsAccordion`
      * `ContactGrid`
      * `SponsorMarquee`
      * `FooterCTA`
* **Folder structure:**
  * `/components/ui/` (Buttons, Typography wrappers, Accordion primitives)
  * `/components/sections/` (Hero, Stats, Quote, etc.)
  * `/styles/` (Global CSS, custom fonts)
  * `/lib/` (Animation variants, utility functions)
* **Reusable design tokens:**
  * Tailwind `tailwind.config.js`: Extend colors (`background: '#050505'`, `accent: '#D92323'`, `border: '#262626'`), fonts (`serif`, `sans`), and custom padding scales (`120px`, `160px`).
* **Animation architecture:**
  * Create global `FadeUp` and `StaggerText` Framer Motion components.
  * Use `useInView` to trigger animations only once when they enter the viewport.
* **Performance considerations:**
  * Optimize large background images and silhouettes (WebP or AVIF).
  * Use `next/image` with `priority` on the Hero silhouette.
  * Render spotlights using CSS radial gradients (`background: radial-gradient(...)`) rather than heavy transparent PNGs to save bandwidth and improve rendering speed.

## 14. AI RECREATION GUIDE

**Instructions for Another AI**

To recreate this website precisely without visual reference, follow these strict architectural instructions:

* **Core Theme & Design Language:** Build a brutalist, high-end editorial website for a cultural festival. The background is pure `#050505`. The text is primarily `#FFFFFF` and `#A3A3A3`. The accent color is `#D92323`. The design relies entirely on dramatic typography, vast negative space, and 1px `#262626` dividing horizontal lines. No drop shadows. No rounded corners (`border-radius: 0`). Implement smooth scrolling.
* **Typography:** Use an ultra-condensed, elegant display serif (like Ogg or Playfair Display) for all major headings. Use a utilitarian sans-serif (like Inter) for body copy. Headings are massive (up to 160px desktop), uppercase, and tightly tracked.
* **Layout & Spacing:** Use a 1440px max-width container with a 12-column grid. Vertical spacing is immense—use 120px to 160px padding between sections.
* **Section Breakdown:**
  1. **Hero:** Massive left-aligned serif text "ANTARAGNI" and "SPIRIT OF ANTARAGNI". On the right, a silhouette of a person standing in a volumetric CSS radial spotlight (white fading to transparent black, `mix-blend-mode: screen`).
  2. **Stats Bar:** A full-width horizontal bar bounded by 1px top/bottom borders. Four statistics with red numbers (e.g., 100K+) and gray labels, evenly spaced.
  3. **Quote:** A large portrait photograph of a person in a jacket on the right, illuminated by a spotlight. On the left, massive serif text quoting them.
  4. **Incentives:** Dark, borderless cards showing premium physical items (awards, bottles, caps) rendered in 3D on pedestals, separated by ample space. No box-shadows; rely on the image's internal 3D lighting.
  5. **Expectations:** A 4-column grid. Each item has a red number, a white serif title, and a gray sans-serif description. Top border of 1px dark gray on each column.
  6. **Accordion Steps ("BEFORE YOU APPLY"):** A list of numbered steps. Each row has a top border. Huge serif numbers (01, 02) on the left, step titles in the middle. The active row expands to show description text.
  7. **Contact:** A grid of greyscale portrait photos. Under each photo, the name in serif and title in gray sans-serif.
  8. **Footer CTA:** Centered massive text asking "REPRESENT ANTARAGNI?". Below it, a dark silhouette of a person standing in a red spotlight.
* **Animations:** All elements entering the viewport should slowly fade up over 1.2 seconds. Headings should animate in line-by-line using an `overflow: hidden` mask. Images should have a subtle parallax effect on scroll.
