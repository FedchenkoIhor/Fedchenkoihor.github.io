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
  static renderHTMLPart(arrData, id, nameClass, template = false, n) {
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

// SET CURRENT YEAR IN FOOTER
export function setCurrentYear() {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}
