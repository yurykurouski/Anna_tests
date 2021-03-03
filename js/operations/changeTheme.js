function changeTheme(theme) {

  if (theme === 'Dark') {
    const elements = document.querySelectorAll('.light-theme');
    elements.forEach(el => {
      const currAttr = el.getAttribute('class');
      const deLighted = currAttr.split(' ').filter(el => el != 'light-theme').join(' ');
      el.setAttribute('class', `${deLighted} dark-theme`);
    });
  }

  if (theme === 'Light') {
    const elements = document.querySelectorAll('.dark-theme');

    elements.forEach(el => {
      const currAttr = el.getAttribute('class');
      const deDarked = currAttr.split(' ').filter(el => el != 'dark-theme').join(' ');
      el.setAttribute('class', `${deDarked} light-theme`);
    });
  }

}

export default changeTheme;