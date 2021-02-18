const template = `
  <div>
    <form>
      <div id = 'description'>
        <h3>Описание исследования:</h3>

        <label class="pure-material-textfield-filled">
          <textarea name='rsrchdescription' placeholder='Здесь можно ввести описание проводимого исследования' autofocus
          ></textarea>
          <span></span>
        </label>

      </div>

      <div class='additional-information'>
        <h4>Сбор предварительной информации о респонденте:</h4>
        <div>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Пол'><span>Пол</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Возраст'><span>Возраст</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Образование'><span>Образование</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Семейное положение'><span>Семейное положение</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Место проживания'><span>Место проживания</span></label>
        </div>
       
        <h5>Дополнительные сведения:</h5>

        <div class='additional-information-extra'>

        </div>
        <button type='button' class="pure-material-button-text add-extra-field">Добавить</button>
      </div>

      <div div id = 'numberOfQuestions'>
        <h4>Количество вопросов в исследовании:</h4>

      <label class="pure-material-textfield-outlined">
        <input name='questions-amount' type="number">
        <span>Введите число</span>
      </label>
      </div>

      <div id = 'possibleAnswersType'>
        <h4>Формат возможных ответов:</h4>
          <span>
            <select name='possible-answers'>
              <option selected value ='' hidden>Выберите вариант</option>
              <option name='possible-answers' value='boolean'>Да/Нет</option>
              <option name='possible-answers' value='range'>Диапазон</option>
            </select>
            <div class='range-template'></div>
          </span>
        
      </div>

    </form>
  </div>
`

export default template;