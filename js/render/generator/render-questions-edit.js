import {
  ROOT_DIV
} from "../../constants.js";
import template from "../../pages-templates/Generator/questions-edit.js";
import {
  collectQuestions
} from "../../operations/collect-questions.js";
import popupSaveSuccesfully from "../../components/pop-up.js";
import {
  navigateToUrl
} from "../../routing.js";
import questionsTemplate from "../../questions-template.js";

//* рендер инпутов для ввода вопросов
export function renderQuestionsInputs(numAndId) {
  ROOT_DIV.innerHTML = template;

  const numberOfQuestions = numAndId.numberOfQuestions,
    questionsField = ROOT_DIV.querySelector('.questions'),
    form = ROOT_DIV.querySelector('form');

  for (let i = 1; i <= numberOfQuestions; i++) {
    const questionBlock = document.createElement('li');
    questionBlock.setAttribute('class', 'qstn-wrap')
    const singleQuestionTemplate = `
      <label class="pure-material-textfield-filled">
        <textarea id=${i} name='qstn-description' placeholder='Вопрос для респондента'
          required></textarea>
        <span></span>
      </label>
      <span class="material-icons close" title='Удалить вопрос'>cancel</span>
  `
    questionBlock.innerHTML = singleQuestionTemplate;
    questionsField.appendChild(questionBlock);
  }

  const firstQuestionBlock = ROOT_DIV.querySelector('textarea');
  firstQuestionBlock.focus();

  const closeBtnsList = ROOT_DIV.querySelectorAll('.close');
  const closeBtnsArray = Array.prototype.slice.call(closeBtnsList);

  closeBtnsArray.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const targetLi = event.target.closest('li');
      targetLi.remove();
    });
  });

  form.addEventListener('submit', (event) => {
    popupSaveSuccesfully();
    collectQuestions(numAndId.id, event);
    setTimeout(() => {
      navigateToUrl('/');
    }, 1000);
  });
}