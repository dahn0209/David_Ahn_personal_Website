import { courses } from "../data/courses.js";

export function renderCourses() {
  const list = document.getElementById("courses-list");
  if (!list) return;

  courses.map((course) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = course;
    list.appendChild(li);
  });
}
