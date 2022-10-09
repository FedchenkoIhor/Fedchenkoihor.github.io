// SET CURRENT YEAR IN FOOTER
export function setCurrentYear() {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

// GET / SEND DATA FROM / TO SERVER
export async function fetchData(url, method, data) {
  console.log(url, method);
  return await fetch(url, {
    method: `${method}`,
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((message) => console.log(message));
}

// MAIN CLASS FOR RENDERING DATA
export class App {
  static renderHTMLPart(arrData, id, nameClass, template = false, n = 0) {
    const fragment = document.createDocumentFragment();
    let arr = [];
    template
      ? (arr = arrData.filter(function (e) {
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
