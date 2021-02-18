import {
  ROOT_DIV
} from "../../constants.js";
import {
  collectQuestions
} from "../../operations/collect-questions.js";
import {
  questionBlock
} from "./generator-extra-fields/extra-fields.js";
import newButton from "../../components/elements/button.js";
import popupSaveSuccesfully from "../../components/pop-up.js";
import template from "../../pages-templates/Generator/questions-edit.js";

//* рендер инпутов для ввода вопросов
export function renderQuestionsInputs(numAndId) {
  ROOT_DIV.innerHTML = template;

  const questionsField = ROOT_DIV.querySelector('.questions'),
    form = ROOT_DIV.querySelector('form');

  for (let i = 1; i <= numAndId.numberOfQuestions; i++) {
    questionBlock(questionsField);
  }

  const firstQuestionBlock = ROOT_DIV.querySelector('textarea');

  if (firstQuestionBlock) firstQuestionBlock.focus();

  newButton.textButton('button', '', 'Добавить', form).
  addEventListener('click', () => questionBlock(questionsField));

  newButton.containedButton('submit', '', 'Сохранить', form);

  form.addEventListener('submit', (event) => {
    popupSaveSuccesfully();
    collectQuestions(numAndId.id, event);
    setTimeout(() => {
      window.history.back();
    }, 1000);
  });
}