# Quick Launch Guide

Get your first VSM diagram live in 15 minutes.

---

## Step 1: Get the Tokens (2 min)

```bash
# Download the style system
curl -O https://raw.githubusercontent.com/rajahwu/vsm-school/main/tokens/vsm-tokens.json
```

Or copy from `/tokens/vsm-tokens.json` in this repo.

---

## Step 2: Choose Your Template (3 min)

| Template | Use When | File |
|----------|----------|------|
| Journey Map | Showing progress over time | `one-screen-journey-template.svg` |
| Swimlane | Multiple parallel workstreams | `swimlane-basic-template.svg` |
| Dependency Tree | Mapping blockers & prerequisites | `dependency-tree-template.svg` |

---

## Step 3: Apply Priority Colors (5 min)

Use the token colors to communicate urgency:

- **P1 Critical** `#DC2626` - Blockers, must fix now
- **P2 High** `#F59E0B` - Important milestones
- **P3 Medium** `#3B82F6` - Standard tasks
- **P4 Low** `#6B7280` - Nice-to-have

---

## Step 4: Export & Ship (5 min)

### For Web/GitHub
- Export as SVG (scalable, small file size)
- Embed directly in README or docs

### For Presentations
- Export as PNG at 2x resolution
- Use 1920x1080 for slides

### For Print
- Export as PDF
- Ensure 300 DPI minimum

---

## Quick Wins

### Your First Diagram Checklist

- [ ] Define the time range (1 week? 1 month? 1 quarter?)
- [ ] List 3-5 major milestones
- [ ] Identify 1-2 blockers or risks
- [ ] Apply priority colors
- [ ] Add a title and date
- [ ] Export and share

---

## Example: Tyler's Launch Journey

See `/examples/tyler/` for a complete worked example:
- Journey diagram
- Swimlane breakdown
- After-action review

---

## Next Steps

1. **Explore Templates** - `/templates/` has blank starters
2. **Read Visual Alphabet** - `/assets/visual-alphabet/` explains each element
3. **Copy Notion Templates** - `/notion-templates/` for tracking systems

---

## Need Help?

- Check the main README for quickstart
- Review Tyler's example for patterns
- Open an issue for questions
