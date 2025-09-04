import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './components/top-app-bar';
import './styles/global.css';
import './pages/app-chatbot/app-chatbot';
import './pages/app-pages/app-encuentros';
import { router } from './router';

import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

registerIconLibrary('nqm-icons', {
  resolver: name => `/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/bootstrap-icons/${name}.svg`,
});

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    section {
      width: 100%;
    }

    .hero-section {
      min-height: 100vh;
    }

    #chatbot-section {
      min-height: 100vh;
      scroll-behavior: smooth;
    }

    footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1rem;
    }

    .header {
      background-color: #314427; /* verde */
      padding: 8px 0; /* Opcional, para que no quede tan pegado */
    }

    /*main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 100px; /* espacio entre secciones */
    }*/

  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });
  }

  render() {
    return html`
      <!-- Sección principal -->
      <section class="hero-section">
        <app-home></app-home>
      </section>

      <!-- Sección del chatbot -->
      <section id="chatbot-section">
        <app-chatbot></app-chatbot>
      </section>

      <!-- Pagina de encuentros -->
        <app-encuentros></app-encuentros>

      <!-- Footer -->
      <footer>
        <p>&copy; 2025 Museo Nelovek Qobo Mokoit</p>
      </footer>
    `;
  }
}
