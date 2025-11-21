# VSM School Dashboard Structure

Layout guide for creating a Notion dashboard to manage VSM School.

---

## Page Structure

```
📊 VSM School Dashboard
├── 🎯 Quick Actions (callout)
├── 📈 Key Metrics (embedded databases)
├── 📚 Courses Overview (linked database)
├── 🎨 Recent Visual Assets (linked database)
├── ✅ Active Tasks (linked database)
└── 📅 Upcoming Launches (calendar)
```

---

## Section 1: Quick Actions

**Type**: Callout block

**Content**:
- [ ] Create new course
- [ ] Add visual asset
- [ ] Review pending content
- [ ] Export latest diagrams

---

## Section 2: Key Metrics

**Type**: 2-column layout with database views

### Left Column: Course Stats
Linked database view from Courses:
- View type: Board
- Group by: Status
- Show count only
- Filter: Status ≠ Archived

### Right Column: Asset Stats
Linked database view from Visual Index:
- View type: Board
- Group by: Type
- Show count only

---

## Section 3: Courses Overview

**Type**: Linked database (full page)

- Source: Courses database
- View: Table
- Properties shown: Name, Status, Level, Modules count, Launch Date, Owner
- Sort: Priority, then Launch Date
- Filter: Status = Active OR Status = Planning

---

## Section 4: Recent Visual Assets

**Type**: Linked database (gallery)

- Source: Visual Index
- View: Gallery
- Card preview: Preview property
- Properties: Name, Type, Status, Creator
- Sort: Last Edited descending
- Limit: 6 items

---

## Section 5: Active Tasks

**Type**: Linked database or embedded todo list

Option A - From separate Tasks database:
- View: Board by Status
- Filter: Status ≠ Done
- Show: Task, Owner, Due Date

Option B - Inline checklist:
```
## This Week
- [ ] Finalize Module 3 content
- [ ] Review Tyler AAR
- [ ] Export bootcamp diagrams
```

---

## Section 6: Upcoming Launches

**Type**: Linked database (calendar)

- Source: Courses database
- Date property: Launch Date
- Filter: Launch Date is next 30 days
- Show: Name, Status

---

## Layout Tips

### Column Setup
- Use 2 columns for metrics
- Full width for main databases
- Toggles for less-used sections

### Icons & Covers
- Add emoji icons to each section
- Use course preview images as covers
- Keep visual hierarchy clear

### Templates
- Add "New Course" template button
- Add "New Asset" template button
- Include quick-add forms

---

## Copy-Paste Checklist

1. [ ] Create new Notion page
2. [ ] Add page icon and cover
3. [ ] Create Quick Actions callout
4. [ ] Add 2-column layout for metrics
5. [ ] Insert linked database views
6. [ ] Configure each view (properties, filters, sorts)
7. [ ] Add template buttons
8. [ ] Test all links work

---

## Advanced: Formulas

### Progress Percentage
```
prop("Completed Modules") / prop("Total Modules") * 100
```

### Days Until Launch
```
dateBetween(prop("Launch Date"), now(), "days")
```

### Status Emoji
```
if(prop("Status") == "Complete", "✅", if(prop("Status") == "Active", "🔵", if(prop("Status") == "Blocked", "🔴", "⚪")))
```
