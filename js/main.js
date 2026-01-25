import { initNav } from "./components/nav.js";
import { renderSkills } from "./components/skills.js";
import { renderCourses } from "./components/courses.js";
import { renderProjects } from "./components/projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderSkills();
  renderCourses();
  renderProjects();
});
