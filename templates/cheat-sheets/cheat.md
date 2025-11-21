### Notion starter — pages and copy to paste

#### Page: Visual Systems Mastery — Starter Repo
**Project name:** Visual Systems Mastery — Starter Repo  
**Sponsor:** Vincent Radford  
**Project manager:** Vincent Radford  
**Purpose:** Publish a teachable starter repo that demonstrates one‑screen launch journeys, design tokens, and repeatable rituals to attract students and clients.  
**Objectives:** 1. Publish VSM School starter repo with visual index; 2. Release Style‑System token JSON and one Word/HTML export; 3. Publish 5 launch social posts.  
**Success criteria:** Repo public with README; token JSON downloadable; 5 social posts live; 10 beta signups.  
**Timeline:** 4 weeks (see schedule board).  
**Assumptions:** Single‑owner dev stack; open tools only (Figma, Inkscape, GIMP).  
**Constraints:** ~10 dev hours/week; no paid infra for launch.

---

#### Subpage: Quickstart (one‑screen)
Paste this at top of the repo README or page header:

- **One‑line outcome:** Starter repo that gets a student to “one‑screen clarity” in 15 minutes.  
- **How to use:** Open the visual index → pick a one‑screen launch journey → import token JSON into your design tool → follow the 3‑step Ritual: Sketch → Map → Reflect.  
- **Deliverables:** token.json; one‑screen diagrams (Figma/SVG); Word + HTML export; 30s demo GIF.

---

#### Subpage: Status Board (Table view)
Columns to create: **Task / Phase / Owner / ETA / Effort (days) / Status / Blockers / Link**

Initial rows to paste:

1. Repo scaffold — Plan — Vincent — Day 3 — 1 — In Progress — None — README stub  
2. Token registry draft — Build — Vincent — Day 7 — 2 — To Do — Tool test — token.json draft  
3. One‑screen launch diagram — Build — Vincent — Day 10 — 2 — To Do — Visual polish — figma/artboard  
4. Exports: Word + HTML — Build — Vincent — Day 18 — 3 — To Do — Automation scripts — export folder  
5. Content batch (5 posts) — Promote — Vincent — Day 24 — 2 — To Do — Shoot time — content folder  
6. Launch & announce — Publish — Vincent — Day 28 — 1 — To Do — Scheduling — launch checklist

---

#### Subpage: Risks & Mitigations
- Token spec mismatch with client tools • Mitigation: publish JSON + 2 import guides.  
- Repo incomprehensible • Mitigation: add one‑screen quickstart + 30s GIF demo.  
- Time squeeze for exports • Mitigation: prioritize Word/HTML; automate later.

---

#### Subpage: Stakeholders
Create a simple table: **Name / Role / Interest / Influence (H/M/L) / Contact**

Sample rows:
- Vincent Radford • Founder / Owner • H • slack/email  
- Beta users (2) • Early testers • M • invite link  
- Studio Lead • Implementation • M • slack

---

### Figma one‑screen WBS artboard spec + copy to paste

Artboard size: 1200 × 675 px. Grid: 3 columns × 5 rows.

Components:
- Phase card (width 360px): title, 1‑line outcome, 2 bullet deliverables.  
- Deliverable chip (compact): label, ETA (days), owner initials.  
- Owner token: circular initial with role color.  
- Risk ribbon (bottom): 3 small chips with mitigation text.

Layout:
- Top row (full width): Project title + one‑line outcome.  
- Left column: vertical phase cards (Initiation, Plan, Build, Publish, Promote).  
- Middle column: deliverable chips aligned to phases.  
- Right column: owner tokens with ETA badges.  
- Bottom row: risk ribbon and quickstart CTA button.

Export guidance:
- Export as single SVG + PNG 1200×675. Include a 30s GIF demo (screen-record zoom pan over the board).

---

### Style‑System token palette (ready‑to‑copy JSON snippet)

Copy this JSON into your token registry file named token.json:

{
  "name": "Priority Style System — Starter",
  "version": "0.1.0",
  "colors": {
    "brand.primary": "#0B5FFF",
    "brand.secondary": "#FF6B35",
    "neutral.100": "#FFFFFF",
    "neutral.500": "#9AA0A6",
    "neutral.900": "#0F1720"
  },
  "typography": {
    "heading.1": {"fontFamily":"Inter","fontWeight":700,"fontSize":36,"lineHeight":44},
    "heading.2": {"fontFamily":"Inter","fontWeight":600,"fontSize":24,"lineHeight":32},
    "body": {"fontFamily":"Inter","fontWeight":400,"fontSize":16,"lineHeight":24},
    "caption": {"fontFamily":"Inter","fontWeight":400,"fontSize":12,"lineHeight":16}
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 40
  },
  "components": {
    "button.primary": {"bg":"brand.primary","fg":"neutral.100","radius":6,"padV":10,"padH":16},
    "card.default": {"bg":"neutral.100","shadow":"0 2px 8px rgba(0,0,0,0.06)","radius":8,"pad":16}
  }
}

Usage notes to paste in README:
- Import token.json into Figma (Tokens plugin) or convert to CSS variables for web.  
- Change a single token value to update global style across exported templates.  
- Comment “TOKENS” on launch post to get the raw JSON.

---

### README quick snippet (to paste as repo header)

Visual Systems Mastery — Starter Repo

One line: Starter repo that gets a student to one‑screen clarity in 15 minutes.  
What’s inside: token.json; one‑screen diagrams (SVG/PNG); Word + HTML export; 30s demo GIF.  
How to get started: 1) Open visual index; 2) Import token.json into your tool; 3) Follow Sketch → Map → Reflect.  
Want the token JSON now? Comment “TOKENS” on the launch post.

---

### Three ready‑to‑post TikTok scripts (30s each) — film directions included

Script A — VSM School launch (30s)
- Title card 1s: “I accidentally built a school”  
- Hook 3s: direct-to-camera — “I tried to make Word templates and ended up with a design school.”  
- Beat 1 (6s): screen-record: open repo README and token.json file; quick highlight.  
- Beat 2 (8s): quick pan across Figma one‑screen WBS; zoom on one deliverable.  
- Beat 3 (7s): on-camera — “Starter repo drops soon. Want the token JSON? Comment ‘TOKENS’.”  
- CTA card 2s: “Follow for the starter repo.”

Script B — Style‑System token demo (30s)
- Title card 1s: “Tokens > Templates”  
- Hook 3s: on-camera — “Change one token, change the whole brand.”  
- Beat 1 (8s): screen-record: swap brand.primary in token.json from blue to orange; show Figma update.  
- Beat 2 (12s): before/after side-by-side: header color, CTA button, card accent.  
- CTA (4s): on-camera — “Want the JSON? Comment ‘TOKENS’. I’ll drop it in the repo.”

Script C — From brief to deploy in 3 steps (30s)
- Title card 1s: “3 steps to turn a messy brief into a deliverable”  
- Hook 3s: on-camera — “Three steps we use in Dropframe.”  
- Step 1 (7s): Sketch — quick clip of sticky note, 1‑line problem.  
- Step 2 (9s): Map — show one‑screen launch journey and owner tokens.  
- Step 3 (7s): Deploy — show export button, mention Word/HTML.  
- CTA card 3s: “Follow for templates and the one‑screen starter.”

Filming tips to paste in production doc:
- Use quick jump cuts, caption every line, 2–3s B‑roll clips, and a 1–2s pause after the punchline. Pin a comment with CTA.

---

If you want, I’ll convert the token JSON into a CSS variables snippet, draft the 30s GIF storyboard for the one‑screen WBS, or produce the 10 caption + pinned comment pairs for your launch posts. Which next?


### Quick 15‑minute Quickstart (get one‑screen clarity now)

1. Open the repo README or Notion Quickstart (top of the starter page).  
2. Import **token.json** into your design tool (Figma Tokens plugin or copy CSS variables).  
3. Open the **one‑screen WBS** artboard (Figma or SVG).  
4. Pick a single deliverable on the board (example: “One‑screen launch diagram”).  
5. Follow the 3‑step ritual: **Sketch → Map → Reflect** (15 minutes total).  
   - Sketch: 5 minutes — draw the outcome and three core steps on a sticky or rough artboard.  
   - Map: 7 minutes — place those steps into the one‑screen WBS lanes and add owner initials.  
   - Reflect: 3 minutes — note one risk and one next action, save as a GIF/PNG.

---

### Where each file/page lives and what it does

- **README / Notion Quickstart** — Start here. One‑line outcome, how to use token.json, and the three‑step ritual.  
- **token.json** — Global style tokens. Change a value here to update colors, type, spacing across templates.  
- **Figma one‑screen WBS (SVG/PNG)** — Visual project map; use it to assign tasks and show flow at a glance.  
- **Exports: Word + HTML** — Shareable templates generated from the one‑screen content for clients or docs.  
- **Demo GIF (30s)** — Short visual walkthrough you can embed in README or social posts.  
- **Status board (Notion table)** — Tasks, owners, ETAs, and blockers for the project.

---

### Step‑by‑step: use token.json with Figma (2 options)

Option A — Tokens plugin (recommended)
1. Open Figma file.  
2. Install/open the Tokens plugin.  
3. Import token.json (use plugin import).  
4. Apply tokens to text styles, components, and color fills.  
5. Change a token value in plugin to preview global updates.

Option B — Manual CSS variables (web/docs)
1. Convert token keys to CSS variables (e.g., --brand-primary: #0B5FFF).  
2. Link or paste into your HTML/CSS.  
3. Update the variable to change styles globally.

---

### A simple workflow to produce one exported deliverable (30–90 minutes)

1. Choose outcome (one‑screen launch diagram).  
2. Open one‑screen WBS and duplicate the artboard.  
3. Apply tokens so the artboard matches your brand quickly.  
4. Add owner initials, ETA badges, and one risk chip.  
5. Export as PNG + SVG.  
6. Paste visuals into the Word template, fill brief, and export HTML if needed.  
7. Record a 30s GIF of the board (pan + callouts) for README/social.

---

### Troubleshooting common sticking points

- “Where do I change colors or fonts?” — Edit token.json then re‑import in Figma Tokens or update CSS variables.  
- “My Figma styles didn’t update” — Make sure components reference token variables (replace hardcoded color with token).  
- “I don’t see the one‑screen board” — Check the repo’s /design or /figma folder; open the SVG in a browser if Figma link fails.  
- “Exports missing layout” — Export the artboard at 2x and check margins in the Word template; copy the PNG into the template placeholders.  
- “Repo is confusing for newcomers” — Use the Quickstart snippet at the top of README and the 30s demo GIF as the first file.

---

### Short checklist you can paste into Notion or the project README

- [ ] Open Quickstart (README) and read one‑line outcome.  
- [ ] Import token.json into Figma or convert to CSS variables.  
- [ ] Duplicate one‑screen WBS for your project.  
- [ ] Fill 3 deliverables and assign owner initials.  
- [ ] Export PNG/SVG + paste into Word template.  
- [ ] Create 30s GIF walkthrough and upload to repo.  
- [ ] Post 1 TikTok using one of the 30s scripts and link to the repo.

---

Tell me which deliverable you want me to walk through live first (token import, Figma WBS edit, or export into Word). I’ll give an exact minute‑by‑minute checklist for that task.
