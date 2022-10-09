"use strict";

import { fetchData, App, setCurrentYear, mainFooter } from "./service.js";
import { socialIcons, Social } from "./social.js";

// CREATE FOOTER
customElements.define("main-footer", mainFooter);

// SET CURRENT YEAR IN FOOTER
setCurrentYear();

// FUNCTION SHOW / HIDE ELEMENT
const elemShowHidde = (elem, event) => {
  elem.style.display = event;
};

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector("header");
const btnMobileMenu = document.querySelector(".btn__mobile-menu");
const menuItems = document.querySelector(".menu-items");

const obs = new IntersectionObserver(
  (entiers) => {
    const ent = entiers[0];
    if (screen.width > 928) {
      if (!ent.isIntersecting) {
        elemShowHidde(btnMobileMenu, "inline-flex");
        menuItems.classList.add("mobile");
      } else {
        elemShowHidde(btnMobileMenu, "none");
        menuItems.classList.remove("mobile");
      }
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// OPEN / CLOSE MOBILE MENU
btnMobileMenu.addEventListener("click", () => {
  btnMobileMenu.classList.toggle("open");
  if (btnMobileMenu.classList.contains("open")) {
    btnMobileMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>`;
    menuItems.style.left = "0";
  } else {
    btnMobileMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg>`;
    menuItems.style.left = "-100%";
  }
});

// CONTROL CURRENT SCREEN SIZE
function screenSize() {
  if (screen.width <= 928) {
    elemShowHidde(btnMobileMenu, "inline-flex");
    menuItems.classList.add("mobile");
  } else {
    elemShowHidde(btnMobileMenu, "none");
    menuItems.classList.remove("mobile");
  }
}
window.addEventListener("resize", screenSize);
window.onload = screenSize();

// CREATE SOCIAL NETWORKS LIST
App.renderHTMLPart(socialIcons, "socHero", Social);
App.renderHTMLPart(socialIcons, "socFooter", Social);

// FOOTER SHOW / HIDDEN SOCIAL NETWORKS
const followUsBtn = document.getElementById("footerFollowUs");
followUsBtn.addEventListener("click", () => {
  const socBox = document.querySelector(".soc-box.footer");
  socBox.offsetHeight === 0
    ? elemShowHidde(socBox, "block")
    : elemShowHidde(socBox, "none");
});

// SWIPER SLIDER
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
  },
  breakpoints: {
    // when window width is >= 928px
    928: {
      slidesPerView: 3,
    },
    // when window width is >= 544px
    544: {
      slidesPerView: 2,
    },
  },
});
