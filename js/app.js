import AppCard from '/js/components/card/card.js';
import AppTaskWriter from '/js/components/taskWriter/taskWriter.js';

import {
  saveTask
} from './utils/task.js'

import {
  openDB
} from '../node_modules/idb/build/esm/index.js';

import checkConnectivity from "./utils/connexion.js";

(async function (document) {
  const app = document.querySelector('#app');
  const skeleton = app.querySelector('.skeleton');
  const listPage = app.querySelector('[page=list]');
  skeleton.removeAttribute('active');
  listPage.setAttribute('active', '');

  checkConnectivity();

  document.addEventListener('connexionChanged', ({
    detail
  }) => {
    console.log(detail);
  });

  document.addEventListener('dataChanged', addNewCard);

  document.addEventListener('taskFinished', reloadACard);


  async function init() {

    try {

      //create the DB of indexDB
      const database = await openDB('app-store', 1, {
        upgrade(db, oldVersion, newVersion, transaction) {
          db.createObjectStore('todoList');
        },
      });

      await fetchData();

      const tasks = await database.get('todoList', 'task');

      let taskWriter = new AppTaskWriter();

      listPage.appendChild(taskWriter);

      const cards = tasks.map(item => {
        const cardElement = new AppCard();

        cardElement.initCard(
          item.id,
          item.title,
          item.isDone,
          cardElement);
        listPage.appendChild(cardElement);
        return cardElement;
      });

    } catch (error) {
      console.error(error);
    }
  }

  async function addNewCard(data) {
    console.log('adding new card');

    try {
      console.log(data.detail);
      let newTask = data.detail;

      fetchData();

      const cardElement = new AppCard();

      cardElement.initCard(
        newTask.id,
        newTask.title,
        newTask.isDone,
        cardElement);
      listPage.appendChild(cardElement);

    } catch (error) {
      console.error(error);
    }
  }

  async function reloadACard(data) {
    console.log('reloading a card');
    try {
       let taskId = data.detail;
      console.log(taskId);
      
      let cardElem = document.querySelector(`[id="${taskId}"]`);
      cardElem.setIsDone();

      
      // cardElem.requestUpdate();
      
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function fetchData() {
    try {

      const data = await fetch('/data/todo.json');
      const json = await data.json();
      const jsonTasks = json.tasks;

      const database = await openDB('app-store', 1);

      if (navigator.onLine) {
        await database.put('todoList', jsonTasks, 'task')
      }

      return jsonTasks;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


  init();

})(document);