// import { LitElement, css, html } from 'lit';
// import { customElement, state } from 'lit/decorators.js';
// // import { resolveRouterPath } from '../router';

// import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
// import '@shoelace-style/shoelace/dist/components/button/button.js';
// import '@shoelace-style/shoelace/dist/components/icon/icon.js';

// import '@shoelace-style/shoelace/dist/components/button/button.js';
// import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';


// @customElement('top-app-bar')
// export class TopAppBar extends LitElement {
//   @state()
//   private menuOpen = false;

//   private toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }

//   // For more information on using properties and state in lit
//   static styles = css`
//     :host {
//       color: var(--color-scheme-03);
//     }

//     .top-app-bar {
//       height: 48px;
//       padding: 8px 4px;
//       display: flex;
//       flex-direction: row;
//       align-items: center;
//     }

//     .heading { padding: 0 4px; font-size: 24px; }

//     .leading, .trailing1, .trailing2, .trailing3 {
//       height: 48px;
//       width: 48px;
//       padding: 8px;
//     }

//     header {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       background: var(--color-scheme-01);
//       color: var(--color-scheme-05);
//       padding: 0.5rem 1rem;
//     }

//     .leading {
//       display: flex;
//       align-items: center;
//     }

//     .heading {
//       font-family: var(--font-family-headers);
//       font-size: 1.5rem;
//     }
//   `;


//   render() {
//   return html`
//     <style>
//       .menu-container {
//         position: relative;
//         display: inline-block;
//       }

//       .menu-content {
//         display: none;
//         position: absolute;
//         top: 100%; /* Se despliega hacia abajo */
//         left: 0;
//         background-color: #2e5d34; /* verde de fondo */
//         border-radius: 8px;
//         padding: 8px 0;
//         min-width: 160px;
//         z-index: 10;
//       }

//       .menu-container.open .menu-content {
//         display: block;
//       }

//       .menu-item {
//         background-color: #f5e6d3; /* crema */
//         color: #f5e6d3; /* letras crema inicialmente */
//         padding: 10px 16px;
//         margin: 4px 8px;
//         border-radius: 6px;
//         cursor: pointer;
//         transition: all 0.3s;
//         text-align: left;
//       }

//       .menu-item:hover {
//         background-color: #f5e6d3; /* crema */
//         color: #2e5d34; /* verde */
//       }
//     </style>

//     <div class="menu-container ${this.menuOpen ? 'open' : ''}">
//       <!-- Botón del menú -->
//       <mwc-icon-button
//         icon="menu"
//         @click=${this.toggleMenu}>
//       </mwc-icon-button>

//       <!-- Opciones del menú -->
//       <div class="menu-content">
//         <div class="menu-item">Información</div>
//         <div class="menu-item">Historia</div>
//         <div class="menu-item">Imágenes</div>
//         <div class="menu-item">Contacto</div>
//       </div>
//     </div>
//   `;
//   }

import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

@customElement('top-app-bar')
export class TopAppBar extends LitElement {
  @state()
  private menuOpen = false;

  private toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  static styles = css`
    :host {
      display: block;
      color: white;
      font-size: 1.2rem;
      padding: 0 16px;
    }

    /* El botón del menú */
    sl-icon-button::part(base) {
      color: var(--color-scheme-03); /* Cambia el color del ícono */
      font-size: 24px; /* Opcional: ajusta tamaño si querés */
    }

    .menu-container {
      position: relative;
      display: inline-block;
    }

    .menu-content {
      display: none;
      position: absolute;
      top: 100%; /* se despliega hacia abajo */
      left: 0;
      background-color: #2e5d34; /* verde */
      border-radius: 8px;
      padding: 8px 0;
      min-width: 160px;
      z-index: 10;
    }

    .menu-container.open .menu-content {
      display: flex;
      flex-direction: column;
    }

    .menu-item {
      background-color: #2e5d34; /* verde */
      color: #f5e6d3; /* crema */
      padding: 10px 16px;
      margin: 4px 8px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      text-align: left;
    }

    .menu-item:hover {
      background-color: #f5e6d3; /* crema */
      color: #2e5d34; /* verde */
    }
  `;

  render() {
    return html`
      <div class="menu-container ${this.menuOpen ? 'open' : ''}">
        <!-- Botón del menú -->
        <sl-icon-button
          name="list"
          library="nqm-icons"
          @click=${this.toggleMenu}>
        </sl-icon-button>


        <!-- Opciones del menú -->
        <div class="menu-content">
          <div class="menu-item">Información</div>
          <div class="menu-item">Historia</div>
          <div class="menu-item">Imágenes</div>
          <div class="menu-item">Contacto</div>
        </div>
      </div>
    `;
  }
}
