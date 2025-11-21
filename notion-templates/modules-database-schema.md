# Modules Database Schema

Copy this schema to create a Notion database for course modules.

---

## Database Properties

| Property | Type | Options/Config | Description |
|----------|------|----------------|-------------|
| **Name** | Title | - | Module name |
| **Course** | Relation | → Courses database | Parent course |
| **Order** | Number | - | Sequence in course |
| **Status** | Select | `Draft`, `Review`, `Published`, `Archived` | Current state |
| **Type** | Select | `Lesson`, `Exercise`, `Quiz`, `Project` | Content type |
| **Duration** | Number | Minutes | Estimated time |
| **Visual Assets** | Relation | → Visual Index | Related diagrams |
| **Prerequisites** | Relation | → Modules (self) | Required modules |
| **Created** | Created time | - | Auto-generated |
| **Last Edited** | Last edited time | - | Auto-generated |
| **Author** | Person | - | Content creator |
| **Difficulty** | Select | `Easy`, `Medium`, `Hard` | Complexity |
| **Learning Objectives** | Text | - | What students learn |
| **Content** | Text | - | Module body or link |

---

## Views to Create

### 1. All Modules (Table)
- Show all properties
- Sort by: Course, then Order
- Filter: None

### 2. By Course (Board)
- Group by: Course
- Show: Name, Order, Status, Type
- Sort: Order ascending

### 3. Content Pipeline (Board)
- Group by: Status
- Show: Name, Course, Author, Type
- Filter: Status ≠ Archived

### 4. By Type (Gallery)
- Group by: Type
- Show: Name, Duration, Difficulty
- Useful for finding all exercises or quizzes

---

## Linked Databases

- **Courses**: Each module belongs to one course
- **Visual Index**: Modules can reference visual assets
- **Prerequisites**: Self-relation for learning paths

---

## Sample Data

```
Name: Creating Your First Journey Map
Course: VSM Fundamentals
Order: 3
Status: Published
Type: Lesson
Duration: 30
Difficulty: Easy
Learning Objectives: Create a basic journey map using VSM tokens
```

---

## Copy-Paste Setup

1. Create new Notion database
2. Add properties from table above
3. Set select options
4. Create views
5. Link to Courses and Visual Index
6. Add self-relation for Prerequisites
