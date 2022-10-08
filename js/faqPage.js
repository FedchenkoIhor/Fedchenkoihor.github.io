"use strict";

import { fetchData, App, shortHeader, setCurrentYear } from "./service.js";

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

class FAQ {
  constructor(faqData) {
    this.question = faqData.question;
    this.answer = faqData.answer;
  }
  createContentTemplate() {
    const content = `
    <div class="faq-card">
      <div class="faq-header">
        <a href="" class="open-question">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-circle no-visible"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
            />
          </svg>
        </a>
        <h2 class="subtitle faq-question">${this.question}</h2>
      </div>
      <article class="faq-answer">${this.answer}</article>
  </div>
    `;
    return App.createHTMLTemplate(content);
  }
}

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
