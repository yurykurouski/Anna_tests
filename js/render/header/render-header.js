import newInput from "../../components/elements/input.js";
import currentUser from "../../current-user.js";
import logOut from "../../operations/auth/log-out.js";
import template from "../../pages-templates/header/header.js";

function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('#auth a'),
        cabinet = header.querySelector('#cabinet a');

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