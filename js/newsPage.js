"use strict";

import { fetchData, App, setCurrentYear } from "./service.js";
import { shortHeader } from "./HTMLBlocks.js";
import { News } from "./class.js";

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
  const newsArrIndexed = newsArr.map((el, index) => {
    el.newsId = index + 1 + "-" + el.newsId;
    return el;
  });
  App.renderHTMLPart(newsArrIndexed, "news-slider", News);

  // add event on "Read more..."
  const btnReadMore = document.querySelectorAll(".more__news--link");
  btnReadMore.forEach((el) => el.addEventListener("click", openCloseArticle));

  // active slide with selected news
  const activeSlide = new URLSearchParams(location.search).get("slide");
  if (activeSlide) {
    swiperNews.activeIndex = Number.parseInt(activeSlide) - 1;
    swiperNews.update();
    // open article of active news
    const newsCard = swiperNews.slides[swiperNews.activeIndex].children;
    newsCard[0].querySelector(".more__news--link").click();
  }

  swiperNews.update();
});

function openCloseArticle(e) {
  e.preventDefault();
  const article = e.target.closest(".news-desc").nextElementSibling;
  if (!article) return;
  article.classList.toggle("visible");
  e.target.textContent === "Read more..."
    ? (e.target.textContent = "Read less...")
    : (e.target.textContent = "Read more...");
  swiperNews.update();
}
