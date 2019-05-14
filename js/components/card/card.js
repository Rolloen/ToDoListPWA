import {
  LitElement,
  html,
  css
} from 'lit-element';

import {
  finishTask
} from '../../utils/task.js'
export default class AppCard extends LitElement {
  constructor() {
    super();
    this.id = 0;
    this.title = "";
    this.isDone = false;
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
      }

      .card h1{
        width : 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }

      .card h1:hover {
        color: grey;
      }
      .card del {
        color: grey;
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

  initCard(id, title, isDone) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }
  
  setIsDone() {
    this.isDone = !this.isDone;
  }

  render() {
    return html `
      <article class="card">
        <main>
          ${this.isDone
              ? html`<h1 title="${this.title}"  @click="${this.finishTask}"><del>${this.title}</del></h1>`
              : html`<h1 title="${this.title}"  @click="${this.finishTask}">${this.title}</h1>`
          }
        </main>
      </article>
    `;
  }

  finishTask() {
    finishTask( {
      'id': this.id,
      'title' : this.title,
      'isDone': !this.isDone
    })
  }
}

customElements.define('app-card', AppCard);