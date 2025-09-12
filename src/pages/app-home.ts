import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

import { styles } from '../styles/shared-styles';

import '../components/app-viewer-3d';

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
        background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/fondo_museo.png') no-repeat center center;
        background-size: cover;
        background-position: center top;
        color: var(--color-scheme-05);
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

      .background-image {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/fondo_museo.png') no-repeat center center;
        background-size: cover;
        z-index: -1;
      }

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
         /*margin: 1rem auto;*/
         /*max-width: 90%;*/
         box-shadow: 0 2px 6px rgba(0,0,0,0.15);
       }

       .background-image {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('../docs/assets/background.png') no-repeat center center;
        background-size: cover;
        z-index: -1;
      }

      .button-icon {
        width: 80px; /* Ajusta el tamaño que necesites */
        height: 80px;
        margin-right: 8px; /* Espacio entre icono y texto */
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

      /* Línea vertical entre logo y texto */
      .hero-divider {
        width: 2px; /* grosor de la línea */
        height: 60px; /* misma altura que el logo */
        background-color: black; /* color de la línea */
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

  render() {
    return html`

    <div class="page-wrapper">


      <!-- Menú lateral -->
      <top-app-bar></top-app-bar>

      <main>

          <section>
            <div class="hero-card">
              <div class="hero-header">
                <img src="/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/logo_verde.svg" alt="Logo Museo" class="hero-logo" />
                <div class="hero-divider"></div>

                <div class="hero-title">
                  <h1>MUSEO NELOVEK<br>Q\u0308OBO’ MOKOIT</h1>
                </div>
              </div>

              <div class="hero-description">
                <p>
                  El Museo de Historia y Arqueología Originaria forma parte de un programa de Rescate y Revalorización de la identidad del Pueblo Mocoví de Colonia Dolores que está llevando adelante la Comisión Aborigen Aim Mokoilek con el asesoramiento de un equipo de investigación de la Universidad Nacional de Rosario.
                </p>
              </div>
            </div>
          </section>
          <section>
            <app-viewer-3d src="/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/3d/vasija01.glb"></app-viewer-3d>
          </section>


            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        ¡Compartir el museo!
                      </sl-button>`
              : null}

      </main>

      <div class="main-buttons-wrapper">
        <a href="">
          <div class="button-label">
            <img src="/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/persona_crema.svg" alt="Visita libre" class="button-icon">
            <div class="label">Visita libre</div>
          </div>
        </a>
        <a href="">
          <div class="button-label">
            <img src="/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/auriculares_crema.svg" alt="Visita libre" class="button-icon">
            <div class="label">Visita guiada</div>
          </div>
        </a>
      </div>



      <div class="background-image"></div>
    </div>
    <footer>
      <p>&copy; 2025 Museo Nelovek Q\u0308obo’ Mokoit</p>
    </footer>

    `;
  }
}
