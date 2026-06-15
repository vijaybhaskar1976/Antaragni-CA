# Website Reconstruction Specification

## 1. WEBSITE OVERVIEW

**Overall Visual Identity**
The website presents an ultra-premium, dark-mode, editorial aesthetic reminiscent of high-end fashion campaigns, cinematic posters, or exclusive underground events. The design relies entirely on stark contrast—pure white and crimson red cutting through an abyss of deep black.

**First Impression**
The immediate impression is one of scale, drama, and exclusivity. The oversized typography and dramatic spotlighting command respect, forcing the user to slow down and absorb the atmosphere.

**Emotional Tone**
Mysterious, energetic, prestigious, and slightly rebellious. It feels like an invitation to something life-changing rather than a standard informational page.

**Visual Weight Distribution**
The layout utilizes aggressive asymmetry. Massive blocks of typography anchor the left side of the screen, creating an immense gravitational pull, which is counterbalanced on the right side by atmospheric photography heavily veiled in shadows and volumetric lighting.

**Premium Design Characteristics**
- **Vast Negative Space:** Elements are separated by massive gulfs of black space, preventing crowding and allowing components to breathe.
- **Micro-Typographic Precision:** Very small, widely tracked uppercase sans-serif text is used for labels, contrasting beautifully with the massive serif headings.
- **Hairline Dividers:** 1px dark gray lines are the only structural boundaries, keeping the UI entirely borderless, flat, and architectural.
- **Photographic Lighting:** Depth is not achieved through artificial CSS shadows, but through the actual lighting within the photography (spotlights, stage smoke) bleeding into the UI.

**Narrative Flow**
The page acts as a manifesto. It begins with a monumental title, moves into emotional quotes and immense statistics, showcases physical rewards (incentives), outlines rigorous expectations, walks through the application process step-by-step, introduces the team, displays corporate backing, and ends with a dramatic, personalized call to action.

---

## 2. PAGE STRUCTURE

From top to bottom, the page flows through the following structural blocks:

1. **Global Navigation (Navbar):** 
   - *Purpose:* Site routing.
   - *Relative Height:* Very small (approx 5vh).
   - *Visual Importance:* Lowest. It intentionally hides in the periphery.
   - *Transition:* Seamlessly blends into the black void of the Hero section.
2. **Hero Section ("ANTARAGNI"):**
   - *Purpose:* Brand establishment and immediate visual hook.
   - *Relative Height:* 100vh minimum.
   - *Visual Importance:* Absolute Highest.
   - *Transition:* Massive black void scrolling downwards into the next section.
3. **Manifesto Section ("SPIRIT OF ANTARAGNI"):**
   - *Purpose:* Emotional connection and context.
   - *Relative Height:* 80vh.
   - *Visual Importance:* High.
   - *Transition:* Hard stop against a 1px structural horizontal line.
4. **Statistics Bar:**
   - *Purpose:* Establish credibility through numbers.
   - *Relative Height:* 20vh.
   - *Visual Importance:* Medium.
   - *Transition:* Hard stop against a 1px structural horizontal line.
5. **Testimonial ("Antaragni didn't just..."):**
   - *Purpose:* Personal impact and human connection.
   - *Relative Height:* 90vh.
   - *Visual Importance:* High.
   - *Transition:* Massive black void.
6. **Incentives Showcase:**
   - *Purpose:* Display physical rewards.
   - *Relative Height:* 100vh.
   - *Visual Importance:* High.
   - *Transition:* Massive black void, capped by a subtle 1px line.
7. **Expectations Grid ("What We Expect"):**
   - *Purpose:* Outline the rigors of the program.
   - *Relative Height:* 50vh.
   - *Visual Importance:* Medium.
   - *Transition:* Massive black void.
8. **Application Accordion ("BEFORE YOU APPLY"):**
   - *Purpose:* Step-by-step guide.
   - *Relative Height:* 120vh.
   - *Visual Importance:* Highest interaction weight.
   - *Transition:* Massive black void.
9. **Contact Grid ("CONTACT US"):**
   - *Purpose:* Show the faces behind the organization.
   - *Relative Height:* 80vh.
   - *Visual Importance:* Medium.
   - *Transition:* 1px horizontal divider line.
10. **Sponsor Track ("OUR VALUED SUPPORTERS"):**
   - *Purpose:* Corporate credibility.
   - *Relative Height:* 40vh.
   - *Visual Importance:* Low.
   - *Transition:* Fade into darkness.
11. **Footer CTA ("REPRESENT ANTARAGNI?"):**
   - *Purpose:* Final challenge to the user.
   - *Relative Height:* 100vh.
   - *Visual Importance:* High (mirrors the Hero).

---

## 3. DETAILED SECTION RECONSTRUCTION

### 3.1. Global Navigation (Navbar)
#### Overall Layout
Spans 100% width, fixed to the top edge. Highly minimalist. Height is approximately 80px.
#### Content Placement
- **Left Edge:** Brand logo (a sharp, abstract red "A" triangle mark), left-aligned to the main grid.
- **Center/Right:** Five navigation links evenly spaced. "HOME", "ABOUT", "EVENTS", "INCENTIVES", "CONTACT US".
- **Far Right Edge:** A small red CTA text block aligned to the right edge of the grid.
#### Visual Hierarchy
Almost invisible initially. The logo is the most prominent element due to the striking red color against the black.
#### Spacing Relationships
Padding left and right is massive, aligning perfectly with the 1280px inner content grid.
#### Typography Placement
All links are microscopic (approx 12px), uppercase, wide-tracked sans-serif, rendered in a muted gray color.
#### Visual Depth
Floats on the very top layer of the Z-axis, but lacks any drop shadow, blending perfectly and flatly with the black background.

### 3.2. Hero Section
#### Overall Layout
Full viewport height. Two-column asymmetrical split on a 12-column grid. Left side (typography) spans 5 columns. Right side (imagery) spans 5 columns, offset by 2 empty center columns.
#### Content Placement
- **Heading:** "ANTARAGNI" in massive, vertically stretched, high-contrast serif type. Left-aligned.
- **Subheadings:** Below the main heading, stacked smaller text: "CAMPUS AMBASSADOR PROGRAM". Below that, two columns of tiny red metadata lines.
- **Imagery:** On the right, a full-body silhouette of a man standing facing away, illuminated from directly above and behind by a conical, volumetric stage spotlight cutting through textured smoke.
- **Decorative Edge:** Vertical text rotated 90 degrees reading "ANTARAGNI 24" running down the extreme right edge of the viewport in red.
#### Visual Hierarchy
1. The blinding white spotlight and black silhouette (highest contrast).
2. The massive "ANTARAGNI" text.
3. The tiny red metadata text.
#### Spacing Relationships
The main heading sits approximately 25vh down from the top edge. The silhouette is vertically centered within the viewport.
#### Typography Placement
Left-aligned, extremely tight line-height. The letters are so close they almost touch vertically.
#### Decorative Elements
The spotlight creates a conical radial gradient from pure white at the top center of the image area, fading softly to pure black at the edges, acting as an atmospheric mask.
#### Visual Depth
The silhouette feels physically closer to the user because the spotlight sits *behind* the figure, creating a profound sense of 3D atmospheric depth pushing out of the screen.

### 3.3. Manifesto Section ("SPIRIT OF ANTARAGNI")
#### Overall Layout
Takes up roughly 80vh. A reverse of the hero's asymmetry. Left side contains text spanning 4 columns. Right side contains a landscape image spanning 7 columns.
#### Content Placement
- **Heading:** "SPIRIT OF ANTARAGNI" stacked on two lines, left-aligned.
- **Body Text:** A small, 5-line paragraph of gray sans-serif text placed directly below the heading, sharing the same left alignment.
- **Imagery:** A horizontal, 16:9 cinematic shot of a concert crowd. Silhouettes of raised hands, smoke, and glaring stage lights rendered in high-contrast black and white.
#### Visual Hierarchy
The word "SPIRIT" draws the eye first due to size, followed instantly by the bright cluster of concert stage lights in the right-side photograph.
#### Spacing Relationships
The image is offset downwards relative to the text. The top edge of the image aligns horizontally with the bottom baseline of the heading, creating a staggered, interlocking visual rhythm.

### 3.4. Statistics Bar
#### Overall Layout
A horizontal band spanning 100% of the content width. Bounded rigidly by a 1px dark gray line on the absolute top and absolute bottom.
#### Content Placement
Five statistics arranged in a single horizontal flex row, spaced perfectly evenly across the entire container (`justify-content: space-between`).
- **Stat 1:** "100K+" (Red, large serif) stacked over "FOOTFALL" (Gray, tiny sans, uppercase).
- **Stat 2:** "50+" over "EVENTS".
- **Stat 3:** "3.5" over "PRIZE MONEY".
- **Stat 4:** "1" over "MISSION".
- **Stat 5:** An infinity symbol over "MEMORIES".
#### Visual Hierarchy
The red numeric values pop violently against the black canvas, reading like a continuous rhythmic pulse across the screen.
#### Spacing Relationships
Generous 64px padding exists above the numbers and below the labels, perfectly centering the content within the bounded 1px lines.
#### Typography Placement
Centered text alignment within each individual statistic block.

### 3.5. Testimonial Section
#### Overall Layout
A massive, immersive block taking over 100vh. A single, fullscreen background image heavily masked with a black gradient.
#### Content Placement
- **Imagery:** A huge, screen-spanning portrait of a person shot from behind/side profile, wearing a jacket with a glowing emblem on the back. The entire left half of the image fades seamlessly into pure #050505 black.
- **Text:** Floating completely untethered in the black void on the left side: "Antaragni didn't just change my college life. It changed the way I see myself." The text is massive, sentence-case, serif, and stacked over 6 lines.
#### Visual Hierarchy
The glowing stage lights in the deep background of the right-aligned portrait draw the eye first, which then traces left across the subject's silhouetted face, finally landing in the black void to read the white quote.
#### Spacing Relationships
The text block is vertically centered within the viewport, pushed far to the left margin.
#### Visual Depth
Deep field of view. The lights are miles away, the person is mid-ground, and the text floats on the glass of the user's screen.

### 3.6. Incentives Showcase
#### Overall Layout
A product showcase acting as a physical gallery. Centered main heading, with a 3-column product display directly beneath.
#### Content Placement
- **Heading:** "INCENTIVES" (massive, centered, serif text).
- **Products:** Three distinct dark objects (a boxed plaque on the left, a water bottle/cap combo in the center, a boxed pin/medal on the right). Each object physically rests on a dark, stone-like textured pedestal block.
- **Under Products:** Tiny red numeric labels (01, 02, 03) and microscopic gray descriptive text under each pedestal.
#### Visual Hierarchy
The heading establishes context, but the specular white highlights catching the edges of the dark physical objects are the absolute focal points.
#### Visual Depth
Intense physical depth. A central top-down spotlight illuminates the objects from above, casting realistic shadows downward onto the textured pedestals. There are no CSS boxes; the photographic lighting defines the boundaries.

### 3.7. Expectations Grid ("What We Expect")
#### Overall Layout
A 1px horizontal line separates the title block from a 4-column grid layout below it.
#### Content Placement
- **Left:** "What We Expect" in large serif text, sitting on the horizontal line.
- **Right:** Far right edge contains a diagonal, 1px red slash mark serving as a sharp decorative geometric element.
- **Below the Line:** A perfectly divided grid of 4 equal columns.
- **Inside Columns:** Each item has a red numeric prefix ("01" in tiny sans), followed by a white title ("Ideate" in medium serif), followed by a 3-line paragraph of gray sans-serif body text.
#### Spacing Relationships
The 4 columns have equal width, with about 32px of empty gutter space between them. Massive 64px padding exists between the top horizontal line and the column content.

### 3.8. Application Steps ("BEFORE YOU APPLY")
#### Overall Layout
This is the most complex UI component on the page. The left side acts as a massive sticky column, while the right side is an interactive, vertically expanding accordion list.
#### Content Placement
- **Left Column (Spans 4 cols):** A massive, glowing white background spotlight sits *behind* the text. The text "BEFORE YOU APPLY" is stacked on 3 lines in massive serif type. Below it is a small paragraph of gray text.
- **Right Column (Spans 8 cols):** A vertical list of 5 distinct rows.
  - **Row 01:** Contains "01" (massive serif), "APPLICATION" (massive serif), and a right-aligned tiny chevron arrow.
  - **Row 02:** Contains "02", "SELECTION", and a chevron.
  - **Row 03 (Expanded State in image):** Shows "03", "RESPONSIBILITIES". Below the title, the row splits into two sub-columns detailing the responsibilities in small gray text. A tiny red arrow acts as a bullet point.
  - **Rows 04 and 05:** "04 BENEFITS", "05 EVENTS" - following the collapsed pattern.
#### Visual Depth
The radial spotlight behind the left heading makes the dark text feel like it's projecting forward out of the screen, creating a halo effect.
#### Spacing Relationships
Each accordion row is separated by a 1px dark gray line. Inside each row, there is massive 48px top/bottom padding above and below the massive typography, making the clickable area huge.

### 3.9. Contact Grid ("CONTACT US")
#### Overall Layout
A 2-column split. The left side contains the title area, the right side contains a 2x2 grid of human portraits.
#### Content Placement
- **Left Column:** "CONTACT US" (stacked massive serif) with three tiny paragraphs of gray metadata (address/info) aligned below it. A tiny red horizontal dash anchors the bottom.
- **Right Column:** Four grayscale portrait photographs of the team. Each photo is cropped tightly (head and shoulders) and framed in an invisible square container.
- **Under Photos:** Below each photo is the person's name in white serif, and their organizational title in tiny red sans-serif.
#### Visual Hierarchy
The high-contrast, dramatically lit human faces draw immediate primal attention, pulling the eye instantly away from the large text on the left.
#### Imagery Placement
The portraits use cinematic "rembrandt" lighting—one side of the face is brightly lit, the other falls into deep shadow, perfectly matching the website's dark aesthetic.

### 3.10. Sponsor Track ("OUR VALUED SUPPORTERS")
#### Overall Layout
A centrally aligned section containing multiple horizontal rows of logos.
#### Content Placement
- **Title:** "OUR VALUED SUPPORTERS" (red, tiny, wide-tracked sans-serif, centered).
- **Logos:** Arranged in hierarchical tiers. Top tier (Co-Sponsor) has large logos (Larsen & Toubro, Hero). Middle tier has medium logos (SBI, Samsung). Bottom tier has many small logos (Coca-Cola, etc.).
- **Styling:** All logos have been stripped of brand colors and are strictly rendered in pure white or light gray against the black background.
#### Spacing Relationships
Significant vertical space (approx 48px) exists between the logo tiers to clearly delineate sponsor hierarchy.

### 3.11. Footer CTA
#### Overall Layout
A direct mirror of the hero section. Full width, center aligned, anchoring the bottom of the page.
#### Content Placement
- **Text:** "REPRESENT ANTARAGNI?" in massive, centered serif text.
- **Imagery:** A dark, pure black silhouette of a person standing, facing away from the camera.
- **Lighting:** The silhouette is illuminated from directly behind by a violent, blood-red volumetric spotlight that creates a halo around the figure and fades into the black edges.
- **Bottom Edge:** Tiny red and gray copyright text hugs the extreme bottom left and right corners.
#### Visual Depth
The red spotlight creates an intense, fiery backdrop that pushes the pitch-black silhouette into the extreme foreground, right against the user's screen.

---

## 4. USER SCROLL EXPERIENCE

1. **The Drop:** The user lands in a cinematic void. The massive "ANTARAGNI" text and the blinding spotlight command absolute silence and attention.
2. **The Hook:** Scrolling down, the contrast snaps back and forth between left-heavy text blocks and right-heavy imagery, dragging the user's eye in a rhythmic Z-pattern down the page.
3. **The Proof:** The statistics bar abruptly breaks the Z-pattern, offering hard numbers in a horizontal flow, acting as a mental palate cleanser and establishing immediate credibility.
4. **The Emotion:** The massive testimonial quote immerses the user completely in a fullscreen photograph, creating an intimate, emotional connection with the subject.
5. **The Reward:** The incentives section feels like walking into an exclusive luxury jewelry store—dark, with single beams of light hitting premium physical objects on pedestals.
6. **The Contract:** The "What We Expect" and "Before You Apply" sections purposely slow the user down. The massive accordion rows demand interaction. The UI shifts from a passive cinematic viewing experience to an active, structured reading experience.
7. **The Humans:** The contact grid grounds the abstract, monumental brand in real, high-contrast human faces.
8. **The Climax:** The footer brings back the silhouette motif from the top of the page, but this time bathed in an aggressive, challenging red light, asking the final question: "REPRESENT ANTARAGNI?". The emotional arc goes from anticipation -> inspiration -> instruction -> challenge.

---

## 5. SECTION TRANSITIONS

Transitions are entirely dictated by negative space and hairline dividers. There are absolutely no background color changes (the background remains strictly `#050505` throughout).
- **Soft Transitions:** Achieved by leaving massive gulfs (160px+) of pure black space between text blocks and images, allowing the content to breathe and fade into darkness.
- **Hard Transitions:** Achieved using full-width 1px `#262626` lines. These lines act like chapters in a book, forcing a mental reset (used prominently for the Stats Bar, Expectations Grid, and Accordion rows).
- **Lighting Transitions:** The volumetric spotlights in the images fade softly to black, acting as natural edge-blend masks between the photographic assets and the CSS background.

---

## 6. RESPONSIVE RECONSTRUCTION

### Desktop (1440px+)
- Operates on a strict 12-column grid.
- Utilizes massive asymmetrical layouts (e.g., Hero text left, silhouette right).
- Font sizes reach maximum peaks (up to 160px for headings).
- Accordion titles ("BEFORE YOU APPLY") sit horizontally adjacent to the accordion interactive list.

### Tablet (768px - 1024px)
- The 12-column grid collapses to an 8-column layout.
- Horizontal adjacencies (Left text, Right image) become significantly tighter but remain side-by-side where possible to maintain the Z-pattern.
- The 4-column "What We Expect" grid wraps into a 2x2 grid.
- Font sizes scale down linearly to prevent overlapping and awkward word breaks.

### Mobile (< 768px)
- Complete structural collapse to a strict 1-column layout.
- **Hero:** Text centers or left-aligns, filling the entire width. The silhouette moves *below* the text, or the text is overlaid directly *on top* of the spotlight glow.
- **Stats Bar:** Becomes a 2x2 grid, or a horizontally scrolling overflow row.
- **Accordions:** The sticky "BEFORE YOU APPLY" title block stacks directly above the accordion list.
- **Contact Grid:** Becomes a 1x4 vertical stack or a tight 2x2 grid.
- **Spacing:** The massive 160px vertical gaps reduce to 64px to maintain flow without stranding the mobile user in endless screens of black space.

---

## 7. DESIGN PRIORITIES

If compromises must be made during frontend development, these elements **MUST** be preserved at all costs:

1. **The Typography Contrast (Critical):** The specific pairing of the ultra-condensed, elegant display serif against the microscopic, wide-tracked sans-serif is the soul of the brand. If generic or mis-weighted fonts are used, the entire premium feel collapses into a standard template.
2. **The Pure Black Void (Critical):** The background must remain `#050505`. If it gets lighter (e.g., `#111` or `#222`), the stage lighting and spotlights in the images will lose their cinematic contrast and look like cheap, pasted PNGs.
3. **Volumetric Lighting Integrations (High):** The images of the silhouettes and products must blend seamlessly into the black background using soft gradient masks or `mix-blend-mode: screen`. Harsh edges on images will instantly destroy the illusion of physical, atmospheric space.
4. **Massive Negative Space (High):** Developers often want to tighten spacing to reduce scrolling. Do not. The 160px gaps are highly intentional; they create a feeling of luxury, silence, and scale.
5. **Hairline Dividers (Medium):** The 1px `#262626` lines provide the only architectural structure on the page. They must be perfectly thin, crisp, and low-contrast.

---

## 8. AI RECREATION SUMMARY

To an artificial intelligence tasked with recreating this exact visual interface purely from code without seeing the original image:

You are building an ultra-premium, brutalist editorial web experience for a collegiate cultural festival named "ANTARAGNI". The design language simulates a massive, dark, underground concert venue lit by dramatic stage spotlights. There are no UI cards, no drop shadows, no rounded corners, and no background color changes. The layout is a canvas of pure darkness.

**Color Palette:** The background canvas is absolute black (`#050505`). Structural divider lines are a very dark gray (`#262626`). Primary text is pure white (`#FFFFFF`). Secondary body text is a muted mid-gray (`#A3A3A3`). The accent color, used extremely sparingly for tiny numeric labels and intense atmospheric spotlights, is a deep crimson red (`#D92323`).

**Typographic Architecture (CRITICAL):** You must implement a binary typographic system. The primary headings require an ultra-tall, highly condensed, elegant display serif (similar to Ogg, Playfair Display Extra Condensed, or a custom editorial cut). These headings must be monumental in scale—up to 12vw on desktop—set in all caps with negative letter-spacing (`-0.02em`) and very tight line-height (`0.9`). They act as graphical monoliths, not just text. The secondary font is a highly utilitarian, grotesque sans-serif (like Inter or Helvetica Neue). It is used for body text at 16px, but more importantly, it is used for microscopic metadata labels at 10px-12px, set in all-caps with extreme tracking (`letter-spacing: 0.1em`). The extreme contrast between the gargantuan, tightly-packed serif and the microscopic, widely-spaced sans-serif defines the entire layout's tension.

**Layout and Grid:** Operate on a 1440px max-width container utilizing a 12-column CSS grid. The layout is aggressively asymmetrical. Do not center elements unless explicitly told to. Elements should aggressively hug the left or right edges of the 12-column grid. For example, in the Hero section, the massive "ANTARAGNI" heading occupies the left 5 columns, while a dark silhouette of a man lit by a top-down white volumetric spotlight occupies the right 5 columns. This alternating left-right visual weight distribution drives the scroll experience.

**Component Breakdown (Top to Bottom):**
1. **Hero:** Text block firmly left-aligned. On the right, a silhouette of a man facing away. A volumetric white spotlight originates behind the man's head, glowing outward and fading softly into the black background via a radial gradient or `mix-blend-mode: screen`.
2. **Manifesto:** "SPIRIT OF ANTARAGNI" serif heading on the left, an atmospheric black-and-white 16:9 photo of a concert crowd raising their hands on the right. Top edge of the image aligns with the bottom edge of the heading text.
3. **Stat Bar:** A full-width horizontal strip, bounded strictly top and bottom by 1px `#262626` lines. Inside, five statistics spaced equally using flex `space-between`. Numbers are massive, red, serif; labels below them are tiny, gray, uppercase sans-serif.
4. **Testimonial:** A fullscreen immersive image of a person from behind, looking toward distant stage lights on the right. The left side of the image fades perfectly into black. Massive white serif quote text is overlaid on this black void on the left side.
5. **Incentives:** A centered massive heading. Below, three dark physical objects (a plaque, a bottle, a box) sit on textured stone pedestals. They are lit from directly above by a white spotlight, casting realistic shadows downwards. There are no CSS bounding boxes; the image edges fade to black.
6. **Expectations Grid:** A 4-column row. A top 1px border. Each column contains a tiny red number (`01`), a white serif title, and gray sans-serif body text.
7. **Accordion ("BEFORE YOU APPLY"):** The architectural masterpiece of the page. Left 4 columns hold the sticky heading, illuminated from behind by a massive white radial background glow. The right 8 columns hold 5 interactive rows. Each row has a top 1px `#262626` border. Inside the row, a massive serif number (`01`) and massive serif title (`APPLICATION`), with a right-aligned chevron. When expanded, gray body text is revealed.
8. **Contact:** 2-column split. Left title, right 2x2 grid of grayscale portrait photography. Faces are lit with high-contrast cinematic lighting.
9. **Footer:** Centered serif heading "REPRESENT ANTARAGNI?". Below it, a black silhouette of a man standing in a violent, blood-red spotlight fading into the black background.

**Execution Rules:** Absolutely no drop shadows (`box-shadow: none`). Absolutely no rounded corners (`border-radius: 0` everywhere). Padding between major sections must be immense, ranging from 120px to 160px vertically. The design relies entirely on the interplay of stark typography, hairline borders, and hyper-realistic stage lighting gradients blending into a black void. Code the layout to feel heavy, slow, precise, expensive, and meticulously engineered.
