# Restaurant Website Build — Autonomous Instructions

You are building a premium restaurant website. All input materials are in the `input/` folder. Read everything there before writing any code.

## CRITICAL DESIGN PRINCIPLES

**This is NOT a generic website.** Every restaurant site you build must feel like a $10,000 custom build, not a template. Follow these rules:

1. **Extract the palette from their photos.** Look at the interior/food photos. What are the dominant colors? Wood tones → warm ambers/browns. Neon signs → vibrant accents. White tablecloths → clean minimalism. The site should feel like walking into the restaurant.

2. **Typography creates personality.** Bold condensed fonts (Oswald, Bebas Neue) = street food, casual. Elegant serifs (Playfair Display, Cormorant) = upscale dining. Modern sans (Montserrat, Inter) = trendy/fusion. Warm rounded (Lora, DM Sans) = cafe/bakery. Pick based on their vibe, not defaults.

3. **The hero section sells the experience.** Use their best interior or food photo. Full-bleed. Dark overlay for text contrast. The first 3 seconds should make someone want to eat there. Never use a plain colored background as the hero. **Image quality matters:** Pick the highest-resolution photo available. If no photo is large enough to look sharp at full-viewport (aim for 1400px+ wide), use a stronger gradient overlay (`from-black/80 via-black/50 to-black`) to compensate — never apply a blur filter to mask low resolution.

4. **Animations must be tasteful.** Smooth fade-ins on scroll, subtle hover effects on menu items. No bouncing, no spinning, no flashy transitions. Use Framer Motion with `easeOut` curves and 0.3-0.6s durations.

5. **Dark themes dominate restaurant sites.** Unless the brief explicitly says "bright/airy" or the archetype calls for light, default to dark backgrounds. Food photography pops against dark. It feels more atmospheric and premium.

---

## RESTAURANT ARCHETYPE SYSTEM

**Before writing any code, classify the restaurant into one of these archetypes.** The archetype drives layout, menu style, section order, typography, and overall feel. The brief may explicitly specify one, or you infer it from the vibe keywords, cuisine type, and photos.

### Archetype 1: NEIGHBORHOOD BAR / DIVE
**When:** Casual bar, pub, dive, live music venue, sports bar
**Feel:** Bold, loose, personality-forward. Grungy textures, saturated accent colors, maximalist energy.
**Layout:** Full-width sections, bold section headers, informal spacing
**Menu style:** Simple scrolling list with category tabs. No fuss, no cards — just item name, description, and price in a clean row layout. Drinks can be a multi-column list.
**Hero:** Interior shot with character (murals, neon, crowd). Big bold name. Punchy tagline.
**Typography:** Condensed sans-serif display (Bebas Neue, Oswald, Barlow Condensed) + clean body (Inter, Work Sans)
**Color:** Dark base + 2-3 vibrant accents pulled from interior (neon, paint, signage)
**Section order:** Hero → Specials (if any) → Menu → Reviews → Gallery → Location
**Design inspiration:** Look at Death & Company, The Spotted Pig, Double Chicken Please — sites that feel like the bar itself, not a corporate page.

### Archetype 2: UPSCALE / FINE DINING
**When:** White tablecloth, prix fixe, tasting menu, date night, chef-driven
**Feel:** Restrained elegance. Let the food photography and whitespace do the talking. Every pixel is intentional.
**Layout:** Centered, narrow content width (max-w-3xl for text), generous vertical spacing (py-32), editorial feel
**Menu style:** Single centered column. Each item is its own moment — name in display font, description beneath in italic body, price right-aligned. Separated by subtle lines or spacing. NO grid, NO cards.
**Hero:** Macro food shot or beautifully lit table setting. Minimal text — just the name and maybe one line. Subtle entrance animation.
**Typography:** Elegant serif display (Playfair Display, Cormorant Garamond, EB Garamond) + refined body (Lato, Source Sans)
**Color:** Near-black background (#0a0a0a) with cream/gold/warm white accents. One muted accent at most.
**Section order:** Hero → About/Story → Menu → Reviews → Gallery → Location
**Design inspiration:** Look at Eleven Madison Park, Le Bernardin, Alinea, Noma — sparse, photo-driven, editorial layouts.

### Archetype 3: FAST CASUAL / COUNTER SERVICE
**When:** Order-at-counter, build-your-own, takeout-heavy, bowls/tacos/pizza
**Feel:** Energetic, efficient, friendly. The menu IS the product — make it front and center. Ordering should be obvious.
**Layout:** Menu-forward design. Big visual hero that immediately communicates what they serve. Tight sections, no wasted space.
**Menu style:** Visual card grid. Each item gets a card with name, description, price, and prominent "Order" or "Add" CTA. If they have food photos, use them in cards. Category filters as horizontal pills.
**Hero:** Food action shot (being assembled, held, close-up). Big ordering CTA. Possibly split-hero with image + text side-by-side.
**Typography:** Friendly, approachable sans (Nunito, Poppins, DM Sans, Plus Jakarta Sans) — rounded or geometric. Bold weights for energy.
**Color:** Can go bright/bold (lime, orange, red) or clean modern (white bg with one punchy accent). Match the brand energy.
**Section order:** Hero → Menu (with ordering) → Specials → Reviews → Location
**Design inspiration:** Look at sweetgreen, CAVA, &pizza, Shake Shack — clean, fast, menu-first.

### Archetype 4: COCKTAIL BAR / LOUNGE
**When:** Cocktail-focused, speakeasy, wine bar, mixology, nightlife, moody
**Feel:** Dark, seductive, atmospheric. Drinks are the star. The site should feel like ambient lighting and a good playlist.
**Layout:** Immersive. Sections flow into each other with gradient transitions rather than hard breaks. Full-bleed images between content sections.
**Menu style:** Drinks menu is the star — two-column layout with cocktail name in display font + ingredients beneath in small text. Food menu secondary, can be simpler list. Group by spirit type or flavor profile, not just "cocktails."
**Hero:** Bar shot with bottles/drinks in moody lighting. Minimal text. Maybe an animated pour or shimmer effect.
**Typography:** Mix of display and elegant — (Cormorant + Inter) or (Playfair + Montserrat). Cocktail names should feel like titles.
**Color:** Deep dark base (#0a0a0a to #121212) with warm amber/gold or jewel-tone accents (emerald, burgundy, copper)
**Section order:** Hero → Specials → Drinks Menu → Food Menu → Reviews → Gallery → Location
**Design inspiration:** Look at Death & Co (the book/site), Employees Only, Dante NYC, Attaboy — sites that create a mood, not just list drinks.

### Archetype 5: CAFE / BAKERY / BRUNCH SPOT
**When:** Coffee shop, bakery, brunch, pastries, daytime-focused, cozy
**Feel:** Warm, inviting, light. This is one of the FEW times a light theme works. Think morning light through big windows.
**Layout:** Warm and open. Rounded corners on everything. Soft shadows instead of hard borders. Photos interspersed with content, not in a separate gallery.
**Menu style:** Clean list with soft, rounded cards. Pastel or warm accent backgrounds on cards. Categories as friendly tabs (not aggressive pills).
**Hero:** Counter/pastry display or a beautiful latte being poured. Warm tones. Inviting, not dramatic.
**Typography:** Warm serif (Lora, Merriweather) or soft rounded sans (DM Sans, Quicksand, Nunito) — cozy and approachable
**Color:** Cream/warm white base (#faf8f5 to #f5f0eb) with warm accents (terracotta, sage green, dusty rose, warm brown)
**Section order:** Hero → Menu → About/Story → Reviews → Gallery → Location
**Design inspiration:** Look at Blue Bottle Coffee, Tartine Bakery, Levain — sites that feel like a warm hug.

### Archetype 6: FAMILY / ETHNIC / TRADITION-FOCUSED
**When:** Sushi, ramen, Thai, Mexican, Indian, BBQ, soul food — places where cuisine heritage is central
**Feel:** The culture IS the brand. The site should reflect the cuisine's visual traditions — not in a stereotypical way, but authentically.
**Layout:** Rich and layered. Can use subtle texture backgrounds (paper texture, wood grain) that reference the cuisine. Generous food photography.
**Menu style:** Grouped by course/tradition as the restaurant does it. Sushi: organized by nigiri/roll/sashimi. Mexican: by tacos/burritos/platos. Show sub-descriptions for unfamiliar ingredients. Tags (spicy, raw, vegetarian) are especially important here.
**Hero:** Signature dish or the act of cooking/preparing. Atmospheric and warm.
**Typography:** Varies by cuisine — elegant serif for Japanese (Cormorant), bold and rustic for BBQ (Oswald), modern for fusion (Montserrat)
**Color:** Pulled from the cuisine's natural palette — warm reds/blacks for Japanese, earthy greens/terracotta for Mexican, warm golds for Indian
**Section order:** Hero → About/Story (the tradition) → Menu → Specials → Reviews → Gallery → Location
**Design inspiration:** Look at Uchi, Momofuku, Xi'an Famous Foods, Franklin BBQ — sites that honor their food culture.

---

## BUILD SEQUENCE

Execute these steps in order. Do not skip steps. Do not ask for confirmation between steps — work autonomously from start to finish.

### Step 0: Read All Inputs & Research
- Read `input/BRIEF.md` for restaurant details
- Read/view all photos in `input/photos/` to understand the aesthetic
- Read/view menu images in `input/menu/` and extract every item, price, and description
- If `input/menu/menu.txt` exists, use that as the primary menu source
- Note any specials (AYCE, happy hour, brunch, etc.)
- **Classify the restaurant archetype** from the brief's vibe, cuisine type, and photos
- **Research real sites for inspiration.** Web search for 2-3 real restaurant websites in the same archetype. Note specific layout patterns, typography choices, and section structures that work well. Adapt ideas — don't copy.
- If the restaurant has an existing website or active social media, look at it for additional brand context

### Step 1: Scaffold
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
npm install framer-motion lucide-react
```
- If directory name has capitals, create in a temp dir and copy files in
- Copy all photos from `input/photos/` to `public/images/`
- Delete all default Next.js boilerplate content from page.tsx

### Step 2: Design System (globals.css + layout.tsx)
Based on the archetype, brief's vibe, and photos:
- Define custom colors in `@theme inline` block (Tailwind v4 CSS-based config)
- Pick a Google Font pairing appropriate to the archetype (1 display/heading + 1 body)
- Set background and surface colors per archetype (dark, light, or warm)
- Add smooth scroll, custom scrollbar-hide utility
- Define spacing scale if the archetype calls for generous whitespace

### Step 3: Menu Data (src/data/menu.ts)

**If `input/menu/menu-verified.json` exists:** Use it directly. The human has already verified this data. Parse it into the TypeScript structure.

**If only menu images exist:** Extract the data yourself, but follow these guardrails:
- Type definitions: `MenuItem { name, description?, price, tags? }`
- Extract EVERY item from the menu images — do not skip items
- Read the **highest resolution** menu image available (prefer filenames with "highquality" or the largest file)
- Double-check EVERY price. If a price is unclear, flag it with a `// VERIFY` comment rather than guessing
- No price should be $0.00 unless the menu explicitly shows it as free/included
- Group into categories as they appear on the physical menu
- Add tags: `spicy`, `raw`, `vegetarian`, `new`, `popular`
- Include restaurant info: address, phone, hours, social links
- If there are specials (AYCE, happy hour), create a separate data structure for them
- **Include reviews data** from the brief — export as `reviews` array with `{ author, rating, text, source, date? }`
- After generating, suggest the user run `/menu-verify` to cross-check

### Step 4: Build Components (src/components/)
Build all components. Each is a separate file. All client components use `"use client"`.

**The components you build and HOW you build them depend on the archetype.** Do NOT use the same layout for every restaurant. Refer to the archetype section above for menu style, layout, and design direction.

**Required components for every site:**
1. `Navbar.tsx` — Sticky, transparent-to-solid on scroll. Logo + section links + CTA buttons (Order/Reserve as appropriate). Mobile hamburger with slide drawer.
2. `Hero.tsx` — Full-viewport, best photo as background, gradient overlay, restaurant name + tagline, CTA buttons. **Style per archetype** — a dive bar hero is bold and loud; a fine dining hero is minimal and restrained; a cafe hero is warm and bright.
3. `Menu.tsx` — **CRITICAL: Style varies by archetype.** See archetype section. Do NOT default to tabbed grid cards for every restaurant. Options include:
   - Simple scrolling list (bar/dive)
   - Centered single-column editorial (fine dining)
   - Visual card grid with images (fast casual)
   - Two-column drink-focused layout (cocktail bar)
   - Soft rounded cards on light background (cafe)
   - Course-grouped with ingredient tags (ethnic/tradition)
4. `Reviews.tsx` — **Required for every site.** Display real customer reviews from the brief. Design options (pick what fits the archetype):
   - Rotating single-review spotlight with large quote typography (fine dining, cocktail bar)
   - Card grid/masonry of 3-6 reviews (casual, fast casual)
   - Horizontal scroll of review cards (bar, cafe)
   - Full-width alternating testimonial blocks (tradition-focused)
   - Each review shows: star rating (visual stars), reviewer first name + last initial, quote excerpt, source badge (Google/Yelp/etc)
   - If no reviews are provided in the brief, use a "What people are saying" section with a prompt to leave a review and links to their Google/Yelp pages
5. `Gallery.tsx` — Photo showcase. Style options:
   - Horizontal scroll with hover captions (default)
   - Masonry grid (more photos available)
   - Full-bleed alternating with content (editorial/fine dining)
   - Scattered/overlapping polaroid style (cafe/casual)
6. `Location.tsx` — Google Maps embed, full hours table, address with "Get Directions" link, phone (clickable), dynamic Open/Closed status.
7. `Footer.tsx` — Branding, quick links, address, phone, social links, consumer advisory if applicable.

**Conditional components (build based on brief):**

About/Story section (if the brief includes story/history or if archetype recommends it):
- `About.tsx` — The restaurant's origin story, mission, or chef background. Can include a photo of the team/owner/interior. Especially valuable for fine dining, tradition-focused, and neighborhood spots with personality.

Specials section (if the restaurant has specials like AYCE, happy hour, etc.):
- Build a dedicated explainer section with pricing cards and rules
- Make it visually distinct (gradient background, accent colors)

**Ordering system (choose based on BRIEF.md):**

If built-in ordering:
- `OrderContext.tsx` — Cart state provider (items, quantities, total)
- `CartSidebar.tsx` — Slide-in cart with item management, subtotal, checkout
- `src/app/api/order/route.ts` — Mock endpoint with Stripe integration comments
- Add "+" buttons to menu items, cart icon in navbar with badge

If redirect ordering:
- Add an "Order Online" button in navbar and hero that opens the external URL in a new tab
- No cart system needed

**Reservation system (choose based on BRIEF.md):**

If built-in reservations:
- `ReservationModal.tsx` — Date, time slots, party size, name, phone, email, special requests
- `src/app/api/reservation/route.ts` — Mock endpoint with OpenTable integration comments
- Trigger from navbar "Reserve" button

If redirect reservations:
- "Reserve" button opens external URL in new tab

**Always include:**
- `FeedbackButton.tsx` — Floating button, bottom-right
- `FeedbackModal.tsx` — Star ratings (Food, Service, Atmosphere) + comment
- `src/app/api/feedback/route.ts` — In-memory store, console.warn for low ratings

### Step 5: Assemble Page (src/app/page.tsx)
- Import and compose all components
- Wrap in OrderProvider if built-in ordering
- **Section order follows the archetype.** Do NOT use the same order for every restaurant. Refer to the archetype's recommended section order.
- Ensure transitions between sections feel intentional — consistent spacing, optional gradient blends between sections for moody archetypes

### Step 6: Build & Verify
```bash
npm run build
```
- Fix any TypeScript errors
- Fix any build warnings
- Ensure all routes compile

### Step 7: Start Dev Server & Self-Check
```bash
npm run dev
```
Verify:
- All images load
- Menu data matches physical menu (spot-check 5 random items)
- All nav links scroll correctly
- Reviews section displays correctly with proper attribution
- Feedback modal opens and submits
- Ordering/reservation flows work
- Open/Closed status displays correctly
- Mobile responsive (no horizontal overflow)
- **The site feels different from your last build** — if it looks like the same site with different colors, you haven't followed the archetype system

Report: "Site is ready for review at http://localhost:[port]"

---

## API ROUTE PATTERNS

### Feedback (always in-memory, ready for DB swap)
```typescript
// In-memory for dev. Replace saveFeedback() body with:
// await db.collection('feedback').insertOne(entry);
const store: Entry[] = [];
async function saveFeedback(entry: Entry) { store.push(entry); }
```

### Orders (mock, Stripe-ready)
```typescript
// TODO: Stripe integration
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// Create checkout session with line_items from cart
```

### Reservations (mock, OpenTable-ready)
```typescript
// TODO: OpenTable integration
// POST https://platform.opentable.com/v1/reservations
// Or: Email notification via Resend/SendGrid
// import { Resend } from 'resend';
// await resend.emails.send({ to: MANAGER_EMAIL, subject: 'New Reservation', ... });
```

---

## COMMON MISTAKES TO AVOID
- Using the same tabbed grid card menu for every restaurant type
- Using the same section order for every site (follow the archetype)
- Using `ease` as a string in Framer Motion variants (use `"easeOut" as const`)
- Forgetting `"use client"` on components with hooks/state
- Writing to filesystem in API routes (breaks on Vercel — use in-memory)
- Not optimizing images (always use Next.js `<Image>` with `fill` + `sizes`)
- Generic white/light backgrounds when a dark theme fits better (but DO use light for cafes/bakeries)
- Placeholder text anywhere in the final build
- Missing `tel:` links on phone numbers
- Missing Google Maps directions link
- Skipping the consumer advisory for raw fish restaurants
- Omitting the reviews section — social proof is non-negotiable
- Building two restaurants that look identical except for colors and content
