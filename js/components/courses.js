import { courses } from "../data/courses.js";

export function renderCourses() {
  const list = document.getElementById("courses-list");
  if (!list) return; 

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = course;
    list.appendChild(li);
  });
}
