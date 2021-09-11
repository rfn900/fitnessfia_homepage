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
    overlay.classList.add("z-50");
    overlay.classList.remove("hidden");
  });
  closeMenuIcon.addEventListener("click", (e) => {
    menu.classList.add("translate-x-full");
    menu.classList.remove("shadow-2xl");
    body.classList.remove("overflow-y-hidden");
    overlay.classList.remove("bg-black");
    overlay.classList.remove("z-50");
    overlay.classList.add("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!e.path.includes(menu) && !e.path.includes(hamburgerIcon)) {
      menu.classList.add("translate-x-full");
      body.classList.remove("overflow-y-hidden");
      overlay.classList.remove("bg-black");
      overlay.classList.remove("z-50");
      overlay.classList.add("hidden");
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
  const wp_api_url = "https://fitnessfia.com/wp-json/wp/v2/posts";
  const category = 14;

  fetch(`${wp_api_url}?categories=${category}&_embed`)
    .then((response) => response.json())
    .then((data) => {
      data
        .filter((_, i) => i < 3)
        .forEach((post, index) => {
          document.getElementById(`feat-title-${index + 1}`).innerHTML =
            post.title.rendered;
          document.getElementById(`feat-excerpt-${index + 1}`).innerHTML =
            post.excerpt.rendered;
          const img = document.getElementById(`feat-img-${index + 1}`);
          const link = document.getElementById(`feat-link-${index + 1}`);
          const feat_title_link = document.getElementById(
            `feat-title-link-${index + 1}`
          );
          const cat_container = document.getElementById(
            `feat-cat-${index + 1}`
          );
          post._embedded["wp:term"][0].map((cat, idx) => {
            const cat_link = document.createElement("a");
            cat_link.classList.add("cat-bullets");
            cat_link.classList.add(`cat-bullets-color-${idx % 2}`);
            cat_link.setAttribute("href", cat.link);
            console.log(cat);
            cat_link.innerText = cat.name;
            cat_container.append(cat_link);
            if (idx > 3) return 1;
          });

          img.setAttribute(
            "src",
            post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium
              .source_url
          );

          link.setAttribute("href", post.link);

          feat_title_link.setAttribute("href", post.link);
        });
    });

  fetch(`${wp_api_url}?_embed`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data
        .filter((_, index) => index < 2)
        .forEach((post, index) => {
          const date = new Date(post.date);
          const dateArray = date.toString().split(" ");

          document.getElementById(
            `date-${index + 1}`
          ).innerHTML = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;

          document.getElementById(`title-${index + 1}`).innerHTML =
            post.title.rendered;

          const img_container = document.getElementById(`img-${index + 1}`);
          const img = document.createElement("img");
          const img_url =
            post._embedded["wp:featuredmedia"]["0"].media_details.sizes
              .thumbnail.source_url;
          img.setAttribute("src", img_url);
          img.classList.add("object-fit");
          img.classList.add("w-full");
          img_container.append(img);

          document
            .getElementById(`post-link-${index + 1}`)
            .setAttribute("href", post.link);
        });
    });
});
