function popupSaveSuccesfully() {
  const header = document.querySelector('header');
  const popup = document.createElement('span');

  popup.setAttribute('id', 'popup');
  popup.innerHTML = `<h4>Данные успешно сохранены</h4>`;

  header.appendChild(popup);

  let posY = 15;

  setInterval(() => {
    popup.style.top = posY

    posY--
  }, 24);

/*   setTimeout(() => {
    popup.style.display = 'none'
  }, 5000); */
}

export default popupSaveSuccesfully;