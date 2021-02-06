import { ROOT_DIV } from "../../constants.js";
import { saveQuestions } from "../../operations/collect-questions.js";
import template from "../../Pages template/Generator/questions-edit.js";
import storageService from "../../storage-service.js";

//* рендер инпутов для ввода вопросов
export function renderQuestionsInputs() {
  const numberOfQuestions = JSON.parse(storageService.get('SavedQuestionsTemplate')).numberOfQuestions;

  ROOT_DIV.innerHTML = template;

  const questionsField = ROOT_DIV.querySelector('.questions');
  const form = ROOT_DIV.querySelector('form');

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

  form.addEventListener('submit', saveQuestions);
}


