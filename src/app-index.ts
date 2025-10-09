import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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
