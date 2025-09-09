import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Importa model-viewer para registrar el custom element
import '@google/model-viewer';

@customElement('app-viewer-3d')
export class AppViewer3d extends LitElement {

  @property({ type: String }) src = ''; // Propiedad para la ruta del modelo

  static styles = css`
    model-viewer {
      width: auto;
      height: 400px;
      background-color: #f0f0f0;
      /*border-radius: 8px;*/
    }
  `;

  render() {
    return html`
      <model-viewer
        src=${this.src}
        alt="Un modelo 3D de una vasija"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
      >
      </model-viewer>
    `;
  }
}