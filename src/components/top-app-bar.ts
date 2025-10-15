import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import { resolveRouterPath } from '../router';

@customElement('top-app-bar')
export class TopAppBar extends LitElement {

  static styles = css`
    sl-drawer::part(panel) {
        width: 100% !important;
        height: 100% !important;
        background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/fondo_museo.png') no-repeat center center;
        background-size: cover;
        background-position: center top;
        color: var(--color-scheme-05);
    }

    .menu-toggle {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 1000;
      font-size: 1.8rem;
      color: var(--color-scheme-05);
      background: rgba(0,0,0,0.3);
      border-radius: 50%;
    }

    .fullscreen-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 2rem;
    }

    .fullscreen-menu a {
      font-size: 1.5rem;
      color: var(--color-scheme-05);
      border: 2px solid var(--color-scheme-05);
      padding: 0.8rem 2rem;
      text-decoration: none;
      text-align: center;
      transition: all 0.3s;
      width: 70%;
      max-width: 300px;
    }

    .fullscreen-menu a:hover {
      background: var(--color-scheme-05);
      color: var(--color-scheme-01);
    }

    .header {
      padding: 8px 4px;
      background-color: var(--color-scheme-03);
      height: 48px;
      display: flex;
    }
    .leading-icon {
      font-size: 24px;
      margin-right: 8px;
      padding: 12px;
      align-self: center;
      line-height: 1rem;
    }
    .trailing-icon {
      font-size: 24px;
      margin-left: 8px;
      padding: 12px;
      align-self: center;
      line-height: 1rem;
    }
    .title {
      display: flex;
      align-self: center;
      margin-right: auto;
      margin-left: auto;
      font-size: 30px;
    }

  `;

  private toggleMenu() {
    const drawer = this.renderRoot.querySelector('#menuDrawer') as any;
    drawer.open ? drawer.hide() : drawer.show();
  }

  private closeMenu() {
    const drawer = this.renderRoot.querySelector('#menuDrawer') as any;
    drawer.hide();
  }

  render() {
    return html`
      <header class="header">
        <div class="leading-icon"><a href="${resolveRouterPath()}" ><sl-icon name="logo_verde" library="nqm-icons"></sl-icon></a></div>
        <div class="title">${this.title}</div>
        <div class="trailing-icon"><sl-icon name="menu_verde" library="nqm-icons"></sl-icon></div>
      </header>

      <!-- Menú lateral -->
      <!--<sl-icon-button name="list" label="Menú" class="menu-toggle" @click="${() => this.toggleMenu()}"></sl-icon-button>-->

      <sl-drawer id="menuDrawer" placement="end" no-header>
          <nav class="fullscreen-menu">
          <a href="/informacion" @click="${this.closeMenu}">INFORMACIÓN</a>
          <a href="/historia" @click="${this.closeMenu}">HISTORIA</a>
          <a href="/imagenes" @click="${this.closeMenu}">IMÁGENES</a>
          <a href="/contacto" @click="${this.closeMenu}">CONTACTO</a>
          </nav>
      </sl-drawer>
    `;
  }
}
