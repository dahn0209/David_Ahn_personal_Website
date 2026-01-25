import { projects } from "../data/projects.js";

export function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return; // Only exists on projects.html

  projects.forEach((project) => {
    // Column wrapper
    const col = document.createElement("div");
    col.className = "col-md-6";

    // Card
    const article = document.createElement("article");
    article.className = "card h-100";

    const body = document.createElement("div");
    body.className = "card-body";

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
    githubBtn.className = "btn btn-outline-secondary";
    githubBtn.textContent = "GitHub";

    // Optional website button if you decide to add it
    if (project.website) {
      const websiteBtn = document.createElement("a");
      websiteBtn.href = project.website;
      websiteBtn.target = "_blank";
      websiteBtn.rel = "noopener";
      websiteBtn.className = "btn btn-primary ms-2";
      websiteBtn.textContent = "Website";

      body.appendChild(websiteBtn);
    }

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(githubBtn);

    article.appendChild(body);
    col.appendChild(article);
    grid.appendChild(col);
  });
}
