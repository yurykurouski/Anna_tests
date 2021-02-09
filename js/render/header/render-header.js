// import currentUser from "../../current-user.js";
import currentUser from "../../current-user.js";
import logOut from "../../operations/auth/log-out.js";
import template from "../../Pages template/header/header.js";

function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = template;

  const auth = header.querySelector('.auth');

  if (currentUser.userData) {
    auth.textContent = 'Выйти';

    auth.addEventListener('click', logOut);
  } else {
    auth.textContent = 'Войти';
    auth.setAttribute('href', '/login');
  }
}

export default renderHeader;