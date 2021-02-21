import currentUser from '../current-user.js';
import logOut from '../operations/auth/log-out.js';
import questionsTemplate from '../questions-template.js';
import {
  navigateToUrl
} from '../routing.js';

export function cabinetWrap() {
  const wrap = document.querySelector('.header #cabinet-wrap');
  const wrapUsrName = wrap.querySelector('#usr-name');

  wrap.style.display = 'block';

  document.addEventListener('mousedown', event => {
    if (event.target != wrap && event.target != wrapUsrName) {
      wrap.style.display = 'none'
    }
  })
}

export function renderCabinetWrap() {
  const usrName = document.getElementById('usr-name');
  const logoutBtn = document.getElementById('logout');
  const cabinet = document.getElementById('cabinet');

  const currUsrName = currentUser.userData.username
  const usrTemplates = questionsTemplate.getTemplatesByUser(currUsrName);

  usrName.textContent = currUsrName;
  cabinet.innerHTML = `<a class='cabinet-a'>Ваши исследования(${usrTemplates.length})</a>`;

  cabinet.addEventListener('mousedown', () => navigateToUrl('/cabinet'));
  logoutBtn.addEventListener('mousedown', logOut);
}