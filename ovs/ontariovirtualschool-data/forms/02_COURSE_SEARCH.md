# Course Search & Filter

## Overview
- **Component Name:** Course Search & Filter
- **Location:** Homepage, /courses/
- **Purpose:** Allow users to search and filter courses by various criteria
- **Type:** Client-side React application (no server requests for filtering)

---

## Technology Stack

| Component | Value |
|-----------|-------|
| Framework | React |
| UI Library | Material-UI (MUI) v5 |
| Search Component | MuiAutocomplete |
| Filter Components | MuiSelect (multi-select) |
| State Management | React useState/useEffect |
| Data Fetching | Initial page load (courses embedded in page) |

---

## Search Input

### Component Structure
```jsx
<Autocomplete
  options={courses}
  getOptionLabel={(option) => `${option.code} - ${option.name}`}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Search courses..."
      InputProps={{
        type: 'search',
        endAdornment: <SearchIcon />
      }}
    />
  )}
  onChange={handleSearchChange}
  freeSolo
/>
```

### HTML Output
```html
<div class="MuiAutocomplete-root">
  <div class="MuiFormControl-root">
    <div class="MuiInputBase-root MuiOutlinedInput-root">
      <input
        type="search"
        class="MuiInputBase-input MuiInputBase-inputTypeSearch MuiAutocomplete-input"
        placeholder="Search courses..."
        aria-autocomplete="list"
        autocomplete="off"
      />
    </div>
  </div>
  <ul class="MuiAutocomplete-listbox" role="listbox">
    <!-- Options rendered here -->
  </ul>
</div>
```

### Behavior
| Feature | Description |
|---------|-------------|
| Type-ahead | Suggestions appear as user types |
| Min Characters | 0 (shows all on focus) |
| Debounce | 300ms delay before filtering |
| Search Fields | Course name, course code, description |
| Clear Button | X button to clear search |
| Keyboard | Arrow keys to navigate, Enter to select |

---

## Filter Components

### 1. Grade Level Filter
```jsx
<Select
  multiple
  value={selectedGrades}
  onChange={handleGradeChange}
  renderValue={(selected) => selected.join(', ')}
>
  <MenuItem value="9">Grade 9</MenuItem>
  <MenuItem value="10">Grade 10</MenuItem>
  <MenuItem value="11">Grade 11</MenuItem>
  <MenuItem value="12">Grade 12</MenuItem>
</Select>
```

| Option | Value |
|--------|-------|
| Grade 9 | `9` |
| Grade 10 | `10` |
| Grade 11 | `11` |
| Grade 12 | `12` |

---

### 2. Subject Filter
```jsx
<Select
  multiple
  value={selectedSubjects}
  onChange={handleSubjectChange}
>
  <MenuItem value="math">Mathematics</MenuItem>
  <MenuItem value="science">Science</MenuItem>
  <MenuItem value="english">English</MenuItem>
  <!-- ... more subjects -->
</Select>
```

| Option | Value |
|--------|-------|
| Mathematics | `math` |
| Science | `science` |
| English | `english` |
| Business Studies | `business` |
| Social Sciences | `social_sciences` |
| Arts | `arts` |
| Health & Physical Education | `health` |
| Technology | `technology` |
| French | `french` |
| Guidance & Career Education | `guidance` |

---

### 3. Credit Type Filter
```jsx
<Select
  multiple
  value={selectedCredits}
  onChange={handleCreditChange}
>
  <MenuItem value="U">University (U)</MenuItem>
  <MenuItem value="C">College (C)</MenuItem>
  <MenuItem value="M">University/College (M)</MenuItem>
  <MenuItem value="O">Open (O)</MenuItem>
</Select>
```

| Option | Value | Description |
|--------|-------|-------------|
| University | `U` | University preparation |
| College | `C` | College preparation |
| Mixed | `M` | University/College preparation |
| Open | `O` | Open (no prerequisites) |

---

## Course Data Structure

Each course object contains:
```json
{
  "id": 123,
  "code": "SBI3U",
  "name": "Biology",
  "full_name": "Biology, Grade 11, University Preparation",
  "grade": 11,
  "credit_type": "U",
  "credits": 1,
  "subject": "science",
  "description": "This course furthers students' understanding...",
  "prerequisites": "SNC2D",
  "price": 449,
  "url": "/courses/biology-grade-11-university-sbi3u/"
}
```

---

## Filtering Logic

```javascript
const filterCourses = () => {
  return courses.filter(course => {
    // Search text match (name or code)
    const searchMatch = searchTerm === '' ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());

    // Grade filter (multi-select)
    const gradeMatch = selectedGrades.length === 0 ||
      selectedGrades.includes(course.grade.toString());

    // Subject filter (multi-select)
    const subjectMatch = selectedSubjects.length === 0 ||
      selectedSubjects.includes(course.subject);

    // Credit type filter (multi-select)
    const creditMatch = selectedCredits.length === 0 ||
      selectedCredits.includes(course.credit_type);

    // All conditions must match
    return searchMatch && gradeMatch && subjectMatch && creditMatch;
  });
};
```

---

## Display Layout

### Course Card Structure
```html
<div class="course-card">
  <div class="course-code">SBI3U</div>
  <h3 class="course-name">Biology</h3>
  <div class="course-meta">
    <span class="grade">Grade 11</span>
    <span class="credit-type">University (U)</span>
  </div>
  <div class="course-price">$449</div>
  <a href="/courses/..." class="btn">View Details</a>
</div>
```

### Grid Layout
| Screen Size | Cards Per Row |
|-------------|---------------|
| Desktop (>1200px) | 3 |
| Tablet (768-1199px) | 2 |
| Mobile (<768px) | 1 |

### Empty State
When no courses match filters:
```
"No courses found matching your criteria."
[Clear Filters] button
```

---

## State Management

```javascript
// React state hooks
const [searchTerm, setSearchTerm] = useState('');
const [selectedGrades, setSelectedGrades] = useState([]);
const [selectedSubjects, setSelectedSubjects] = useState([]);
const [selectedCredits, setSelectedCredits] = useState([]);
const [filteredCourses, setFilteredCourses] = useState(courses);

// Effect to filter when any state changes
useEffect(() => {
  setFilteredCourses(filterCourses());
}, [searchTerm, selectedGrades, selectedSubjects, selectedCredits]);
```

---

## Responsive Behavior

### Desktop
- Filters displayed horizontally above course grid
- Search bar prominent at top
- All filters visible

### Tablet
- Filters in 2-column layout
- Search bar full width

### Mobile
- Filters collapsed into drawer/accordion
- "Filter" button to expand
- Search bar full width
- Single column course cards

---

## Accessibility Features

| Feature | Implementation |
|---------|----------------|
| ARIA Labels | All inputs have `aria-label` |
| Keyboard Navigation | Tab, Arrow keys, Enter, Escape |
| Screen Reader | Live region announces result count |
| Focus Management | Focus returns to search after filter change |
| Color Contrast | WCAG AA compliant |

---

## Rebuild Instructions

### Dependencies
```json
{
  "dependencies": {
    "@mui/material": "^5.x",
    "@mui/icons-material": "^5.x",
    "@emotion/react": "^11.x",
    "@emotion/styled": "^11.x",
    "react": "^18.x"
  }
}
```

### Basic Component Structure
```jsx
import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card
} from '@mui/material';

const CourseSearch = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedCredits, setSelectedCredits] = useState([]);

  // ... filtering logic

  return (
    <div className="course-search">
      <Autocomplete ... />
      <div className="filters">
        <Select multiple ... /> {/* Grade */}
        <Select multiple ... /> {/* Subject */}
        <Select multiple ... /> {/* Credit Type */}
      </div>
      <Grid container>
        {filteredCourses.map(course => (
          <Grid item key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
```

---

## Performance Notes

- All filtering is client-side (instant)
- Courses data loaded once on page load
- No API calls during filtering
- Debounced search (300ms) prevents excessive re-renders
- Virtual scrolling recommended for 500+ courses
