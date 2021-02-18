import {
  ROOT_DIV
} from "../../../constants.js";

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
  const wrap = ROOT_DIV.querySelector('form #possibleAnswersType span > .range-template');

  if (event.target.value === 'range') {
    wrap.innerHTML = `
      <select name='quanityOfAnswers'>
        <option selected hidden>Количество</option>
        <option name='quanityOfAnswers' value='3'>3</option>
        <option name='quanityOfAnswers' value='4'>4</option>
        <option name='quanityOfAnswers' value='5'>5</option>
        <option name='quanityOfAnswers' value='6'>6</option>
        <option name='quanityOfAnswers' value='7'>7</option>
      </select>
      <span></span>
    `

    const quanityField = wrap.querySelector('select');

    quanityField.addEventListener('change', () => {
      const variantFields = wrap.querySelector('span');
      variantFields.innerHTML = ``;

      for (let i = 1; i <= quanityField.value; i++) {
        const variantField = document.createElement('label');
        variantField.setAttribute('class', 'pure-material-textfield-outlined');
        variantFields.appendChild(variantField);

        variantField.innerHTML = `
          <input name='variant-field' placeholder=' '>
          <span>${i}</span>
        `
      }
    });
  } else {
    wrap.innerHTML = ``;
  }
}

//блок ввода вопроса
export function questionBlock(questionsField) {
  const questionBlock = document.createElement('li');
  questionBlock.setAttribute('class', 'qstn-wrap')
  const singleQuestionTemplate = `
      <label class="pure-material-textfield-filled">
        <textarea name='qstn-description' placeholder='Вопрос для респондента'></textarea>
        <span></span>
      </label>
      <span class="material-icons close" title='Удалить вопрос'>cancel</span>
  `
  questionBlock.innerHTML = singleQuestionTemplate;
  questionsField.appendChild(questionBlock);

  const closeBtn = questionBlock.querySelector('.close');
  closeBtn.addEventListener('click', (event) => delExtraField(event, 'li'));
}