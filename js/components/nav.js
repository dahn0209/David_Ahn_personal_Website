export function initNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === `./${currentPage}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
