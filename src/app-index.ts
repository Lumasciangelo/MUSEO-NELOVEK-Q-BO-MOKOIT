import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './components/top-app-bar';
import './styles/global.css';
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
    }
    .header {
      background-color: #314427; /* verde */
      padding: 8px 0; /* Opcional, para que no quede tan pegado */
    }
    /*main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
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
    <div class="header">
      <top-app-bar></top-app-bar>
    </div>

    <main>
      ${router.render()}
    </main>

    <footer>
      <p>&copy; 2025 Museo Nelovek Qobo Mokoit</p>
    </footer>
  `;
  }

}
