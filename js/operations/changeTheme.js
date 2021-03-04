import { DARK_THEME, LIGHT_THEME } from "../constants";

function changeTheme(theme) {
  if (theme === DARK_THEME) {
    const elements = document.querySelectorAll('.light-theme');

    elements.forEach(el => {
      const currAttr = el.getAttribute('class');
      const deLighted = currAttr.split(' ').filter(el => el != 'light-theme').join(' ');
      el.setAttribute('class', `${deLighted} dark-theme`);
    });
  }

  if (theme === LIGHT_THEME) {
    const elements = document.querySelectorAll('.dark-theme');

    elements.forEach(el => {
      const currAttr = el.getAttribute('class');
      const deDarked = currAttr.split(' ').filter(el => el != 'dark-theme').join(' ');
      el.setAttribute('class', `${deDarked} light-theme`);
    });
  }

}

export default changeTheme;