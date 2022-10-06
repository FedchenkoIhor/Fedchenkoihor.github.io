import { App } from "./service.js";
export class Team {
  constructor(teamData) {
    this.fullName = teamData.title;
    this.position = teamData.subtitle;
    this.desc = teamData.text;
    this.photo = teamData.imageUrl;
    this.photoAlt = teamData.title;
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
