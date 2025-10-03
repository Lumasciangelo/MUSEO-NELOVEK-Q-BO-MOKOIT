import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
// import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import '../../components/app-viewer-3d';
import '../../components/app-carrusel-v2';

import { styles } from '../../styles/shared-styles';

@customElement('app-panel-hornitos')
export class AppPanelHornitos extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = `NELOVEK Q\u0308OBO’ MOKOIT`;

  static styles = [
    styles,
    css`
      sl-drawer::part(panel) {
        width: 100% !important;
        height: 100% !important;
        background: url('assets/fondo_museo.png') no-repeat center center;
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
        height: 120px;
        width: auto;
      }

      /* Línea vertical entre logo y texto */
      .hero-divider {
        width: 2px; /* grosor de la línea */
        height: 120px; /* misma altura que el logo */
        background-color: black; /* color de la línea */
      }

      .hero-title h1,
      .hero-title h2 {
        margin: 0;
        font-family: var(--font-family-body);
        color: var(--color-scheme-06);
        font-weight: 400;
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

      section {color: #fff; }

      .code-preview {
        position: relative;
        border-radius: 3px;
        background-color: var(--sl-color-neutral-50);
        margin-bottom: 1.5rem;
      }

      .code-preview__preview {
        position: relative;
        border: solid 1px var(--sl-color-neutral-200);
        border-bottom: none;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-color: var(--sl-color-neutral-0);
        min-width: 20rem;
        max-width: 100%;
        padding: 1.5rem 3.25rem 1.5rem 1.5rem;
      }

  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }


  render() {
    return html`
      <top-app-bar title="Los Hornitos"></top-app-bar>
      <div class="page-wrapper">
        <!-- Menú lateral -->

        <main>
          <section>
            <p style="text-align: center;">Katalag\u0308anakoki</p>
            <p style="text-align: center;">Los Hornitos</p>
          </section>

          <section>
            <app-carousel-v2 .images=${['assets/los-hornitos-01.jpg','assets/los-hornitos-02.jpg','assets/los-hornitos-03.jpg']}></app-carousel-v2>
            <p>Katalagana  ́ kí ibatken longueteguet
            nounatagak labá abiagaik besa'ni da lemanagá
            lachegué litibagaik iabateta dua
            besan da qogoik letaa' lachegué, lenagaté
            katalaganakoki.<br>
            Nouenatagagué, tomo'li' lishiguiniken laduaga labá ka qom.
            </p>
            <p>
              Los hornos son estructuras de tierra cocida, características de la cuenca del río Salado
            y del paleocauce del Paraná. Son conocidos popularmente como “Los Hornitos”.
            Fueron cavados a partir de la superficie del suelo hasta la profundidad que se puede
            alcanzar con el brazo extendido. Tienen forma de vasija enterrada con un pequeño
            cuello.
            </p>
          </section>
          <section>
            <app-carousel-v2 .images=${['assets/los-hornitos-04.jpg','assets/los-hornitos-05.jpg']}></app-carousel-v2>
            <p>
            Ve quen cua qadata kam vieken. Cha'lónapontatá togen lashik na lavel asö iavat ka lalegagaiken lashik na la'ba.
            </p>
            <p>
            Generalmente se presentan aislados, aunque se han registrado casos en que se
            encuentran agrupados más de diez. La coloración de las paredes es rojiza, y contrasta
            levemente con el color gris claro a blanquecino del suelo.
            </p>
          </section>
          <section>
            <p>
            Nagta'ken nua talaganakokí labi  ́qataganaguie lai'ken nanaqe norek, nonaqe pa'íagá
            iabiagat. Beken ropoqó na la'ba. Abekén reqoteken ligue' palaqaté, li'iaganagaté,
            qoen beken poqo lail, kená. Label beken qoen betashim kenúa lail, nanaque label netá
            na logueteguet, na lishi  ́ shimá, na labá qom iabatetá lekaik label, lekalek alap iaduaga
            qogue iubiragué loló palaqaté.
            </p>
            <p>
            Los Hornitos pudieron haber sido utilizados .. para cocinar, mantener el fuego, hornear
            la cerámica, etc. Constituyen el molde externo de una excavación en la cual se produjo
            una combustión de alta temperatura que compactó, calcinó y en algunos casos agrietó
            el terreno circundante. Ocasionalmente se observan marcas realizadas con algún
            instrumento durante la excavación original y restos de carbón en el interior o en
            superficie. Se manifiestan como estructuras ovoidales de tierra cocida con altura y
            diámetro máximo de 60 a 75 cm y una boca en la parte superior, de contorno circular,
            de 50 a 70 cm.
            </p>
          </section>
          <section>
            <h2>Najo velec lomaté kena raa' nuantá talanajki</h2>
            <h3>REGISTRO ARQUEOLÓGICO ASOCIADO A SITIOS DE HORNOS</h3>
            <app-carousel-v2 .images=${['assets/DSC08640.JPG','assets/DSC08641.JPG','assets/DSC08642.JPG','assets/DSC08643.JPG']}></app-carousel-v2>
            <p>Kená lomaté nua katalagana  ́ ki abeken secá nanatagat abeken a'bié iseguiak pe'nek, tagkí lail, qaril qoen.
              <br>Na loma' katalanakokí “Latagot Laleagai” nanatgate' tagkí lail na'menetá toc lashik.
            </p>
              <p>Aunque generalmente, en el contexto de los hornos no se ha hallado otro material
              arqueológico, en algunos casos se han encontrado restos de cerámica, fauna y lítico
              alrededor de los mismos. No obstante se ha excavado material al interior de los
              mismos.
            </p>
            <p>
                  En el sitio de Hornitos “Laguna La Blanca” se registraron fragmentos de cerámica,
              entre ellos bordes con diferentes tipos de decoración y pintura roja.
              En el sitio arqueológico El Ombusal o Nakamblaisat cerca del hallazgo de hornitos se
              encontraron fragmentos de cerámica, pertenecientes a una misma vasija que ha
              podido ser reconstruida.
            </p>
            <app-viewer-3d src="/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/3d/vasija01.glb"></app-viewer-3d>
            <br>
            <app-carousel-v2 .images=${['assets/puntas-de-flecha-02.jpg','assets/LLB-Museo-La-Criolla-7719.JPG','assets/LLB-Museo-La-Criolla-7703.jpg']}></app-carousel-v2>
          </section>
          <section>
            <p>Nua lómaté katalagana  ́ki kena recoiagala' la'ba nanatkoté, qopé, qaril abiol, lo'gosó Na raa' nua nañatqate
              seqogokipi ioqotaam, secá timogose.<br>
              Nua nenatkate se iachagané, nouenatagué qom di nakamblaisat abie kidi lail duá katalagana ki nanatagat loló lo'gosó.
            </p>
            <p>
              Entre el material lítico asociado a sitios de hornos, en todo el territorio argentino, se
              han hallado mayormente hachas, bolas de boleadoras, elementos de molienda y
              puntas de proyectil. En la provincia de Santa Fe los hallazgos de estos materiales son
              poco frecuentes por la ausencia de canteras de piedra y, generalmente los
              fragmentos encontrados no evidencian procesos de transformación. Sin embargo en
              el contexto de un conjunto de tres Hornos hallados en el Sitio “El Ombusal” se
              encontró una punta de flecha.
            </p>
          </section>


        </main>

        <div class="background-image"></div>
      </div>

      <footer>
        &copy; 2025 Museo Nelovek Q\u0308obo’ Mokoit
      </footer>
    `;
  }
}
