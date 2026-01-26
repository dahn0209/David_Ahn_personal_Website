import { skills } from "../data/skills.js";

export function renderSkills() {
  const proficientList = document.getElementById("skills-proficient");
  const exposureList = document.getElementById("skills-exposure");

  if (!proficientList || !exposureList) return;

  skills.proficient.map((skill) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = skill;
    proficientList.appendChild(li);
  });

  skills.exposure.map((skill) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = skill;
    exposureList.appendChild(li);
  });
}
