document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerIcon = document.getElementById("hamburger-menu");
  menu = document.getElementById("menu");
  closeMenuIcon = document.getElementById("close-menu");
  heroSection = document.getElementById("hero-section");
  body = document.getElementsByTagName("body")[0];

  hamburgerIcon.addEventListener("click", (e) => {
    menu.classList.add("-translate-x-0");
    heroSection.classList.add("filter");
    heroSection.classList.add("blur-sm");
    body.classList.add("overflow-hidden");
  });
  closeMenuIcon.addEventListener("click", (e) => {
    menu.classList.remove("-translate-x-0");
    heroSection.classList.remove("blur-sm");
    body.classList.remove("overflow-hidden");
  });

  document.addEventListener("click", (e) => {
    if (!e.path.includes(menu) && !e.path.includes(hamburgerIcon)) {
      console.log("aqui");
      menu.classList.remove("-translate-x-0");
      heroSection.classList.remove("blur-sm");
      body.classList.remove("overflow-hidden");
    }
  });
});
