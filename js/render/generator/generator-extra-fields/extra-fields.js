import {
  ROOT_DIV
} from "../../../constants.js";
import storageService from "../../../storage-service.js";

let currentTheme;

if (storageService.get('Current theme') === 'Light') {
  currentTheme = 'light-theme';
} else currentTheme = 'dark-theme';

// функция добавления дополнительного поля для доп. сведений
export function addExtraField() {
  const extraInformationDiv = ROOT_DIV.querySelector('.additional-information-extra');

  const extraWrapper = document.createElement('div');
  extraWrapper.setAttribute('class', 'extra-wrapper');

  extraWrapper.innerHTML = `
    <label label class = 'pure-material-textfield-outlined'>
      <input name='additional-information' placeholder=' '>
      <span>Введите...</span>
    </label>
    <span class="material-icons close" title='Удалить вопрос'>cancel</span>
  `

  extraInformationDiv.appendChild(extraWrapper);

  const delExtraBtn = extraInformationDiv.querySelectorAll('.close');

  const closeBtnsArray = Array.prototype.slice.call(delExtraBtn);

  closeBtnsArray.forEach(btn => {
    btn.addEventListener('click', (event) => delExtraField(event, 'div'));
  });
}

// кнопка удаления доп полей информации и вопросов
export function delExtraField(event, el) {
  const targetWrap = event.target.closest(el);
  targetWrap.remove();
}

//* создание полей для кастомных полей ответа
export function rangeTemplate(event) {
  const possibleAnswersWrap = ROOT_DIV.querySelector('.possible-answers');
  const form = ROOT_DIV.querySelector('form');
  const submitBtn = ROOT_DIV.querySelector('form button[type="submit"]');

  if (event.target.value === 'range') {
    if (ROOT_DIV.querySelector('select[name="quanity-of-answers"]')) {
      ROOT_DIV.querySelector('select[name="quanity-of-answers"]').remove();
    }
    const quanityField = document.createElement('select');

    quanityField.setAttribute('name', 'quanity-of-answers');

    if (storageService.get('Current theme') === 'Dark') {
      quanityField.setAttribute('class', 'dark-theme');
    } else quanityField.setAttribute('class', 'light-theme');
    
    possibleAnswersWrap.appendChild(quanityField);

    quanityField.innerHTML = `
        <option selected hidden>Количество</option>
        <option name='quanityOfAnswers' value='3'>3</option>
        <option name='quanityOfAnswers' value='4'>4</option>
        <option name='quanityOfAnswers' value='5'>5</option>
        <option name='quanityOfAnswers' value='6'>6</option>
        <option name='quanityOfAnswers' value='7'>7</option>
     `

    quanityField.addEventListener('change', () => {
      if (ROOT_DIV.querySelector('.range-wrap')) {
        ROOT_DIV.querySelector('.range-wrap').remove();
        ROOT_DIV.querySelector('.range-notation').remove();
      }

      const rangeWrap = document.createElement('div');
      const rangeNotation = document.createElement('h4');

      rangeNotation.textContent = 'Введите варианты ответов. Цифры обозначают "вес" ответа:';

      if (storageService.get('Current theme') === 'Light') {
        rangeWrap.setAttribute('class', 'range-wrap card light-theme');
      } else rangeWrap.setAttribute('class', 'range-wrap card dark-theme');

      rangeNotation.setAttribute('class', 'range-notation')

      form.insertBefore(rangeNotation, submitBtn)
      form.insertBefore(rangeWrap, submitBtn);

      for (let i = 1; i <= quanityField.value; i++) {
        const variantField = document.createElement('label');

        variantField.setAttribute('class', 'pure-material-textfield-outlined');
        rangeWrap.appendChild(variantField);

        variantField.innerHTML = `
          <input name='variant-field' placeholder=' '>
          <span>${i}</span>
         `
      }
    });
  } else {
    const quanityField = document.querySelector('select[name="quanity-of-answers"]');
    const rangeWrap = document.querySelector('.range-wrap');
    const rangeNotation = ROOT_DIV.querySelector('.range-notation');

    if (rangeWrap) {
      rangeWrap.remove();
      quanityField.remove();
      rangeNotation.remove();
    }
  }
}

//блок ввода вопроса
export function addQuestionBlock(questionsField, id) {
  if (!id) {
    id = (ROOT_DIV.querySelectorAll('li').length + 1);
  }

  

  const questionBlock = document.createElement('li');
  questionBlock.setAttribute('class', 'qstn-wrap questions');
  questionBlock.innerHTML = `
      <label id = ${id} class="pure-material-textfield-filled desription-wrap">
        <textarea class='question-description ${currentTheme}' name='qstn-description' placeholder='${id}-й вопрос'></textarea>
        <span></span>
      </label>
      <span class="material-icons close" title='Удалить вопрос'>cancel</span>
  `
  questionsField.appendChild(questionBlock);

  const closeBtn = questionBlock.querySelector('.close');
  closeBtn.addEventListener('click', (event) => delExtraField(event, 'li'));
}