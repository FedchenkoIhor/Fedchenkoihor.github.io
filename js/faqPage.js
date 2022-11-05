"use strict";

import { fetchData, App, setCurrentYear } from "./service.js";
import { FAQ } from "./class.js";
import { shortHeader } from "./HTMLBlocks.js";

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// SET CURRENT YEAR IN FOOTER
setCurrentYear();

// CREATE HEADER
customElements.define("short-header", shortHeader);

// CREATE CONTENT FAQ
fetchData("FAQ.json", "GET").then((data) => {
  console.log("test");
  const faqArr = [...data];
  App.renderHTMLPart(faqArr, "container-faq", FAQ);
  const openCloseIcon = document.querySelectorAll(".bi");
  openCloseIcon.forEach((el) => el.addEventListener("click", openCloseArticle));
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// BACK ON PREVIOUSE PAGE
document.querySelector(".btn__back").addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});

// OPEN / CLOSE ANSWER
function openCloseArticle(e) {
  e.preventDefault();
  let parentLink;
  if (e.target.tagName === "path") {
    parentLink = e.target.parentElement;
    parentLink = parentLink.parentElement;
  } else {
    parentLink = e.target.parentElement;
  }
  const parentHeader = parentLink.parentElement;
  const articleAnswer = parentHeader.nextElementSibling;
  articleAnswer.classList.toggle("shown-Article");
  const btnOpenCloseAnswer = parentLink.children;
  [...btnOpenCloseAnswer].forEach((el) => el.classList.toggle("no-visible"));
}
