import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// importa módulos de Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();  // esto registra <swiper-container> y <swiper-slide> como elementos web. :contentReference[oaicite:0]{index=0}

// import swiperCss from 'swiper/css?inline';
// import swiperNavCss from 'swiper/css/navigation?inline';
// import swiperPagCss from 'swiper/css/pagination?inline';

@customElement('app-carousel')
export class AppCarousel extends LitElement {
  @property({ type: Array }) images: string[] = [];

  static styles = [
  // css`${unsafeCSS(swiperCss)}`,
  // css`${unsafeCSS(swiperNavCss)}`,
  // css`${unsafeCSS(swiperPagCss)}`,
  css`
    :host {
      display: block;
      width: 100%;
      height: auto;
    }
    swiper-container {
      display: block;
      width: 100%;
      height: 300px; /* o lo que quieras */
    }
    swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }

          .swiper-button-prev {
            background-image: url("/box-arrow-in-left.svg");
          }

          .swiper-button-next {
            background-image: url("/box-arrow-in-right.svg");
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
  `];

  firstUpdated() {
    const swiperEl: any = this.renderRoot.querySelector('swiper-container');

    Object.assign(swiperEl, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        nextEl: this.renderRoot.querySelector('.swiper-button-next'),
        prevEl: this.renderRoot.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: this.renderRoot.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });

    swiperEl.initialize();
  }

  render() {
    return html`
      <swiper-container>
        ${this.images.map(
          (src) => html`
            <swiper-slide>
              <img src="${src}" alt="slide" />
            </swiper-slide>
          `
        )}
        <!-- 👇 Botones de navegación -->
        <div class="swiper-button-prev">A</div>
        <div class="swiper-button-next">B</div>
        <!-- 👇 Paginación -->
        <div class="swiper-pagination"></div>
      </swiper-container>
    `;
  }
}
