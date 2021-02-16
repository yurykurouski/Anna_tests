import {
  ROOT_DIV
} from "../constants.js";
import {
  textButton
} from "./elements.js";

function modalDelete() {
  const fadeWrapper = document.createElement('div');
  const messageWrap = document.createElement('div');
  const message = document.createElement('p');
  const soWhat = document.createElement('h5');

  message.textContent = 'При удалении исследования также будут удалены все связанные с ним ответы пользователей.';
  soWhat.textContent = 'Вы уверены?';

  fadeWrapper.setAttribute('class', 'fade');
  messageWrap.setAttribute('class', 'modal-window');

  ROOT_DIV.appendChild(fadeWrapper);
  fadeWrapper.appendChild(messageWrap);
  messageWrap.appendChild(message);
  messageWrap.appendChild(soWhat);

  textButton('accept-button', 'Да', messageWrap).addEventListener('click', () => {
    console.log('ДА');
  });
  textButton('discard-button', 'Нет', messageWrap).addEventListener('click', () => {
    console.log('НЕТ');
  });

  if (messageWrap) {
    addEventListener('click', event => {
      if (event.target != messageWrap && event.target != message && event.target != soWhat && event.target.tagName != 'BUTTON') {
        fadeWrapper.remove();
      }
    })
  }
  addEventListener('keydown', event => {
    if (event.keyCode == 27) {
      fadeWrapper.remove();
    }
  })
}

export default modalDelete;