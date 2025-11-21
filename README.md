# VSM School

**Visual Systems Mapping** - Turn complex projects into clear, actionable diagrams.

---

## Quickstart (5 min)

### 1. Get the Style System
```bash
curl -O https://raw.githubusercontent.com/rajahwu/vsm-school/main/tokens/vsm-tokens.json
```

### 2. Pick a Template
- **Journey Map** - Progress over time → `/templates/one-screen-journey-template.svg`
- **Swimlane** - Parallel workstreams → `/templates/swimlane-basic-template.svg`
- **Dependency Tree** - Blockers & prerequisites → `/templates/dependency-tree-template.svg`

### 3. Apply Priority Colors
| Priority | Color | Hex | Use For |
|----------|-------|-----|---------|
| P1 Critical | 🔴 | `#DC2626` | Blockers, urgent |
| P2 High | 🟠 | `#F59E0B` | Important milestones |
| P3 Medium | 🔵 | `#3B82F6` | Standard tasks |
| P4 Low | ⚫ | `#6B7280` | Nice-to-have |

### 4. Export & Ship
- **Web/GitHub**: SVG
- **Slides**: PNG @2x
- **Print**: PDF 300dpi

---

## What's Inside

```
/tokens/          → Design tokens (colors, shapes, typography)
/templates/       → Blank diagram starters
/examples/tyler/  → Complete worked example
/docs/guides/     → How-to guides
/notion-templates/→ Database schemas for Notion
/assets/          → Visual alphabet reference
```

---

## See It In Action

Check out the Tyler example: [`/examples/tyler/`](./examples/tyler/)

- Launch journey diagram
- Week-by-week swimlane
- After-action review

---

## Guides

- [Quick Launch Guide](./docs/guides/quick-launch.md) - First diagram in 15 min
- [Export Specifications](./docs/guides/export-specifications.md) - Output formats

---

## For Educators

Use `/notion-templates/` to set up:
- Course database
- Module tracking
- Visual asset index

---

## License

MIT
