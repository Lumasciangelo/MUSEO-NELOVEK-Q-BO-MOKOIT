import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

@customElement('top-app-bar')
export class TopAppBar extends LitElement {

  static styles = css`
    sl-drawer::part(panel) {
        width: 100% !important;
        height: 100% !important;
        background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/background.png') no-repeat center center;
        background-size: cover;
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
    <div class="page-wrapper">
      <div class="background-image"></div>
      <div class="container">
          <div class="row">
            <div class="col">

            <!-- Menú lateral -->
                <sl-icon-button name="list" label="Menú" class="menu-toggle" @click="${() => this.toggleMenu()}"></sl-icon-button>

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
