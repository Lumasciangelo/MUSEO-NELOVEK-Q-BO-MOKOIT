import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-encuentros')
export class AppEncuentros extends LitElement {

  static styles = css`
    .encuentros-section {
      padding: 2rem;
      background-color: var(--color-scheme-04);
      max-width: 900px;
      margin: 0 auto;
    }

    .encuentros-title {
      font-family: var(--font-family-headers);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-scheme-01);
      text-align: center;
    }

    .encuentros-subtitle {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      color: var(--color-scheme-06);
    }

    .encuentros-text {
      font-family: var(--font-family-body);
      font-size: 0.9rem;
      line-height: 1.4;
      color: var(--color-scheme-06);
      margin-bottom: 1rem;
    }

    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }

    .carousel img {
      max-width: 90%;
      height: auto;
      border-radius: 8px;
      scroll-snap-align: center;
    }

    .carousel button {
      background-color: rgba(0,0,0,0.3);
      color: var(--color-scheme-05);
      border: none;
      border-radius: 50%;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .carousel-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media(max-width: 768px) {
      .encuentros-title {
        font-size: 1.2rem;
      }
      .encuentros-subtitle {
        font-size: 0.9rem;
      }
    }
  `;

  private currentIndex = 0;
  private images = [
    '/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/screenshot1.png', // reemplaza con tus imágenes reales
    '/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/screenshot2.png'
  ];

  private prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.requestUpdate();
  }

  private next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.requestUpdate();
  }

  render() {
    return html`
      <section class="encuentros-section">
        <h2 class="encuentros-title">Vacaciones de invierno</h2>
        <h3 class="encuentros-subtitle">ENCUENTROS INESPERADOS</h3>
        <p class="encuentros-text">
          En estas vacaciones de invierno, el equipo de mokoilek presentará una serie de actividades,
          recorridos y talleres especialmente pensados para los jóvenes y el público en general,
          con el objetivo de descubrir los mundos inesperados de la cultura mokovi.
        </p>
        <p class="encuentros-text">
          Del lunes 8 de agosto al domingo 7 de septiembre
        </p>

        <div class="carousel-container">
          <button @click="${this.prev}">&lt;</button>
          <div class="carousel">
            <img src="${this.images[this.currentIndex]}" alt="Imagen de encuentro">
          </div>
          <button @click="${this.next}">&gt;</button>
        </div>
      </section>
    `;
  }
}
