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



/*   if (theme === 'Dark') {
    mainElements.forEach(el => {
      el.setAttribute('class', 'dark-theme')
    });

    cards.forEach(el => {
      const cardAttr = el.getAttribute('class')
      el.setAttribute('class', `${cardAttr} dark-theme`);
    });

  } else {
    mainElements.forEach(el => {
      const defAttr = el.getAttribute('class');
      if (defAttr) {
        const elDeDarked = defAttr.split(' ').filter(el => el != 'dark-theme').join(' ');
        el.setAttribute('class', elDeDarked);
      }
    });

    cards.forEach(el => {
      const attr = el.getAttribute('class');
      const deDarked = attr.split(' ').filter(el => el != 'dark-theme').join(' ');

      el.setAttribute('class', deDarked);
    });
  } */
}

export default changeTheme;