import { css } from 'lit';

import { bootstrap_grid } from '../styles/bootstrap';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts

export const styles = [
  bootstrap_grid,
  css`
    main {
      flex-grow: 1; /* Permite que el contenido principal ocupe todo el espacio disponible */
      padding: var(--sl-spacing-medium);
    }

    .background-image {
        position: relative; /* Necesario para posicionar el pseudo-elemento */
        height: 200px;
        background-image: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/assets/background.png'); /* Pon la imagen aquí */
        background-size: cover;
        background-position: center;
    }

    .background-image::before {
        content: ''; /* Los pseudo-elementos requieren la propiedad content */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* El gradiente va desde tu color de fondo hasta transparente */
        background: linear-gradient(to bottom, #314427, transparent);
    }

    h1, h2, h3, h4, h5, h6 { font-family: var(--font-family-headers); }

    top-app-bar sl-icon-button::part(base) {
      color: var(--color-scheme-03);
      font-size: 24px;
      padding: 12px;
    }

    .page-wrapper {
      background-color: var(--color-scheme-01);
      display: flex;
      flex-direction: column;
      min-height: 100vh; /* Ocupa como mínimo el 100% de la altura de la ventana */

    }



    section {
      width: 100%;
      margin-bottom: var(--sl-spacing-medium);
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

`];
