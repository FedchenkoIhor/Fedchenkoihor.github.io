"use strict";

import { fetchData } from "./service.js";

// CLASS HEADER
export class mainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <button class="btn__mobile-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div class="container">
        <div class="title-box">
          <div class="logo-box">
            <img src="img/logo.png" alt="LOGO" class="logo-img" />
          </div>
          <h1>Decentralized Business<br />Solutions (DBS) Ecosystem</h1>
        </div>
        <div class="hero-box">
          <nav>
            <ul class="menu-items">
              <li class="menu-item">
                <a class="nav__link" href="#section--1">Features</a>
              </li>
              <li class="menu-item">
                <a class="nav__link" href="#section--2">Services</a>
              </li>
              <li class="menu-item">
                <a class="nav__link" href="#section--3">Team</a>
              </li>
              <li class="menu-item">
                <a class="nav__token" href="token.html">Tokenomics</a>
              </li>
              <li class="menu-item">Documents</li>
              <li class="menu-item">Buy B$K</li>
            </ul>
          </nav>
          <div class="hero text-box">
            <div class="line"></div>
            <p class="descr">
              The Decentralized Business Solutions (DBS) Ecosystem is the first
              globally inclusive, democratic, and competitive business
              Decentralized Finance (DeFi) platform on the Algorand Blockchain
              Network to enable worldwide environmental sustainability and
              equitable wealth distribution by facilitating investment capital,
              employment and decarbonization, while generating financial savings
              for businesses all over the world.
            </p>
            <button class="btn btn__sub btn--show-modal">SUBSCRIBE HERE</button>
            <button class="btn btn__map">ROAD MAP</button>

            <div class="soc-box">
              <p class="soc-title">FOLLOW US:</p>
              <ul class="soc-items socHero"></ul>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <video
        autoplay
        muted
        loop
        playsinline
        poster="video/goldentera.png"
        class="earth-img"
      >
        <source src="video/globe.webm" type="video/webm" />
        <source src="video/Globe-main.mp4" type="video/mp4" />
      </video>
      <video autoplay muted loop playsinline class="grid-img">
        <source src="video/Grid-wide.webm" type="video/webm" />
        <source src="video/Grid-wide.mp4" type="video/mp4" />
      </video>
      `;
  }
}

// CLASS FOOTER
export class mainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
      <div class="container container__footer">
        <div class="footer-box">
          <h4 class="footer-title" id="empty-title">EMPTY</h4>
          <ul class="footer menu-items">
            <li class="footer menu-item">
              <a href="FAQ.html" class="btnFAQ">FAQ</a>
            </li>
            <li class="footer menu-item">TERMS OF USE</li>
          </ul>
        </div>
        <div class="footer-box">
          <h4 class="footer-title">SOCIAL MEDIA / NEWS:</h4>
          <ul class="footer menu-items">
            <li id="footerFollowUs" class="footer menu-item active">
              FOLLOW US
            </li>
            <div class="soc-box footer">
              <ul class="soc-items socFooter"></ul>
            </div>
            <li class="footer menu-item btn--show-modal">SUB FOR NEWS</li>
          </ul>
        </div>
        <div class="footer-box">
          <h4 class="footer-title">CONTACT:</h4>
          <ul class="footer menu-items">
            <li class="footer menu-item btn--show-modal" id="helpCenter">
              HELP CENTER
            </li>
            <li class="footer menu-item">BUY B$K</li>
          </ul>
        </div>
        <p class="copyright">
          &copy; <span class="year"></span> DBS Ecosystem, All right reserved.
        </p>
      </div>

    `;
  }
}

// CLASS SHORT HEADER FOR FAQ AND NEWS
export class shortHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="title-box FAQ">
        <div class="logo-box">
          <img src="img/logo.png" alt="LOGO" class="logo-img" />
        </div>
        <h1 class="title-fqa">DBS Ecosystem &mdash; FAQ</h1>
      </div>
      <a href="" class="btn btn__back">&larr; BACK</a>
    `;
  }
}

// MODAL WINDOW

export class modalWindow extends HTMLElement {
  static initModal() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const btnCloseModal = document.querySelector(".btn--close-modal");
    const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
    const formModal = document.getElementById("subscribeForm");
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

    formModal.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetchData(
        "https://jsonplaceholder.typicode.com/posts",
        "POST",
        Object.fromEntries(formData)
      );
      closeModal();
    };
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="modal hidden">
      <button class="btn--close-modal">&times;</button>
      <h2 class="modal__header">Subscribe on our newsletters</h2>
      <form id="subscribeForm" class="modal__form">
        <label>Email Address</label>
        <input type="email" required="true" name="email" class="modal-input" />
        <label class="modal-add">Subject</label>
        <input type="text" name="subject" class="modal-add modal-input" />
        <label class="modal-add">Question</label>
        <input type="text" name="question" class="modal-add modal-input" />
        <button class="btn btn__ok">Subscribe</button>
      </form>
    </div>
    <div class="overlay hidden"></div>
    `;
  }
}
