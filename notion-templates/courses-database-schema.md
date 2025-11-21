# Courses Database Schema

Copy this schema to create a Notion database for tracking courses.

---

## Database Properties

| Property | Type | Options/Config | Description |
|----------|------|----------------|-------------|
| **Name** | Title | - | Course name |
| **Status** | Select | `Planning`, `Active`, `Complete`, `Archived` | Current state |
| **Level** | Select | `Beginner`, `Intermediate`, `Advanced` | Difficulty |
| **Duration** | Number | Weeks | Estimated length |
| **Modules** | Relation | → Modules database | Linked modules |
| **Visual Assets** | Relation | → Visual Index | Related diagrams |
| **Created** | Created time | - | Auto-generated |
| **Last Edited** | Last edited time | - | Auto-generated |
| **Owner** | Person | - | Course creator |
| **Tags** | Multi-select | `VSM`, `Diagram`, `Process`, `Strategy`, etc. | Categories |
| **Priority** | Select | `P1`, `P2`, `P3`, `P4` | Urgency level |
| **Launch Date** | Date | - | Target publish date |
| **Description** | Text | - | Brief summary |

---

## Views to Create

### 1. All Courses (Table)
- Show all properties
- Sort by: Status, then Priority
- Filter: None (show all)

### 2. Active Courses (Board)
- Group by: Status
- Show: Name, Owner, Priority, Launch Date
- Filter: Status ≠ Archived

### 3. By Level (Gallery)
- Group by: Level
- Show: Name, Duration, Module count
- Cover: First visual asset

### 4. Calendar View
- Date property: Launch Date
- Show: Name, Status

---

## Linked Databases

- **Modules**: One course has many modules
- **Visual Index**: One course can reference multiple visual assets

---

## Sample Data

```
Name: VSM Fundamentals
Status: Active
Level: Beginner
Duration: 4 weeks
Priority: P1
Tags: VSM, Diagram, Beginner
Launch Date: 2024-12-01
Description: Core concepts of visual systems mapping
```

---

## Copy-Paste Setup

1. Create new Notion database
2. Add properties from table above
3. Set select options
4. Create views
5. Link to Modules and Visual Index databases
