import { App } from "./service.js";
export class News {
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
