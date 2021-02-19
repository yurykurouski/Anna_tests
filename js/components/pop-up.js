function popupSaveSuccesfully(msg) {
  const header = document.querySelector('header');
  const wrap = document.createElement('span');
  const pMsg = document.createElement('p');

  header.appendChild(wrap);
  wrap.appendChild(pMsg);

  wrap.setAttribute('id', 'popup');

  if (msg) {
    pMsg.textContent = msg;
  } else {
    pMsg.textContent = 'Данные успешно сохранены';
  }

  setTimeout(() => {
    wrap.remove();
  }, 3000);
}

export default popupSaveSuccesfully;