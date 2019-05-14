import {
  LitElement,
  html,
  css
} from 'lit-element';

export default class AppCard extends LitElement {
  constructor() {
    super();
    this.title = "";
    this.isDone = false;
    this.order = 0;
  }

  static get properties() {
    return {
      title: {
        type: String,
        reflect: true
      },
      isDone: {
        type: Boolean,
        reflect: true
      },
      order: {
        type: Number,
        reflect: true
      }
    }
  }

  static get styles() {
    return css `
      :host {
        display: block;
        position: relative;
      }
      .card {
        position: relative;
        margin-bottom: 12px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: var(--app-header-shadow);
        margin: 1rem;
      }
      .card a {
        display: block;
        text-decoration: none;
      }
      .card figure {
        position: relative;
        min-height: 30vh;
        padding: 0;
        margin: 0;
        background-color: hsla(0, 0%, 15%, 0.64);
      }
      .card img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 40vh;
      }
      .card .placeholder {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .card main {
        padding: 1rem;
        background-color: var(--app-card-color);
        transition: color 0.3s ease, background-color 0.3s ease;
      }
      /**
        * Persist animation using : animation-fill-mode set to forward 
        * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
        */
      .fade {
        -webkit-animation: fadeout 2s forwards; /* Safari and Chrome */
        -moz-animation: fadeout 2s forwards; /* Firefox */
        -ms-animation: fadeout 2s forwards; /* Internet Explorer */
        -o-animation: fadeout 2s forwards; /* Opera */
        animation: fadeout 2s forwards;
      }
      /* Key frame animation */
      @keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
      }
      /* Firefox */
      @-moz-keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
      }
      /* Safari and Chrome */
      @-webkit-keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
      }
      @media (min-width: 600px) {
      }
      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .card {
          flex-basis: 21%;
          margin: 2%;
        }
        .card figure {
          min-height: 20vh;
          height: 20vh;
          overflow: hidden;
        }
      }
    `;
  }

  // firstUpdated() {
  //   this.shadowRoot.querySelector('img')
  //     .addEventListener('load', () => {
  //       this.shadowRoot.querySelector('.placeholder')
  //         .classList.add('fade');
  //     });
  // }

  initCard(title, isDone, order) {
    this.title = title;
    this.isDone = isDone;
    this.order = order;
  }

  render() {
    return html `
      <article class="card">
        <main>
          <h1>${this.title}</h1>
        </main>
      </article>
    `;
  }
}

customElements.define('app-card', AppCard);