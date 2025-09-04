import { LitElement, html, css  } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('app-chatbot')
export class AppChatbot extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .chatbot-container {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    /* Imagen de fondo */
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 75vh; /* ocupa 3/4 de la pantalla */
      background: url('/MUSEO-NELOVEK-Q-BO-MOKOIT/docs/assets/background.png') no-repeat center center;
      background-size: cover;
      z-index: 0;
    }

    /* Forma color crema: triángulo + rectángulo */
    .overlay-shape {
      position: relative;
      width: 100%;
      height: 60vh;
      background: #f5f0e1;
      clip-path: polygon(0 0, 65% 0, 65% 30%, 100% 30%, 100% 100%, 0% 100%);
      z-index: 1;
    }

    /* Flecha - arriba de la forma color crema */
    .arrow-down {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: #2c3e2c;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 3;
      transition: transform 0.3s ease;
      font-size: 1.5rem;
    }

    .arrow-down:hover {
      transform: scale(1.1);
    }

    /* Contenido del chatbot */
    .chatbot-page {
      position: relative;
      background: #314427;
      z-index: 2;
      min-height: 100vh;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
    }

    /* Barra superior */
    top-app-bar {
      z-index: 4;
    }

    /* Zona del chatbot */
    .chat-section {
      padding: 2rem;
      text-align: center;
    }

    .welcome-message {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    /* Botones de opciones */
    .options-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .options-container button {
      background: #f5f0e1;
      color: #314427;
      border: none;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .options-container button:hover {
      background: #70987a;
    }

    /* Barra de entrada */
    .input-section {
      margin-top: auto;
      padding: 1rem;
      border-top: 1.8px solid #f5f0e1;
      display: flex;
      justify-content: center;
      background: #314427;
    }

    .input-section input {
      width: 90%;
      max-width: 600px;
      padding: 0.8rem;
      border-radius: 8px;
      border: 1px solid #f5f0e1;
    }
  `;

  private scrollToChat() {
    const chatbotContent = this.renderRoot.querySelector('.chatbot-content');
    if (chatbotContent) {
      chatbotContent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <div class="chatbot-container">
        <!-- Fondo -->
        <div class="background"></div>

        <!-- Forma color crema -->
        <div class="overlay-shape"></div>

        <!-- Flecha que lleva al chatbot -->
        <div class="arrow-down" @click=${this.scrollToChat}>
          ▼
        </div>

        <!-- Contenido del chatbot -->
        <div class="chatbot-page">
          <!-- Barra superior -->
          <top-app-bar></top-app-bar>

            <!-- Zona del chatbot -->
            <div class="chatbot-content">
                <section class="chat-section">
                <div class="welcome-message">
                    Hola, Te damos la bienvenida al chatbot de Mokoilek.
                    <br />
                    Por favor elegí una de las siguientes opciones para que podamos ayudarte
                </div>

            <div class="options-container">
              <button>Exposiciones</button>
              <button>Visitar el museo</button>
              <button>Literatura</button>
              <button>Actividades y cursos</button>
              <button>Tienda</button>
              <button>Otros</button>
            </div>
          </section>

          <!-- Barra de entrada -->
          <footer class="input-section">
            <input type="text" placeholder='Escriba su mensaje y pulse "Intro"' />
          </footer>
        </div>
      </div>
    `;
  }
}