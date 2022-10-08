"use strict";

import { fetchData, App, shortHeader, setCurrentYear } from "./service.js";
import { News } from "./news.js";

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// SET CURRENT YEAR IN FOOTER
setCurrentYear();

// SWIPER SLIDER (NEWS)
const swiperNews = new Swiper(".mySwiperNews", {
  autoHeight: true,
  observer: true,
  setWrapperSize: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// CREATE HEADER
customElements.define("short-header", shortHeader);
const title = document.querySelector(".title-fqa");
title.innerHTML = "DBS Ecosystem &mdash; NEWS";

// BACK ON PREVIOUSE PAGE
document.querySelector(".btn__back").addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});

// CREATING NEWS BLOCK
fetchData("news.json", "GET").then((data) => {
  const newsArr = [...data];
  App.renderHTMLPart(newsArr, "news-slider", News);
  const btnReadMore = document.querySelectorAll(".more__news");
  btnReadMore.forEach((el) => el.addEventListener("click", openCloseArticle));
  const activeSlide = new URLSearchParams(location.search).get("slide");
  if (activeSlide) {
    swiperNews.activeIndex = Number.parseInt(activeSlide) - 1;
    openCloseArticle();
  }
  swiperNews.update();
});

function openCloseArticle(e) {
  e.preventDefault();
  let parentLink = e.target.parentElement;
  const parentHeader = parentLink.parentElement;
  const article = parentHeader.nextElementSibling;
  if (article) {
    if (article.classList.contains("visible")) {
      article.classList.remove("visible");
      e.target.textContent = "Read more...";
    } else {
      article.classList.add("visible");
      e.target.textContent = "Read less...";
    }
    swiperNews.update();
  }
}
