function popupSaveSuccesfully() {
  const header = document.querySelector('header');
  const popup = document.createElement('span');

  popup.setAttribute('id', 'popup');
  popup.innerHTML = `<p>Данные успешно сохранены</p>`;

  header.appendChild(popup);

  setOpacity(popup);

  setTimeout(() => {
    popup.style.display = 'none';
    popup.remove();
  }, 2000)
}

function setOpacity(popup) {
  let opacity = 1;

  setInterval(() => {
    if(popup)
    popup.style.opacity = opacity;
    opacity -= 0.05;
  }, 100);
}

export default popupSaveSuccesfully;