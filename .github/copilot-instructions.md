# AI Coding Guidelines for David Ahn Personal Homepage

## Architecture Overview
This is a static personal portfolio website using vanilla JavaScript ES modules. Key components:
- **Pages**: `index.html`, `about.html`, `projects.html`, `ai-page.html`
- **Data Layer**: JSON-like objects in `js/data/` (e.g., `skills.js`, `courses.js`, `projects.js`)
- **Components**: Rendering logic in `js/components/` that import data and manipulate DOM
- **Main Entry**: `js/main.js` imports and initializes all components on DOMContentLoaded

## Data-Driven Rendering Pattern
Content is rendered dynamically from data files. Example pattern:
```javascript
// js/data/skills.js
export const skills = { proficient: [...], exposure: [...] };

// js/components/skills.js
import { skills } from "../data/skills.js";
export function renderSkills() {
  const list = document.getElementById("skills-proficient");
  skills.proficient.map(skill => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = skill;
    list.appendChild(li);
  });
}
```
Always separate data from rendering logic. Use this pattern for new dynamic content.

## Navigation Highlighting
Navigation uses pathname-based active state detection:
```javascript
// js/components/nav.js
export function initNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === `./${currentPage}`) {
      link.classList.add("active");
    }
  });
}
```
Call `initNav()` in main.js for all pages.

## Development Workflow
- **Local Server**: Use `http-server` (not file://) since ES modules require HTTP
- **Linting**: ESLint with browser + Node globals in `eslint.config.mjs`
- **Styling**: Bootstrap 5 classes + custom CSS in `css/main.css`
- **Dependencies**: Only dev dependencies; no runtime JS frameworks

## Bootstrap Usage Patterns
- Responsive grid: `container`, `row`, `col-md-6` etc.
- Components: `navbar`, `btn`, `list-group-item`, `card`
- Utilities: `d-flex`, `gap-2`, `text-center`, `mb-4`
- Icons: Bootstrap Icons via CDN (`bi bi-github`)

## File Organization
- `js/main.js`: Entry point importing all components
- `js/components/`: One file per feature (nav.js, skills.js, etc.)
- `js/data/`: Static data exports (arrays/objects)
- `css/main.css`: Custom styles extending Bootstrap
- HTML files: Semantic structure with data attributes for JS targeting

## Key Conventions
- ES6+ syntax with `import`/`export`
- DOM manipulation over innerHTML for dynamic content
- Semantic HTML (`header`, `main`, `section`, `footer`)
- Accessibility: `alt` attributes, proper heading hierarchy
- Responsive design: Mobile-first with Bootstrap breakpoints