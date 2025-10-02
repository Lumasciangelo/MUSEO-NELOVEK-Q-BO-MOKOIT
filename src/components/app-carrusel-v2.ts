import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// importa módulos de Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@customElement('app-carousel-v2')
export class AppCarouselV2 extends LitElement {
  @property({ type: Array }) images: string[] = [];

  static styles = css`
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
  `;

  firstUpdated() {
    // swiper element
    const swiperEl: any = this.renderRoot.querySelector('swiper-container');

    // swiper parameters
    /*
    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };


    if (swiperEl) {
      Object.assign(swiperEl, swiperParams);
      // and now initialize it
      swiperEl.initialize();
    }
*/

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

    // now we need to assign all parameters to Swiper element
    swiperEl.initialize();



  }

  render() {
    return html`
      <!-- Add init="false" -->
      <swiper-container>
        <!-- Slides -->
        ${this.images.map(
        (src) => html`
          <swiper-slide>
            <img src="${src}" alt="slide" />
          </swiper-slide>
        `
        )}
      </swiper-container>

    `;
  }
}
