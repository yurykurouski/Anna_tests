import {
  navigateToUrl
} from '../routing.js';
import currentUser from '../current-user.js';
import logOut from '../operations/auth/log-out.js';
import questionsTemplate from '../questions-template.js';
import { CABINET_URL, NEW_QUEST_URL } from '../constants.js';

export function showCabinetWrap() {
  const wrap = document.querySelector('.header #cabinet-wrap');
  const wrapLi = wrap.querySelectorAll('li');
  const wrapUsrName = wrap.querySelector('#usr-name');
  const toggler = wrap.querySelector('img');

  wrap.style.display = 'block';

  document.addEventListener('mousedown', event => {
    if (event.target != wrap && event.target != wrapUsrName && !Array.from(wrapLi).includes(event.target) && event.target != toggler) {
      wrap.style.display = 'none'
    }
  });
}

export function renderCabinetWrap() {
  const usrName = document.getElementById('usr-name');
  const logoutBtn = document.getElementById('logout');
  const cabinet = document.getElementById('cabinet');

  const currUsrName = currentUser.userData.username;
  const usrTemplates = questionsTemplate.getTemplatesByUser(currUsrName);

  usrName.textContent = currUsrName;
  cabinet.innerHTML = `
    <a class='cabinet-a'>Ваши исследования (${usrTemplates.length})&nbsp;
    </a><button id='add-btn'class='material-icons' title='Новое исследование'>add_circle_outline</button>
  `;

  const addBtn = document.getElementById('add-btn');
  const cabinetBtn = cabinet.querySelector('.cabinet-a');

  addBtn.addEventListener('mousedown', () => navigateToUrl(NEW_QUEST_URL));
  cabinetBtn.addEventListener('mousedown', () => navigateToUrl(CABINET_URL));
  logoutBtn.addEventListener('mousedown', logOut);
}