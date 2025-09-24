import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './components/top-app-bar';

// Import our custom CSS
// import './styles/scss/styles.scss';

// Import all of Bootstrap’s JS
// import * as bootstrap from 'bootstrap'

import './styles/main.scss'; // ¡Importa aquí tu archivo SASS!

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
    return router.render();
  }
}
