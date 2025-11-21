# Visual Alphabet Reference

A guide to the standard shapes, colors, and patterns used in VSM diagrams.

---

## Shapes

### Rectangle (Standard Task)
- **Use for**: Regular work items, tasks, activities
- **Properties**: Rounded corners (4px radius)
- **Example**: "Build API endpoint", "Write documentation"

### Diamond (Milestone/Decision)
- **Use for**: Key decision points, deliverable checkpoints, gates
- **Example**: "Design Review", "Go/No-Go Decision", "Launch Approval"

### Rounded Rectangle (Start/End)
- **Use for**: Process boundaries, entry/exit points
- **Properties**: Full radius corners (20px+)
- **Example**: "START", "END", "LAUNCH"

### Circle (Dependency/Blocker)
- **Use for**: External dependencies, blockers, risks
- **Example**: "API Delay", "Waiting on Legal", "Third-party Service"

### Parallelogram (Input/Output)
- **Use for**: Data, documents, deliverables
- **Example**: "Research Report", "Design Spec", "User Data"

---

## Colors

### Priority Colors
| Priority | Hex | RGB | Use For |
|----------|-----|-----|---------|
| P1 Critical | `#DC2626` | 220, 38, 38 | Blockers, urgent issues |
| P2 High | `#F59E0B` | 245, 158, 11 | Important milestones |
| P3 Medium | `#3B82F6` | 59, 130, 246 | Standard tasks |
| P4 Low | `#6B7280` | 107, 114, 128 | Nice-to-have items |

### Status Colors
| Status | Hex | Use For |
|--------|-----|---------|
| Complete | `#10B981` | Done, shipped, validated |
| In Progress | `#3B82F6` | Currently active |
| Blocked | `#DC2626` | Waiting on dependency |
| Not Started | `#9CA3AF` | Queued, pending |

### Lane Colors
| Lane | Hex | Use For |
|------|-----|---------|
| Strategy | `#8B5CF6` | Planning, decisions |
| Design | `#EC4899` | Visual work, UX |
| Development | `#3B82F6` | Building, coding |
| Operations | `#10B981` | Launch, maintenance |

---

## Connectors

### Solid Arrow
- **Use for**: Direct flow, sequence, dependency
- **Properties**: 2px stroke, filled arrowhead

### Dashed Line
- **Use for**: Optional path, weak dependency
- **Properties**: 2px stroke, 4px dash

### Dotted Line
- **Use for**: Future state, planned connection
- **Properties**: 2px stroke, 2px dots

---

## Patterns

### Time Flow (Left to Right)
- Earlier events on left
- Later events on right
- Consistent spacing per time unit

### Hierarchy (Top to Bottom)
- Goals at top
- Dependencies below
- External deps at bottom

### Parallel Tracks (Swimlanes)
- Each lane = one workstream/owner
- Horizontal = time progression
- Cross-lane arrows = dependencies

---

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Title | Inter | Bold (700) | 18-20px |
| Label | Inter | Semibold (600) | 12-14px |
| Body | Inter | Regular (400) | 11-12px |
| Caption | Inter | Regular (400) | 9-10px |

---

## Spacing

| Size | Value | Use For |
|------|-------|---------|
| XS | 4px | Tight grouping |
| SM | 8px | Related elements |
| MD | 16px | Standard spacing |
| LG | 24px | Section breaks |
| XL | 32px | Major divisions |

---

## Best Practices

1. **Limit colors** - Use 3-4 colors max per diagram
2. **Consistent shapes** - Same shape = same meaning
3. **Clear labels** - Every element needs text
4. **Flow direction** - Left-to-right or top-to-bottom
5. **Whitespace** - Don't crowd elements
6. **Legend** - Include if using special symbols

---

## Quick Reference

```
Rectangle = Task
Diamond = Milestone/Decision
Circle = External/Blocker
Rounded = Start/End

Red = Critical/Blocked
Orange = High Priority
Blue = In Progress
Green = Complete
Gray = Low/Not Started
```

---

See `/tokens/vsm-tokens.json` for exact values.
