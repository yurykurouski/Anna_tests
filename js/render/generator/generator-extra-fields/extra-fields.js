import { ROOT_DIV } from "../../../constants.js";

//* функция добавления дополнительного поля для доп. сведений
export function addExtraField(ROOT_DIV) {
  const extraInformationDiv = ROOT_DIV.querySelector('.additional-information-extra');
  const newExtraInformationField = document.createElement('label');

  newExtraInformationField.setAttribute('class', 'pure-material-textfield-outlined');

  extraInformationDiv.appendChild(newExtraInformationField);

  newExtraInformationField.innerHTML = `
    <input name='additional-information' placeholder=' ' required>
    <span>Введите...</span>
  `
}

//* создание полей для кастомных полей ответа
export function rangeTemplate(event) {
  const wrap = ROOT_DIV.querySelector('form .possible-answers span > .range-template');

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