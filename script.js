document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".mobile-links");

  btn.addEventListener("click", () => {
    links.classList.toggle("hidden");
    links.classList.toggle("flex");
  });
});
