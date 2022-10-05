"use strict";

// SET CURRENT YEAR IN FOOTER
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// FUNCTION SHOW / HIDE ELEMENT
const elemShowHidde = (elem, event) => {
  elem.style.display = event;
};

// GET / SEND DATA FROM / TO SERVER
async function fetchData(url, method, data) {
  return await fetch(url, {
    method: `${method}`,
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

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
const xmlns = "http://www.w3.org/2000/svg";
const width = "16";
const height = "16";
const fill = "currentColor";
const viewBox = "0 0 16 16";

const socialIcons = [
  {
    name: "Twitter",
    class: "bi bi-twitter",
    d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
  },
  {
    name: "Reddit",
    class: "bi bi-reddit",
    d: "M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z",
    d1: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z",
  },
  {
    name: "Linkedin",
    class: "bi bi-linkedin",
    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
  {
    name: "Telegram",
    class: "bi bi-telegram",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
  },
  {
    name: "Discord",
    class: "bi bi-discord",
    d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
  },
  {
    name: "Facebook",
    class: "bi bi-facebook",
    d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
  },
];

class Social {
  constructor(socialIcon) {
    this.name = socialIcon.name;
    this.class = socialIcon.class;
    this.d = socialIcon.d;
    this.d1 = socialIcon.d1;
  }
  createContentTemplate(flagName = false) {
    const content = `<li class="soc-item">
    <a href="" class="soc-icon"
      ><svg
        xmlns="${xmlns}"
        width="${width}"
        height="${height}"
        fill="${fill}"
        class="${this.class}"
        viewBox="${viewBox}"
      >
        <path
          d="${this.d}"
        />
        ${this.d1 ? '<path d="' + this.d1 + '"/>' : ""}
      </svg>
      ${
        flagName
          ? "<span class='account'>" + this.name + "_account </span>"
          : ""
      }
    </a>
  </li> `;
    return App.createHTMLTemplate(content);
  }
}

class App {
  static renderHTMLPart(arrData, id, nameClass, template = false, n) {
    const fragment = document.createDocumentFragment();
    let arr = [];
    template
      ? (arr = socialIcons.filter(function (e) {
          return this.indexOf(e.name) >= 0;
        }, template))
      : (arr = [...arrData]);
    arr.slice(-n).forEach((el) => {
      fragment.appendChild(new nameClass(el).createContentTemplate(template));
    });
    const el = document.querySelector(`.${id}`);
    el.appendChild(fragment);
  }
  static createHTMLTemplate(str) {
    const template = document.createElement("template");
    template.innerHTML = str;
    return template.content;
  }
}

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
fetchData("team.json", "GET").then((data) => {
  const teamArr = [...data];
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

class Team {
  constructor(teamData) {
    this.fullName = teamData.fullName;
    this.position = teamData.position;
    this.desc = teamData.desc;
    this.photo = teamData.photo;
    this.photoAlt = teamData.photoAlt;
  }
  createContentTemplate() {
    const content = `
        <div class="swiper-slide">
          <div class="team-card">
            <div class="team-desc">
              <p class="name">${this.fullName}</p>
              <p class="position">${this.position}</p>
              <p class="team-about">${this.desc}</p>
            </div>
            <div class="team-img-box">
              <img
                src="${this.photo}"
                alt="${this.photoAlt}"
                class="team-img"
              />
            </div>
          </div>
        </div>`;
    return App.createHTMLTemplate(content);
  }
}

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

class News {
  constructor(newsData) {
    this.title = newsData.title;
    this.short = newsData.short;
    this.article = newsData.article;
    this.photo = newsData.photo;
    this.photoAlt = newsData.photoAlt;
    this.newsId = newsData.newsId;
  }
  createContentTemplate() {
    const content = `
    <div class="swiper-slide">
      <div class="news-card">
        <div class="news-img-box">
          <img
            src="${this.photo}"
            alt="${this.photoAlt}"
            class="news-img"
          />
        </div>
        <div class="news-desc">
          <p class="title-news">${this.title}</p>
          <p class="news-short">${this.short}</p>
          <p class="more more__news">Read more...</p>
        </div>
      </div>
    </div>
    `;
    return App.createHTMLTemplate(content);
  }
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// MENU NAVIGATION
// SMOOTH SCROLING TO ALL MENU ITEMS
const navLinks = document.querySelector(".menu-items");
navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    closeOpenMenu();
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

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

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
