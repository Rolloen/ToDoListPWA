import {
  LitElement,
  html,
  css
} from 'lit-element';

import { saveTask } from '../../utils/task.js'

export default class AppTaskWriter extends LitElement {
  constructor() {
    super();
    this.title = "";
  }

  static get properties() {
    return {
      title: {
        type: String,
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
      .card main {
        padding: 1rem;
        background-color: var(--app-card-color);
        transition: color 0.3s ease, background-color 0.3s ease;
      }
      .card input[type="text"] {
        width: 80%;
        font-size: 1.8rem;
        outline: none;
        border: none;
        border-bottom: 2px solid #80808069;
      }
      .send-task {
        padding: 0;
        float: right;
        margin-right: 25px;
        font-size: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
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

  render() {
    return html `
      <article class="card">
        <main>
          <input type="text" id="taskWriter" name="taskWriter" placeholder="Votre tâche"/>
          <input @click="${this.saveNewTask}" type="submit" class="send-task" value="✔"/>
        </main>
      </article>
    `;
  }

  saveNewTask() {
    let taskTitle = this.shadowRoot.getElementById('taskWriter');
    
    saveTask({
      "title": taskTitle.value,
      "isDone": false
    });
    taskTitle.value = '';
  }

}

customElements.define('app-task-writer', AppTaskWriter);