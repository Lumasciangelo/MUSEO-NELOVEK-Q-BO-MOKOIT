import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = `NELOVEK Q\u0308OBO’ MOKOIT`;

  static styles = [
    styles,
    css`
      sl-drawer::part(panel) {
        width: 100% !important;
        height: 100% !important;
        background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/background.png') no-repeat center center;
        background-size: cover;
        color: var(--color-scheme-05);
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

      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      .main-buttons-wrapper { display: flex; flex-direction: row; justify-content: center; position: relative;}
      /*.main-buttons-wrapper sl-button { margin: var(--sl-spacing-3x-large); }*/
      .main-buttons-wrapper a { text-decoration:  none; }

      .button-label {
        color: var(--color-scheme-03);
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        align-items: center;
        margin: var(--sl-spacing-large);
      }
      .button-label sl-icon { font-size: 48px; }

      .hero-card {
        background-color: var(--color-scheme-03); /* tu color definido */
        padding: 1rem;
        margin: 1rem auto;
        max-width: 90%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      }

      .hero-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .hero-logo {
        height: 60px;
        width: auto;
      }

      .hero-title h1,
      .hero-title h2 {
        margin: 0;
        font-family: var(--font-family-headers);
        color: var(--color-scheme-06);
      }

      .hero-title h1 {
        font-size: 1.2rem;
      }

      .hero-title h2 {
        font-size: 1rem;
      }

      .hero-description {
        font-family: var(--font-family-body);
        font-size: 0.9rem;
        line-height: 1.4;
        color: var(--color-scheme-06);
      }


  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Museo ' + this.message,
        text: '¡Visita el museo!',
        url: 'https://museonelovekqobomokoit.com.ar',
      });
    }
  }

  toggleMenu() {
    const drawer = this.renderRoot.querySelector('#menuDrawer') as any;
    if (drawer.open) {
      drawer.hide();
    } else {
      drawer.show();
    }
  }

  closeMenu() {
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

              <main>
              <div id="welcomeBar">
                <div class="hero-card">
                  <div class="hero-header">
                    <img src="/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/icono-inicio.png" alt="Logo Museo" class="hero-logo" />
                    <div class="hero-title">
                      <h1>MUSEO NELOVEK <br> QOBO’ MOKOIT</h1>
                    </div>
                  </div>

                <div class="hero-description">
                  <p>
                    El Museo de Historia y Arqueología Originaria forma parte de un programa de Rescate y Revalorización de la identidad del Pueblo Mocoví de Colonia Dolores que está llevando adelante la Comisión Aborigen Aim Mokoilek con el asesoramiento de un equipo de investigación de la Universidad Nacional de Rosario.
                  </p>
                </div>
              </div>

                  ${'share' in navigator
                    ? html`<sl-button slot="footer" variant="default" @click="${this.share}">
                              <sl-icon slot="prefix" name="share"></sl-icon>
                              Share this Starter!
                            </sl-button>`
                    : null}
                </sl-card>



                <!--<sl-button href="${resolveRouterPath('about')}" variant="primary">Navigate to About</sl-button>-->
              </div>
            </main>

            <footer>
              <div class="main-buttons-wrapper">

                <a href="">
                  <div class="button-label">
                    <sl-icon name="person-walking" library="nqm-icons"></sl-icon>
                    <div class="label">Visita libre</div>
                  </div>
                </a>
                <a href="">
                  <div class="button-label">
                    <sl-icon name="headphones" library="nqm-icons"></sl-icon>
                    <div class="label">Visita guiada</div>
                  </div>
                </a>

              </div>

            </footer>
          </div>
        </div>
      </div>

    </div>

    `;
  }
}
