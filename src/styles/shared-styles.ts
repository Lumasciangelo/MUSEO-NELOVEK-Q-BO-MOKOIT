import { css } from 'lit';

import { bootstrap_grid } from '../styles/bootstrap';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = [
  bootstrap_grid,
  css`
    @media(min-width: 1000px) {
      sl-card {
        max-width: 70vw;
      }
    }

    main {
      margin-top: 34px;
      padding: 12px;
    }

    .background-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 33vh;
      background-image:
        linear-gradient(to bottom, var(--color-scheme-01), rgba(49, 68, 39, 0) 100%),
        url('/assets/background.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
    }

    h1, h2, h3, h4, h5, h6 { font-family: var(--font-family-headers); }

    top-app-bar sl-icon-button::part(base) {
      color: var(--color-scheme-03);
      font-size: 24px;
      padding: 12px;
    }
`];