import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
@customElement('top-app-bar')
export class TopAppBar extends LitElement {


  static styles = css`
    :host {
      color: var(--color-scheme-03);
    }

    .top-app-bar {
      height: 48px;
      padding: 8px 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .heading { padding: 0 4px; font-size: 24px; }

    .leading, .trailing1, .trailing2, .trailing3 {
      height: 48px;
      width: 48px;
      padding: 8px;
    }



  `;

  render() {
    return html`

      <header part="base" class="top-app-bar">
        <slot name="leading" class="leading"></slot>
        <slot name="heading" class="heading"></slot>
        <slot name="trailing1" class="trailing1"></slot>
        <slot name="trailing2" class="trailing2"></slot>
        <slot name="trailing3" class="trailing3"></slot>
      </header>

    `;
  }
}
