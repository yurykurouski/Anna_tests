import { ROOT_DIV } from "../../constants.js";
import template from "../../pages-templates/Generator/questions-edit.js";
import { collectQuestions } from "../../operations/collect-questions.js";
import popupSaveSuccesfully from "../../components/pop-up.js";
import { navigateToUrl } from "../../routing.js";

//* рендер инпутов для ввода вопросов
export function renderQuestionsInputs(numberOfQuestions) {
  ROOT_DIV.innerHTML = template;

  const questionsField = ROOT_DIV.querySelector('.questions'),
        form = ROOT_DIV.querySelector('form');

  for (let i = 1; i <= numberOfQuestions; i++) {
    const questionBlock = document.createElement('div');
    questionBlock.setAttribute('class', 'qstn-wrap')
    const singleQuestionTemplate = `
      <h3>Вопрос №${i}</h3>

      <label class="pure-material-textfield-filled">
        <textarea id=${i} name='qstn-description' placeholder='Вопрос для респондента'
          required></textarea>
        <span></span>
      </label>
  `
    questionBlock.innerHTML = singleQuestionTemplate;
    questionsField.appendChild(questionBlock);
  }

  form.addEventListener('submit', (event) => {
    popupSaveSuccesfully();
    collectQuestions(event);
    setTimeout(() => {
      navigateToUrl('/');
    }, 1000);
  });
}


