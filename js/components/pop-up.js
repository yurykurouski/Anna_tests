function popupMessage(type, msg) {
  const header = document.querySelector('header');
  const wrap = document.createElement('span');
  const pMsg = document.createElement('strong');

  header.appendChild(wrap);
  wrap.appendChild(pMsg);

  wrap.setAttribute('id', 'popup');

  if (msg) {
    pMsg.textContent = msg;
  } else {
    pMsg.textContent = 'Данные успешно сохранены';
  }

  if (type === 'error') {
    pMsg.setAttribute('class', 'error-msg');
  } else {
    pMsg.setAttribute('class', 'msg')
  }

  setTimeout(() => {
    wrap.remove();
  }, 3000);
}

export default popupMessage;