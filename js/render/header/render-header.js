import currentUser from "../../current-user.js";
import logOut from "../../operations/auth/log-out.js";
import template from "../../pages-templates/header/header.js";

function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth'),
        cabinet = header.querySelector('#cabinet');

  if (currentUser.userData) {
    auth.textContent = 'Выйти';
    cabinet.textContent = 'Кабинет'

    cabinet.setAttribute('href', '/cabinet');

    auth.addEventListener('click', logOut);
  } else {
    auth.textContent = 'Войти';
    auth.setAttribute('href', '/login');
  }
}

export default renderHeader;