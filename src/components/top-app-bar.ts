// import { LitElement, css, html } from 'lit';
// import { customElement, state } from 'lit/decorators.js';

// import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// @customElement('top-app-bar')
// export class TopAppBar extends LitElement {
//   @state()
//   private menuOpen = false;

//   private toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }

//   static styles = css`
//     :host {
//       display: block;
//       color: white;
//       font-size: 1.2rem;
//       padding: 0 16px;
//     }

//     /* El botón del menú */
//     sl-icon-button::part(base) {
//       color: var(--color-scheme-03); /* Cambia el color del ícono */
//       font-size: 24px; /* Opcional: ajusta tamaño si querés */
//     }

//     .menu-container {
//       position: relative;
//       display: inline-block;
//     }

//     .menu-content {
//       display: none;
//       position: absolute;
//       top: 100%; /* se despliega hacia abajo */
//       left: 0;
//       background-color: #2e5d34; /* verde */
//       border-radius: 8px;
//       padding: 8px 0;
//       min-width: 160px;
//       z-index: 10;
//     }

//     .menu-container.open .menu-content {
//       display: flex;
//       flex-direction: column;
//     }

//     .menu-item {
//       background-color: #2e5d34; /* verde */
//       color: #f5e6d3; /* crema */
//       padding: 10px 16px;
//       margin: 4px 8px;
//       border-radius: 6px;
//       cursor: pointer;
//       transition: all 0.3s;
//       text-align: left;
//     }

//     .menu-item:hover {
//       background-color: #f5e6d3; /* crema */
//       color: #2e5d34; /* verde */
//     }
//   `;

//   render() {
//     return html`
//       <div class="menu-container ${this.menuOpen ? 'open' : ''}">
//         <!-- Botón del menú -->
//         <sl-icon-button
//           name="list"
//           library="nqm-icons"
//           @click=${this.toggleMenu}>
//         </sl-icon-button>


//         <!-- Opciones del menú -->
//         <div class="menu-content">
//           <div class="menu-item">Información</div>
//           <div class="menu-item">Historia</div>
//           <div class="menu-item">Imágenes</div>
//           <div class="menu-item">Contacto</div>
//         </div>
//       </div>
//     `;
//   }
// }
