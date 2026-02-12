# Restaurant Website Factory — Playbook

## The Business Model
You deliver a premium, fully functional restaurant website in under 24 hours. The client provides photos and a menu. You deliver a live site on their custom domain with to-go ordering, reservations, reviews, and a feedback loop. No templates. No generic AI look. Every site feels bespoke because the build adapts to the restaurant's archetype.

---

## Your Workflow (Human Steps)

### Step 1: Client Intake (15 min)
Collect from the restaurant owner/manager:
- [ ] **Restaurant name** and tagline (if any)
- [ ] **Address** and **phone number**
- [ ] **Hours of operation** (per day)
- [ ] **Menu** — photo of physical menu (front + back) OR a PDF/text version
- [ ] **5-10 photos** — interior, exterior, food, drinks, bar area. Tell them: "Send me your best photos. No stock images. If you have a photographer friend, use them. iPhone shots in good lighting work great."
- [ ] **Vibe keywords** — Ask: "If someone walks through your door, what 3 words describe the feeling?" (e.g., "warm, lively, upscale casual")
- [ ] **Restaurant type** — Ask: "Which of these best describes your spot?" Bar/dive, fine dining, fast casual, cocktail lounge, cafe/bakery, or tradition-focused (sushi, BBQ, Thai, etc.)
- [ ] **Brand colors** — Do they have existing branding? Logo colors? If not, you'll extract from their interior photos.
- [ ] **3-6 real reviews** — Ask: "Can you send me your 3-5 best Google or Yelp reviews? Just the reviewer name, star rating, and the quote." These go directly on the site as social proof.
- [ ] **Story/About** — Ask: "In 2-3 sentences, what's the story behind this place? Why does it exist?" (Optional but makes the site feel human.)
- [ ] **Ordering preference**:
  - A) Built-in to-go ordering (they handle it themselves)
  - B) Redirect to Uber Eats / DoorDash / their existing platform
- [ ] **Reservation preference**:
  - A) Built-in form (they check a dashboard/email)
  - B) Redirect to OpenTable / Resy / Yelp Reservations
- [ ] **Social media links** (Instagram, Facebook, Yelp, Google)
- [ ] **Any specials?** — Happy hour, AYCE, prix fixe, brunch menu, etc.

### Step 2: Project Setup (5 min)
```bash
# From your WebsiteClients directory:
./new-client.sh restaurant-name
cd restaurant-name
```

Fill in `input/BRIEF.md` with everything from Step 1.

Drop the client's photos into `input/photos/` and menu images into `input/menu/`.

### Step 3: Launch Claude Code (1 command)
```bash
claude
# Then type: /new-restaurant
```
That's it. Claude reads CLAUDE.md, classifies the restaurant archetype, researches real design inspiration, and builds autonomously. The archetype system ensures a dive bar gets a totally different layout than a fine dining spot. Come back when it says "Ready for review."

### Step 4: Review & Refine (15-30 min)
- Run `npm run dev` and review every section
- Check mobile responsiveness (shrink browser or use devtools)
- Verify all menu items and prices match the physical menu
- Verify reviews display correctly with proper attribution
- Test the ordering flow end-to-end
- Test the reservation form
- Ask Claude for any tweaks ("make the hero darker", "swap the gallery order", etc.)

### Step 5: Deploy (5 min)
```bash
# Push to GitHub
git init && git add -A && git commit -m "Initial build"
gh repo create restaurant-name-web --private --push

# Deploy to Vercel
npx vercel --prod

# Or link via Vercel dashboard and auto-deploy from GitHub
```

### Step 6: Domain Setup (5 min)
1. Buy domain on Squarespace Domains
2. In Squarespace DNS settings, add Vercel's required records:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
3. In Vercel project settings → Domains → Add the custom domain
4. SSL auto-provisions. Done.

### Step 7: Client Handoff
Send the client:
- Live URL
- Quick video walkthrough (Loom, 2 min) showing the site
- Note: "Reservation submissions go to [email]. To-go orders go to [email/system]. Feedback alerts go to [email] for any rating under 3 stars."

---

## Input Folder Structure (Standardized)

```
project-name/
├── CLAUDE.md              ← AI build instructions (copied from _template)
├── input/
│   ├── BRIEF.md           ← Restaurant details, hours, vibe, reviews, preferences
│   ├── photos/            ← 5-10 high-quality real photos
│   │   ├── interior-1.jpg
│   │   ├── exterior-1.jpg
│   │   ├── food-1.jpg
│   │   ├── drinks-1.jpg
│   │   └── ...
│   └── menu/
│       ├── menu-front.jpg ← Photo of physical menu (or PDF)
│       ├── menu-back.jpg
│       └── menu.txt       ← Optional: typed-out menu if available
```

---

## Pricing Framework (Suggestion)

| Tier | What They Get | Price Range |
|------|--------------|-------------|
| **Standard** | Full site, menu, reviews, location, feedback, Uber Eats redirect, reservation redirect | $800-1,200 |
| **Pro** | + Built-in ordering, built-in reservations, email alerts | $1,500-2,500 |
| **Premium** | + Stripe payment processing, OpenTable API, custom features | $3,000-5,000 |
| **Maintenance** | Monthly hosting, updates, menu changes | $50-100/mo |

---

## Quality Checklist (Non-Negotiable)

### Design
- [ ] No default/template feel — every site looks custom
- [ ] Archetype-appropriate layout (NOT the same section order and menu style for every restaurant)
- [ ] Dark/moody or light/airy based on restaurant vibe and archetype
- [ ] Color palette pulled from actual restaurant interior/branding
- [ ] Typography pairing feels intentional and matches the archetype
- [ ] Animations are subtle and smooth (not flashy or laggy)
- [ ] Hero image/section creates an immediate emotional reaction
- [ ] Mobile experience is as good as desktop
- [ ] Menu presentation matches the restaurant type (not one-size-fits-all grid cards)

### Content
- [ ] Every menu item, price, and description matches the physical menu exactly
- [ ] Real customer reviews displayed with proper attribution
- [ ] Hours are accurate
- [ ] Address links to Google Maps directions
- [ ] Phone number is clickable (tel: link)
- [ ] No placeholder/lorem ipsum text anywhere
- [ ] Consumer advisory for raw fish (if applicable)

### Functionality
- [ ] Ordering flow works end-to-end (or redirect works)
- [ ] Reservation form works end-to-end (or redirect works)
- [ ] Feedback modal submits successfully
- [ ] "Open Now / Closed" status is accurate
- [ ] All navigation links scroll to correct sections
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized (Next.js Image component, proper sizing)

### SEO
- [ ] Title tag includes restaurant name + city + cuisine type
- [ ] Meta description mentions key selling points
- [ ] Open Graph tags set for social sharing
- [ ] Semantic HTML (h1, h2, nav, section, footer)
- [ ] All images have alt text
