import {
  ROOT_DIV
} from '../../constants.js';
import {
  collectQuestions
} from '../../operations/collect-questions.js';
import {
  addQuestionBlock
} from './generator-extra-fields/extra-fields.js';
import newButton from '../../components/elements/button.js';
import template from '../../pages-templates/Generator/questions-edit.js';

export function renderQuestionsInputs(numAndId) {
  ROOT_DIV.innerHTML = template;

  const questionsField = ROOT_DIV.querySelector('.questions'),
    form = ROOT_DIV.querySelector('form');

  for (let i = 1; i <= numAndId.numberOfQuestions; i++) {
    addQuestionBlock(questionsField, i);
  }

  const firstQuestionBlock = ROOT_DIV.querySelector('textarea');

  if (firstQuestionBlock) firstQuestionBlock.focus();

  newButton('text', 'button', '', 'Добавить', form).
  addEventListener('click', () => addQuestionBlock(questionsField));

  newButton('contained', 'submit', '', 'Сохранить', form);

  form.addEventListener('submit', (event) => {
    collectQuestions(numAndId.id, event);
  });

  document.title = 'Социология > Редактирование вопросов';
  window.scrollTo(0, 0);
}