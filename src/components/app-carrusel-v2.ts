import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

// importa módulos de Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@customElement('app-carousel-v2')
export class AppCarouselV2 extends LitElement {
  @property({ type: Array }) images: string[] = [];

  @query('.swiper-button-next')
  swiperButtonNext!: HTMLElement;

  @query('.swiper-button-prev')
  swiperButtonPrev!: HTMLElement;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: auto;
    }
    swiper-container {
      display: block;
      width: 100%;
      height: 300px;
      position: relative;
      /*max-height: 400px; /* o lo que quieras */
      width: calc(100% - 40px);
    }
    swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      /*max-height: 400px;*/
      object-fit: cover;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: black;
      align-self: center;
    }
    .swiper-pagination {
      color: white;
    }

    .carousel-wrapper {
      display: flex;
      flex-direction: row;
      background-color: var(--color-scheme-03);
      color: black;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  `;



  firstUpdated() {
    // swiper element
    const swiperEl: any = this.renderRoot.querySelector('swiper-container');

    Object.assign(swiperEl, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 3000 },
      breakpoints: {
        576: {
          slidesPerView: 1,
          //spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          //spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          //spaceBetween: 50,
        },
      },
      navigation: {
        nextEl: this.swiperButtonNext,
        prevEl: this.swiperButtonPrev,
        clickable: true,
      },
      pagination: {
        el: this.renderRoot.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });

    // now we need to assign all parameters to Swiper element
    swiperEl.initialize();





  }

  // console.log("button-next", this.swiperButtonNext);

  render() {

    return html`
      <!-- Add init="false" -->
      <!-- 👇 Botones de navegación -->
      <div class="carousel-wrapper">
        <div class="swiper-button-prev"><sl-icon name="chevron-left"></sl-icon></div>
        <swiper-container>
          <!-- Slides -->
          ${this.images.map(
          (src) => html`
            <swiper-slide>
              <img src="${src}" alt="slide" />
            </swiper-slide>
          `
          )}



          <!-- 👇 Paginación -->
          <div class="swiper-pagination"></div>
        </swiper-container>
        <!-- 👇 Botones de navegación -->
        <div class="swiper-button-next"><sl-icon name="chevron-right"></sl-icon></div>
      </div>

    `;
  }
}
