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
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
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
