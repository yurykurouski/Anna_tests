import {
  textButton
} from "./elements.js";
import {
  ROOT_DIV
} from "../constants.js";
import userAnswers from "../user-answers.js";
import storageService from "../storage-service.js";
import questionsTemplate from "../questions-template.js";

function modalDelete(id) {
  const fadeWrapper = document.createElement('div'),
    messageWrap = document.createElement('div'),
    message = document.createElement('p'),
    soWhat = document.createElement('h5');

  const targetLi = document.getElementById(id);
  const tapMsg = ROOT_DIV.querySelector('.aw-researches > span');

  message.textContent = 'При удалении исследования также будут удалены все связанные с ним ответы пользователей.';
  soWhat.textContent = 'Вы уверены?';

  fadeWrapper.setAttribute('class', 'fade');
  messageWrap.setAttribute('class', 'modal-window');

  ROOT_DIV.appendChild(fadeWrapper);
  fadeWrapper.appendChild(messageWrap);
  messageWrap.appendChild(message);
  messageWrap.appendChild(soWhat);

  textButton('accept-button', 'Да', messageWrap).addEventListener('click', () => {
    questionsTemplate.deleteTemplateById(id);
    userAnswers.deleteAnswersById(id);
    fadeWrapper.remove();
    targetLi.remove();
    tapMsg.style.display = 'inline';

    storageService.set('SavedQuestionsTemplate', JSON.stringify(questionsTemplate.templates));
    storageService.set('SavedQuestions', JSON.stringify(questionsTemplate.questions));
    storageService.set('UserInformation', JSON.stringify(userAnswers.information));
    storageService.set('UserAnswers', JSON.stringify(userAnswers.answers));
  });

  textButton('discard-button', 'Нет', messageWrap).addEventListener('click', () => {
    fadeWrapper.remove();
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