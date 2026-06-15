# Production Asset Manifest

This document is the absolute source of truth for all visual assets required to develop the Antaragni cultural festival website. Developers and AI coding tools must strictly adhere to this list. No generic placeholders, random illustrations, or unapproved stock photos are permitted.

---

## 1. LOGOS & BRAND ASSETS

### Antaragni Monogram
* **Purpose:** Primary brand identifier in the top-left Navbar.
* **Preferred Format:** SVG (Must support currentColor fill for hover states).
* **Required Sizes:** Scalable vector (renders at ~32x32px).
* **Transparent Background Required:** Yes.
* **Priority:** Required.
* **Notes:** Clean, single-color path.

### Antaragni Deer Emblem
* **Purpose:** Visible on the back of the jacket in the Testimonial photo. (Note: This is baked into the photography, but the raw vector may be needed for brand continuity).
* **Preferred Format:** SVG.
* **Priority:** Optional (Primarily exists inside the photograph).

### Sponsor Logos (Title Sponsors)
* **Purpose:** "OUR VALUED SUPPORTERS" section.
* **Assets Needed:** Larsen & Toubro, Hero MotoCorp.
* **Preferred Format:** SVG or transparent PNG.
* **Required Sizes:** 200px width.
* **Transparent Background Required:** Yes.
* **Priority:** Required.
* **Notes:** Must be pure white or easily filterable to pure white.

### Sponsor Logos (Associate Sponsors)
* **Purpose:** "OUR VALUED SUPPORTERS" section.
* **Assets Needed:** SBI, Samsung, Hyundai.
* **Preferred Format:** SVG or transparent PNG.
* **Required Sizes:** 150px width.
* **Transparent Background Required:** Yes.
* **Priority:** Required.

### Sponsor Logos (Partners)
* **Purpose:** Bottom sponsor track.
* **Assets Needed:** Coca-Cola, Spotify, Amul, Jio, Swiggy, etc.
* **Preferred Format:** SVG.
* **Required Sizes:** 100px width.
* **Transparent Background Required:** Yes.
* **Priority:** Required.

---

## 2. ICONS

*Do NOT use random emojis or thick, rounded icon sets. All icons must be sharp, 1px or 1.5px stroke, and angular.*

### Accordion Chevron
* **Usage Location:** Application Section (Accordion rows).
* **Style:** Outline, 1.5px stroke, sharp corners.
* **Recommended Library:** Lucide (`ChevronDown`, `ChevronRight`) or custom SVG.
* **Priority:** Required.

### Mobile Menu Hamburger / Close
* **Usage Location:** Navbar (Mobile breakpoint).
* **Style:** Outline, simple straight lines (e.g., 2 or 3 lines).
* **Recommended Library:** Custom SVG or Lucide (`Menu`, `X`).
* **Priority:** Required.

---

## 3. PHOTOGRAPHY

### Hero Silhouette
* **Section:** Hero.
* **Purpose:** Establish massive scale and cinematic tension.
* **Subject Matter:** Silhouette of a person standing, facing away or completely back-lit by a stage light.
* **Orientation:** Portrait (roughly 3:4 or 4:5).
* **Estimated Dimensions:** 1200x1600px minimum.
* **Visual Mood:** High contrast, deep blacks, zero distracting background elements.
* **Color Characteristics:** Monochromatic / Black and White.
* **Priority:** Required.

### Concert Crowd
* **Section:** Manifesto ("SPIRIT OF ANTARAGNI").
* **Purpose:** Visualize the energy of the festival.
* **Subject Matter:** A massive crowd with a single hand raised in the foreground, illuminated by stage smoke.
* **Orientation:** Landscape (16:9).
* **Estimated Dimensions:** 1920x1080px minimum.
* **Visual Mood:** Epic, smoky, high-energy but dark.
* **Color Characteristics:** Grayscale with extreme contrast.
* **Priority:** Required.

### Testimonial Portrait
* **Section:** Testimonial / Quote.
* **Purpose:** Personal connection.
* **Subject Matter:** A young man with curly hair looking to the right, wearing a dark jacket with the Antaragni emblem on the back.
* **Orientation:** Landscape / Panoramic.
* **Estimated Dimensions:** 2560x1440px minimum.
* **Visual Mood:** Moody, dramatic side-lighting (chiaroscuro).
* **Color Characteristics:** Desaturated, warm dark tones.
* **Priority:** Required.

### Team Portraits (x4)
* **Section:** Contact Us.
* **Purpose:** Highlight team members.
* **Subject Matter:** Four distinct portraits of individuals (2 male, 2 female). High contrast, side-lit, serious expressions.
* **Orientation:** Portrait (4:5).
* **Estimated Dimensions:** 800x1000px.
* **Visual Mood:** Editorial fashion portraiture.
* **Color Characteristics:** Strict Grayscale.
* **Priority:** Required.

### Footer Silhouette
* **Section:** Footer CTA.
* **Purpose:** Final dramatic challenge.
* **Subject Matter:** Silhouette of a person standing, illuminated from behind by a violent red light.
* **Orientation:** Portrait.
* **Estimated Dimensions:** 1000x1500px.
* **Visual Mood:** Intense, aggressive, cinematic.
* **Color Characteristics:** Deep blacks and `#D92323` red.
* **Priority:** Required.

---

## 4. ILLUSTRATIONS / 3D RENDERS

### Incentive Products
* **Section:** Incentives.
* **Purpose:** Showcase the physical rewards of the Campus Ambassador program.
* **Illustration Style:** Photorealistic 3D Renders. Extremely high quality, metallic reflections, dark matte textures.
* **Vector or Raster:** Raster (High-res WebP/PNG).
* **Priority:** Required.
* **Assets Needed:**
  1. Acrylic/Glass Plaque with gold typography and a pedestal.
  2. ID Card with red lanyard.
  3. Matte black metallic water bottle and cap.
  4. Premium black box with gold foil emblem.
* **CRITICAL:** These MUST have transparent backgrounds. No baked-in bounding boxes or background colors. The shadows should ideally be transparent alpha channels to blend seamlessly with the `#050505` website background.

---

## 5. BACKGROUND ASSETS

### Cinematic Film Grain
* **Purpose:** Eliminate color banding in the deep black backgrounds and provide a tactile, expensive feel.
* **Format:** Seamless PNG or WEBP (transparent noise pattern).
* **Priority:** Recommended (Awwwards polish).

### Volumetric Spotlights (Alternative to CSS)
* **Purpose:** The glowing stage lights behind the silhouettes.
* **Format:** CSS `radial-gradient` is preferred for performance. If CSS fails to replicate the softness, fallback to massive transparent WebP images.
* **Priority:** Optional (Try CSS first).

---

## 6. DECORATIVE GRAPHICS

* **Floating Shapes:** None. Do not add generic geometric shapes.
* **Accent Lines:** Handled via CSS (`border` or `<hr>` tags). No image assets required.
* **Glows:** Handled via CSS `box-shadow` or `radial-gradient`. No image assets required.

---

## 7. MOTION ASSETS

### Custom Cursor
* **Purpose:** Awwwards-level interactive polish.
* **Format:** Handled via CSS and JS (a `div` tracking the mouse). No image asset needed, unless using a highly specific SVG shape.
* **Priority:** Recommended.

---

## 8. SECTION-BY-SECTION ASSET REQUIREMENTS

| Section Name | Required Assets | Recommended Assets | Optional Assets | Developer Blocking? |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar** | Monogram Logo (SVG), Menu Icon (SVG) | None | None | **Yes** |
| **Hero** | Hero Silhouette Photo | CSS Spotlight | None | **Yes** |
| **Manifesto** | Crowd Photo | None | None | **Yes** |
| **Stats** | None (Typography only) | None | None | No |
| **Testimonial** | Jacket Portrait Photo | None | None | **Yes** |
| **Incentives** | 4x 3D Product Renders (Transparent WebP) | Base pedestals | None | **Yes** |
| **Expectations** | None (Typography only) | None | None | No |
| **Application** | Chevron Icons (SVG) | None | None | **Yes** |
| **Contact Us** | 4x Grayscale Portrait Photos | None | None | **Yes** |
| **Sponsors** | 10+ Sponsor Logos (SVG/White PNG) | None | None | **Yes** |
| **Footer CTA** | Footer Red Silhouette Photo | None | None | **Yes** |

---

## 9. ASSET SOURCING STRATEGY

* **Logos (Brand & Sponsors):** **Provided by Client.** Do not generate with AI. Must be accurate vector files.
* **Icons:** **Downloaded from Library.** Use Lucide React for crisp, consistent SVGs. Do not design custom icons unless necessary.
* **Photography (Silhouettes & Crowd):** **Photographed or High-End Stock.** Can be sourced from premium stock (e.g., Unsplash/Stocksy) if heavily edited to match the high-contrast grayscale grading.
* **Photography (Portraits):** **Photographed.** Must be real team members shot in a controlled studio environment with cinematic side-lighting.
* **Incentives (3D Renders):** **Designed in 3D Software (Blender/Cinema4D).** Do not use 2D illustrations or AI. AI struggles with exact typography on physical objects and precise alpha-channel shadows. These must be deliberately crafted 3D renders of the actual physical rewards.
* **Background Noise:** **Generated or Downloaded.** A standard 512x512 seamless noise texture is sufficient.

---

## 10. ASSET PRIORITY MATRIX

### REQUIRED BEFORE DEVELOPMENT (Blockers)
1. Monogram Logo (SVG)
2. All Typography files (Fonts)
3. 4x 3D Incentive Renders (Transparent WebP)
4. Hero Silhouette Image
5. Footer Red Silhouette Image
6. Sponsor Logos (at least a handful to test the grid)

### REQUIRED BEFORE POLISH
7. Exact Team Member Portraits
8. Exact Testimonial Background Image
9. Crowd Image

### OPTIONAL ENHANCEMENTS
10. Film Grain texture overlay
11. Pre-rendered WebP spotlights (if CSS proves too heavy)

---

## 11. RECOMMENDED FOLDER STRUCTURE

All assets should be placed in the `public` directory of the Next.js application.

```text
public/
├── fonts/
│   ├── Ogg-Regular.woff2          # Or exact brand serif
│   ├── Inter-Regular.woff2        # Or exact brand sans-serif
│   └── Inter-Medium.woff2
├── images/
│   ├── hero-silhouette.webp
│   ├── footer-silhouette.webp
│   ├── manifesto-crowd.webp
│   └── testimonial-bg.webp
├── portraits/
│   ├── team-member-1.webp
│   ├── team-member-2.webp
│   ├── team-member-3.webp
│   └── team-member-4.webp
├── products/
│   ├── incentive-plaque.webp      # Must be transparent
│   ├── incentive-id-card.webp     # Must be transparent
│   ├── incentive-bottle.webp      # Must be transparent
│   └── incentive-box.webp         # Must be transparent
├── logos/
│   ├── antaragni-monogram.svg
│   └── sponsors/
│       ├── larsen-toubro.svg
│       ├── sbi.svg
│       └── ...
└── textures/
    └── cinematic-noise.png
```
**Naming Convention:** Kebab-case, entirely lowercase. Always specify the file type correctly.

---

## 12. MISSING ASSET ANALYSIS

**Likely Missing / Needs Immediate Action:**
* **3D Incentive Renders:** These are highly specific and bespoke to this event. They cannot be faked with stock imagery. A 3D artist must create these immediately, ensuring transparent backgrounds and alpha-channel shadows. This is the biggest risk to the timeline.
* **Studio Portraits:** The strict lighting requirement (grayscale, side-lit) means casual smartphone photos will destroy the premium aesthetic. A photoshoot must be scheduled.
* **Fonts:** The exact serif font (e.g., Ogg, Playfair Display) must be licensed and provided as WOFF2 files.

---

## 13. DEVELOPER HANDOFF CHECKLIST

Before a single line of React code is written, the Lead Developer must verify:
- [ ] Brand Monogram SVG is in `public/logos`.
- [ ] Custom Font files (.woff2) are in `public/fonts` and loaded successfully in CSS.
- [ ] All 4 Incentive Product images are received as WebP/PNG with **verified transparent backgrounds**.
- [ ] At least 5 high-res, high-contrast structural images (Hero, Footer, Crowd, etc.) are available for layout testing.
- [ ] A folder of pure white/SVG sponsor logos is ready for the scrolling marquee/grid.
- [ ] `lucide-react` (or similar) is installed for the minimal UI icons.

---

## 14. FINAL DELIVERABLE

The Antaragni frontend relies heavily on large-scale, cinematic imagery to offset the massive typography. The design cannot survive placeholder assets. The most critical dependencies are the **3D transparent renders of the incentive products** and the **high-contrast silhouette photography**. Developers should use the exact folder structure outlined above and ensure all images are compressed to `.webp` format prior to deployment to maintain the 60fps performance required by the animation specification.
