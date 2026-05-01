import { projects } from "../data/projects.js";

export function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.forEach((project) => {
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

if (project.live) {
  const liveBtn = document.createElement("a");
  liveBtn.href = project.live;
  liveBtn.target = "_blank";
  liveBtn.rel = "noopener";
  liveBtn.className = "btn btn-outline-primary mt-2 align-self-center";
  liveBtn.textContent = "Live Demo";

  body.appendChild(liveBtn);
}


    article.appendChild(body);
    col.appendChild(article);
    grid.appendChild(col);
  });
}
