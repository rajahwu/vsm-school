**VSM School Build - Todo List for Claude Code**

---

## PHASE 1: Repository Foundation (Priority 1 - Do First)

### Repo Structure
- [ ] Clone https://github.com/rajahwu/vsm-school to local workspace
- [ ] Create directory structure:
  ```
  /tokens/
  /templates/
  /examples/tyler/diagrams/
  /examples/tyler/aar/
  /docs/guides/
  /assets/visual-alphabet/
  /notion-templates/
  ```

### Core Files
- [ ] Create `/tokens/vsm-tokens.json` with Priority Style System (from doc #1)
- [ ] Create root `README.md` with one-screen quickstart (from doc #1)
- [ ] Create `/docs/guides/quick-launch.md` (from doc #8)
- [ ] Create `.gitignore` (node_modules, .DS_Store, *.log)

---

## PHASE 2: Tyler Example Project (Priority 1)

### Tyler Diagrams
- [ ] Create `/examples/tyler/README.md` with project context
- [ ] Generate `/examples/tyler/diagrams/tyler-launch-journey-v1.svg` (programmatic)
- [ ] Generate `/examples/tyler/diagrams/tyler-swimlane-wk1-2-v1.svg` (programmatic)
- [ ] Create `/examples/tyler/aar/tyler-launch-aar-v1.md` (3 sections: worked/blocked/experiment)

### Tyler Metadata
- [ ] Create `/examples/tyler/project-charter.md` (from doc #5 structure)
- [ ] Create `/examples/tyler/stakeholders.md` (table format)

---

## PHASE 3: Template Files (Priority 2)

### Diagram Templates
- [ ] Create `/templates/one-screen-journey-template.svg` (blank starter)
- [ ] Create `/templates/swimlane-basic-template.svg` (blank starter)
- [ ] Create `/templates/dependency-tree-template.svg` (blank starter)

### Visual Reference
- [ ] Create `/assets/visual-alphabet/visual-elements.md` (reference guide)
- [ ] Generate `/assets/visual-alphabet/visual-alphabet.svg` (programmatic)

---

## PHASE 4: Notion Templates (Priority 2)

### Database Schemas (Markdown format for copy-paste)
- [ ] Create `/notion-templates/courses-database-schema.md` (from doc #3)
- [ ] Create `/notion-templates/modules-database-schema.md` (from doc #4)
- [ ] Create `/notion-templates/visual-index-schema.md` (from doc #4)
- [ ] Create `/notion-templates/dashboard-structure.md` (from doc #2)

### Template Bodies
- [ ] Create `/notion-templates/course-template-body.md` (from doc #3)
- [ ] Create `/notion-templates/module-template-body.md` (from doc #4)
- [ ] Create `/notion-templates/visual-asset-template-body.md` (from doc #4)

---

## PHASE 5: Bootcamp Curriculum (Priority 3)

### Week-by-Week Structure
- [ ] Create `/docs/bootcamp/week-1-visual-literacy.md` (from doc #9)
- [ ] Create `/docs/bootcamp/week-2-tool-bootcamp.md` (from doc #9)
- [ ] Create `/docs/bootcamp/bootcamp-overview.md` (6-week structure from doc #9)

### Tracking Template
- [ ] Create `/notion-templates/bootcamp-tracker-database.md` (from doc #2)

---

## PHASE 6: Launch Assets (Priority 3 - If Time Allows)

### Social Content
- [ ] Create `/docs/launch/social-scripts.md` (3 TikTok scripts from doc #1)
- [ ] Create `/docs/launch/launch-checklist.md` (from doc #1)

### Export Specs
- [ ] Create `/docs/guides/export-specifications.md` (PNG/SVG/PDF standards)

---

## VALIDATION CHECKS

- [ ] README renders correctly on GitHub with quickstart visible
- [ ] vsm-tokens.json is valid JSON and loads in browser
- [ ] Tyler example has all 3 required files (journey, swimlane, AAR)
- [ ] All SVG files render correctly in browser
- [ ] Notion templates have all required properties listed
- [ ] All markdown files have proper headings and structure

---

## QUICK WIN MILESTONE (Ship Tonight)

**Minimum viable launch** - these 5 items make it "real":
1. ✅ README with one-screen quickstart
2. ✅ vsm-tokens.json downloadable
3. ✅ Tyler Launch Journey diagram viewable
4. ✅ Quick Launch guide accessible
5. ✅ One Notion template (Course) ready to copy-paste

---

**Time estimates:**
- Phase 1: 30 minutes
- Phase 2: 45 minutes  
- Phase 3: 30 minutes
- Phase 4: 30 minutes
- Phase 5: 20 minutes
- Phase 6: 15 minutes

**Total: ~2.5 hours for full build**

**Save this as:** `/vsm-school-todo.md` in your project root or point Claude Code to this list directly.
