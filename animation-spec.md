# Animation & Motion Specification Blueprint

## 1. MOTION PHILOSOPHY

### 1.1 Motion Personality
**How the website moves:** The motion language is heavy, cinematic, and deliberate. Nothing is rushed; nothing bounces. Elements do not simply appear; they are revealed as if emerging from deep shadow into harsh stage light.
**Emotional feeling:** Tension, anticipation, prestige, and scale.
**Motion references:** Film noir title sequences, high-end luxury fashion campaigns, slow-motion concert stage lighting.
**Luxury cues:** Slow easing curves, perfect visual synchronicity, and the absolute absence of spring or bounce physics.
**Editorial cues:** Line-by-line typographic reveals simulating a reading rhythm, horizontal hairline dividers fading in like strict architectural grids.

### 1.2 Motion Principles
* **Consistency:** All entrance animations must share the exact same `cubic-bezier` easing to unify the physics of the page.
* **Timing:** Deliberately slow. The user should physically feel the weight of the massive typography.
* **Easing:** Strong deceleration (Ease-Out). Fast initial movement that dramatically slows down before resting perfectly into place.
* **Hierarchy:** Large elements move slower than small elements. Typography reveals first, images second.
* **User attention:** Motion is exclusively used to draw the eye to the most important element on the screen. No distracting background looping animations aside from extremely subtle spotlight pulsing.

---

## 2. GLOBAL MOTION SYSTEM

### 2.1 Preferred Durations
* **Micro:** `0.2s` (Color shifts, hover states, chevron rotations)
* **Short:** `0.4s` (Text link line expansions, accordion icon shifts)
* **Medium:** `0.8s` (Image scale-in, small component fade-ups, grid staggering)
* **Long:** `1.2s` to `1.6s` (Massive typographic reveals, major section entrances)

### 2.2 Preferred Easing Curves
* **Standard Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (Used for general UI elements, quick opacity fades).
* **Premium Easing (The "Cinematic" Curve):** `cubic-bezier(0.16, 1, 0.3, 1)` (Used for all major text reveals and image entries. Very fast start, very long, dramatic tail).
* **Hover Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Snappier, feels instantly responsive to user input).
* **Scroll Easing:** Linear tracking tied directly to scroll progress (via Lenis smooth scrolling integration).

### 2.3 Stagger Rules
* **Text Stagger:** `0.1s` delay between lines.
* **Grid Stagger:** `0.1s` delay across columns from left to right.
* **List Stagger:** `0.05s` delay between rows in the Accordion or Stats bar.

### 2.4 Scroll Trigger Rules
* **Trigger thresholds:** `20%` into the viewport (e.g., intersection observer with `margin: "-20%"`).
* **Replay behavior:** Most animations play **once** (`once: true`). Repeating entrance animations on scroll-up breaks the illusion of physical space and feels cheap.
* **One-time animations:** Text reveals, initial image fade-ins, stat counting.
* **Continuous animations:** Parallax scrolling, spotlight opacity pulses.

---

## 3. SECTION-BY-SECTION ANIMATION PLAN

### 3.1 Hero Section
* **Visual Purpose:** Immediate cinematic impact.
* **Entry Animation:**
  * Background `#050505` fades from black over `1s`.
  * "ANTARAGNI" text rises from an invisible mask line-by-line (Duration: `1.4s`, Easing: Premium, Delay: `0.2s`).
  * Silhouette image fades in (Duration: `2s`, Opacity: `0` to `1`).
* **Scroll Animation:** Silhouette translates Y downwards at 15% of the scroll speed (Parallax), creating massive depth against the text.
* **Hover Interactions:** Navbar links subtle fade/underline.
* **Background Motion:** The white spotlight subtly pulses opacity (`0.8` to `1.0` over a slow `4s` loop).

### 3.2 Manifesto Section ("SPIRIT OF ANTARAGNI")
* **Visual Purpose:** Editorial context.
* **Entry Animation:** "SPIRIT OF ANTARAGNI" staggers in line-by-line. Body text fades up globally.
* **Scroll Animation:** Crowd image scales slowly from `1.05` to `1.0` over `1.5s` as it enters the viewport.
* **Image Motion:** Slow inward zoom tied to scroll progress.

### 3.3 Statistics Bar
* **Visual Purpose:** Establish rhythmic scale.
* **Entry Animation:** The top and bottom 1px horizontal lines scale-X from the center to the edges over `1s`.
* **Scroll Animation:** Numbers count up from 0 to their target using a strict `spring` physics simulation over `2s`.
* **Micro Interactions:** None. Preserve mathematical purity.

### 3.4 Testimonial Section
* **Visual Purpose:** Immersive human connection.
* **Entry Animation:** The massive quote fades up with a slight Y translation (`30px`).
* **Scroll Animation:** The massive background portrait translates Y at a different speed than the text overlay, creating intense foreground/background separation.

### 3.5 Incentives Showcase
* **Visual Purpose:** Premium product display.
* **Entry Animation:** "INCENTIVES" heading reveals. The 3 products fade up simultaneously.
* **Hover Interactions:** None that affect layout.
* **Decorative Motion:** The products have a continuous `2px` floating animation on a sine wave (`4s` duration) to simulate levitation in 3D space beneath the spotlight.

### 3.6 Expectations Grid
* **Visual Purpose:** Structural reading.
* **Entry Animation:** The 4 columns stagger fade-up (Delay: `0s`, `0.1s`, `0.2s`, `0.3s`).
* **Hover Interactions:** The muted gray body text shifts to pure white on hover to draw intense reading focus.

### 3.7 Application Accordion
* **Visual Purpose:** Interactive instruction.
* **Scroll Animation:** The "BEFORE YOU APPLY" text locks to the screen using `position: sticky`.
* **Interaction:** Clicking a row expands the height (`height: 0` to `height: auto` over `0.5s` using standard easing). The chevron icon rotates 90 degrees.
* **Text Motion:** When a row is hovered or clicked, the gray title shifts to pure white over `0.2s`. Sub-text fades in with a `0.1s` delay to prevent visual tearing during expansion.

### 3.8 Contact Grid
* **Visual Purpose:** Humanizing the brand.
* **Entry Animation:** The 4 portraits stagger fade-up.
* **Hover Interactions:** Hovering a portrait container scales the image from `1.0` to `1.05` over `0.6s` within its strictly hidden overflow mask.

### 3.9 Sponsor Track
* **Visual Purpose:** Credibility.
* **Scroll Animation:** Logos fade in sequentially left-to-right as they enter the viewport.

### 3.10 Footer CTA
* **Visual Purpose:** Final dramatic challenge.
* **Entry Animation:** "REPRESENT ANTARAGNI?" text reveal mask.
* **Background Motion:** The intense red spotlight pulses opacity and slightly scales up and down (`scale 0.95` to `1.05`) over a slow `6s` loop, simulating a burning intensity.

---

## 4. TYPOGRAPHY ANIMATIONS

* **Hero & Section Headings:**
  * **Reveal Style:** Line Mask Reveal. The text is wrapped in an `overflow: hidden` div. It translates Y from `100%` to `0%` over `1.4s`.
  * **Timing/Stagger:** `0.1s` stagger between lines.
* **Subheadings & Body Text:**
  * **Reveal Style:** Simple Fade Up (`y: 20px` to `0`, opacity `0` to `1`). Faster execution (`0.8s`) to allow immediate reading.
* **Statistics:**
  * **Reveal Style:** Numeric interpolation (counting up).
* **Labels & Buttons:**
  * **Reveal Style:** Fade in alongside parent components.

---

## 5. CARD ANIMATIONS

* **Incentive Cards (3D Products):**
  * **Interaction:** Continuous levitation float.
  * **Layering behavior:** No CSS box-shadows. The motion relies entirely on moving the pre-rendered transparent PNGs.
* **Contact Portrait Cards:**
  * **Hover:** Internal image scale. Container bounds remain completely static to preserve the grid structure.

---

## 6. BUTTON INTERACTIONS

* **Default (Text Link):** Minimal typography, no background.
* **Hover:** A 1px red line draws instantly beneath the text from left to right (`0.3s`, ease-out). Or, text color shifts instantly to `#D92323`.
* **Press/Active:** Text scales down to `0.95` (`0.1s`) providing physical tactile feedback.
* **Premium Feel:** The absolute lack of heavy, pill-shaped backgrounds and the strict reliance on crisp, high-contrast typographic interactions makes the site feel engineered, bespoke, and expensive.

---

## 7. IMAGE ANIMATIONS

* **Image Reveal Strategy:** Do NOT use clip-path wipes, glitch effects, or messy CSS filters. Images should fade elegantly from black (`opacity 0` to `1`) accompanied by a slow internal scale (`scale 1.1` to `1.0` over `1.5s`).
* **Parallax Opportunities:** Apply subtle vertical parallax to the Hero Silhouette and the Testimonial background.
* **Depth Effects:** Achieved exclusively by moving the foreground crisp typography and the background atmospheric image at different scroll speeds.

---

## 8. SCROLL EXPERIENCE

**The User Journey Rhythm:**
1. **The Drop:** User lands. Screen is static, quiet. The massive hero text rises slowly from the shadows.
2. **The Descent:** User scrolls down. The silhouette moves slightly slower than the scroll, creating an immediate sensation of immense physical scale.
3. **The Pause:** User reaches Stats. The scrolling pauses mentally as the red numbers aggressively count up.
4. **The Anchor:** User reaches the Accordion. The left column locks tightly into place (`sticky`), creating a grounded visual anchor while the right side remains dynamic and interactive.
5. **The Flow:** The rhythm is characterized by long, fluid periods of vertical movement punctuated by heavy, sticky, or horizontal architectural anchors.

---

## 9. MICRO INTERACTIONS

* **Cursor Feedback:** (Awwwards Polish) Implement a custom dot cursor that scales up and uses `mix-blend-mode: exclusion` when hovering over the white typography or images.
* **Accordion Behavior:** The chevron arrow shifts exactly 8px to the right when hovered, creating an irresistible pull to click.
* **Section Transitions:** Approaching a new section triggers the 1px hairline divider to draw itself from the center outward, preparing the architectural grid before the text arrives.

---

## 10. ACCESSIBILITY

* **Reduced Motion Strategy:** Strictly respect the OS-level `prefers-reduced-motion: reduce` media query.
* **Motion Alternatives:** If enabled, disable ALL parallax, disable ALL Text Mask reveals, disable the Incentive 3D float. Replace all entry animations with a fast, simple `0.2s` opacity fade.
* **Performance Tradeoffs:** Parallax on massive background images can cause jank on low-end devices. Ensure all scroll tracking relies on `will-change: transform`.

---

## 11. FRAMER MOTION IMPLEMENTATION GUIDE

* **Text Reveal Masks:** **Excellent for Framer Motion**. Use `variants` and `staggerChildren` on a parent `<motion.div>` to sequence lines of text flawlessly.
* **Accordion Height:** **Excellent for Framer Motion**. `<AnimatePresence>` wrapping a `<motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>` handles DOM measurement automatically.
* **Stat Counting:** **Excellent for Framer Motion**. Use `useSpring` and `useTransform` tied to a `<motion.span>`.
* **Parallax:** **Possible in Framer Motion**. `useScroll` mapped via `useTransform` works perfectly for simple vertical parallax without needing GSAP ScrollTrigger.
* **Avoid:** Do not use Framer Motion to animate `mix-blend-mode`, `box-shadow`, or `filter: blur()`, as these force expensive browser repaints on every frame.

---

## 12. PERFORMANCE ANALYSIS

* **Safe:** Translating X/Y positions (`transform: translate`), opacity fades, `scale`. These are hardware-accelerated.
* **Moderate:** Masking (`overflow: hidden` text reveals), `height: auto` animations. Framer Motion handles this well, but it still triggers layout recalculations. Limit concurrent height animations.
* **Expensive:** Animating the `opacity` of the Volumetric Spotlights while they have `mix-blend-mode: screen` applied. This is highly expensive for the GPU. Optimize by using CSS radial gradients instead of image assets where possible.
* **Avoid:** Animating CSS `blur` filters on hover or scroll.

---

## 13. AWWWARDS POLISH PASS

To elevate the site to "Site of the Day" status, implement these non-intrusive polish layers:
* **Lenis Smooth Scrolling:** Absolutely essential. Native scroll makes parallax feel broken and stuttery. Lenis provides the buttery momentum required for a luxury feel.
* **Magnetic Buttons:** Apply subtle magnetic physics to the Navbar links and Footer CTA. When the cursor approaches within `20px`, the link subtly translates toward the cursor.
* **Grain Overlay:** Add a `fixed`, `pointer-events-none` div with an opacity `0.03` noise texture over the entire site. This prevents color banding in the deep black gradients and gives the screen an expensive, cinematic "film" texture.

---

## 14. FINAL MOTION BLUEPRINT

The animation language of Antaragni is built on heavy, unhurried, cinematic easing. Motion is not used to entertain; it is used to orchestrate user attention. By utilizing `cubic-bezier(0.16, 1, 0.3, 1)` for all major entrances, staggering microscopic typography against gargantuan serif masks, and relying entirely on GPU-accelerated `transform` and `opacity` properties, the frontend team can deliver a flawless 60fps luxury experience. The integration of Lenis smooth scrolling combined with Framer Motion's `useScroll` for subtle parallax ensures the site feels less like a standard web page and more like a high-end editorial film sequence.
