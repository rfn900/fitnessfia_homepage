document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerIcon = document.getElementById("hamburger-menu");
  menu = document.getElementById("menu");
  closeMenuIcon = document.getElementById("close-menu");
  heroSection = document.getElementById("hero-section");
  body = document.getElementsByTagName("body")[0];
  nav = document.getElementsByTagName("nav")[0];
  overlay = document.getElementById("body-overlay");

  hamburgerIcon.addEventListener("click", (e) => {
    menu.classList.remove("translate-x-full");
    heroSection.classList.add("filter");
    menu.classList.add("shadow-2xl");
    body.classList.add("overflow-y-hidden");
    overlay.classList.add("bg-black");
    overlay.classList.add("z-40");
  });
  closeMenuIcon.addEventListener("click", (e) => {
    menu.classList.add("translate-x-full");
    menu.classList.remove("shadow-2xl");
    body.classList.remove("overflow-y-hidden");
    overlay.classList.remove("bg-black");
    overlay.classList.remove("z-40");
  });

  document.addEventListener("click", (e) => {
    if (!e.path.includes(menu) && !e.path.includes(hamburgerIcon)) {
      console.log("aqui");
      menu.classList.add("translate-x-full");
      body.classList.remove("overflow-y-hidden");
      overlay.classList.remove("bg-black");
      overlay.classList.remove("z-40");
    }
  });

  window.addEventListener("scroll", () => {
    let classesForScroll = [
      "bg-white",
      "bg-opacity-80",
      "duration-500",
      "shadow-sm",
    ];
    let scroll = window.scrollY;
    if (scroll > 100) {
      classesForScroll.forEach((cssClass) => {
        nav.classList.add(cssClass);
      });
    }
    if (scroll === 0) {
      classesForScroll.forEach((cssClass) => {
        nav.classList.remove(cssClass);
      });
    }
  });
});
