import { projects } from "../data/projects.js";

export function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.map((project) => {
    const col = document.createElement("div");
    col.className = "col-md-6";

    const article = document.createElement("article");
    article.className = "card h-100";

    const body = document.createElement("div");
    body.className = "card-body text-center d-flex flex-column";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "card-text";
    desc.textContent = project.description;

    const githubBtn = document.createElement("a");
    githubBtn.href = project.github;
    githubBtn.target = "_blank";
    githubBtn.rel = "noopener";
    githubBtn.className = "btn btn-outline-secondary mt-auto align-self-center";
    githubBtn.textContent = "GitHub";

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(githubBtn);

    article.appendChild(body);
    col.appendChild(article);
    grid.appendChild(col);
  });
}
