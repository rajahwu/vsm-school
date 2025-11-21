# Visual Index Database Schema

Copy this schema to create a Notion database for tracking visual assets.

---

## Database Properties

| Property | Type | Options/Config | Description |
|----------|------|----------------|-------------|
| **Name** | Title | - | Asset name |
| **Type** | Select | `Journey`, `Swimlane`, `Dependency`, `Flowchart`, `Other` | Diagram type |
| **Status** | Select | `Draft`, `Review`, `Final`, `Archived` | Current state |
| **Version** | Text | - | Version number (e.g., v1.2) |
| **File** | Files & media | - | SVG/PNG file |
| **Preview** | Files & media | - | Thumbnail image |
| **Course** | Relation | → Courses | Associated course |
| **Module** | Relation | → Modules | Associated module |
| **Project** | Text | - | Project name (e.g., "Tyler Launch") |
| **Created** | Created time | - | Auto-generated |
| **Last Edited** | Last edited time | - | Auto-generated |
| **Creator** | Person | - | Designer |
| **Tags** | Multi-select | `Example`, `Template`, `Student Work`, etc. | Categories |
| **Format** | Multi-select | `SVG`, `PNG`, `PDF` | Available formats |
| **Dimensions** | Text | - | Size (e.g., "1200x400") |
| **Description** | Text | - | What the diagram shows |

---

## Views to Create

### 1. All Assets (Gallery)
- Show: Name, Type, Preview, Status
- Sort by: Last Edited descending
- Card preview: Preview property

### 2. By Type (Board)
- Group by: Type
- Show: Name, Status, Creator
- Filter: Status ≠ Archived

### 3. By Project (Table)
- Group by: Project
- Show: Name, Type, Version, Status
- Sort: Name ascending

### 4. Templates Only (Gallery)
- Filter: Tags contains "Template"
- Show: Name, Type, Preview, Description

### 5. By Course (Board)
- Group by: Course
- Show: Name, Type, Module

---

## Linked Databases

- **Courses**: Assets can belong to courses
- **Modules**: Assets can be used in specific modules

---

## Sample Data

```
Name: Tyler Launch Journey v1
Type: Journey
Status: Final
Version: v1.0
Project: Tyler Launch
Creator: @designer
Tags: Example, Journey
Format: SVG, PNG
Dimensions: 1200x400
Description: 4-week onboarding project timeline
```

---

## Copy-Paste Setup

1. Create new Notion database
2. Add properties from table above
3. Set select/multi-select options
4. Create views
5. Link to Courses and Modules
6. Upload assets to File property
