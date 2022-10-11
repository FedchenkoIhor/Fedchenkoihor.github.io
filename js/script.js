"use strict";

import { fetchData, App, setCurrentYear } from "./service.js";
import { mainHeader, mainFooter } from "./HTMLBlocks.js";
import { Team, News, socialIcons, Social } from "./class.js";

// CREATE HEADER
customElements.define("main-header", mainHeader);

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
btnMobileMenu.addEventListener("click", closeOpenMenu);

function closeOpenMenu() {
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
}

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

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// SOCIAL NETWORKS ICONS

// CREATE SOCIAL NETWORKS LIST
App.renderHTMLPart(socialIcons, "socHero", Social);
App.renderHTMLPart(socialIcons, "socFooter", Social);
App.renderHTMLPart(socialIcons, "socGIHub", Social, [
  "Telegram",
  "Twitter",
  "Facebook",
]);
App.renderHTMLPart(socialIcons, "socFCXHub", Social, [
  "Telegram",
  "Twitter",
  "Facebook",
]);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// CREATING TEAM BLOCK
fetchData(
  "team.json",
  // "http://194.44.152.74:10102/api/team/members/?pageNumber=1&pageSize=5",
  "GET"
).then((data) => {
  const teamArr = [...data];
  console.log(teamArr);
  App.renderHTMLPart(teamArr, "team-slider", Team);
  // SWIPER SLIDER (TEAM)
  const swiperTeam = new Swiper(".mySwiperTeam", {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// CREATING NEWS BLOCK
fetchData("news.json", "GET").then((data) => {
  const newsArr = [...data];
  App.renderHTMLPart(newsArr, "news-slider", News, false, 5);
  // SWIPER SLIDER (NEWS)
  const swiperNews = new Swiper(".mySwiperNews", {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// MENU NAVIGATION
// SMOOTH SCROLING TO ALL MENU ITEMS
const navLinks = document.querySelector(".menu-items");
navLinks.addEventListener("click", (e) => {
  if (!e.target.classList.contains("nav__token")) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      closeOpenMenu();
    }
  }
});

// FOOTER SHOW / HIDDEN SOCIAL NETWORKS
const followUsBtn = document.getElementById("footerFollowUs");
followUsBtn.addEventListener("click", () => {
  const socBox = document.querySelector(".soc-box.footer");
  socBox.offsetHeight === 0
    ? elemShowHidde(socBox, "block")
    : elemShowHidde(socBox, "none");
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// MODAL WINDOW
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnSubscribeModal = document.querySelector(".btn__ok");
const formModal = document.querySelector(".modal__form");
const inputModal = document.querySelectorAll(".modal-input");

const openModal = function (e) {
  e.preventDefault();
  const elAdd = document.querySelectorAll(".modal-add");
  const elHeader = document.querySelector(".modal__header");
  if (e.target.id === "helpCenter") {
    elAdd.forEach((el) => (el.style.display = "block"));
    elHeader.textContent = "Ask us any questions";
  } else {
    elAdd.forEach((el) => (el.style.display = "none"));
    elHeader.textContent = "Subscribe on our newsletters";
  }
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  inputModal.forEach((el) => (el.value = ""));
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnSubscribeModal.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("test");
  console.log(getFormData(formModal));
});

function getFormData(form) {
  return new FormData(form);
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// SWIPER SLIDER
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// SWIPER SLIDER (PARTNERS)
const swiperPartners = new Swiper(".mySwiperPartners", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
  },
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
