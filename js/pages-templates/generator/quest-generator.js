const template = `
    <form>
      <div>
        <h4>Описание исследования:</h4>
        <label id = 'description' class="pure-material-textfield-filled">
          <textarea name='rsrchdescription' placeholder='Здесь можно ввести описание проводимого исследования' autofocus
          ></textarea>
          <span></span>
        </label>

      </div>

      <div>
        <h4>Сбор предварительной информации о респонденте:</h4>
        <div div class = 'additional-information card' >
          <div class='checks'>
            <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Пол'><span>Пол</span></label>
            <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Возраст'><span>Возраст</span></label>
            <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Образование'><span>Образование</span></label>
            <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Семейное положение'><span>Семейное положение</span></label>
            <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='Место проживания'><span>Место проживания</span></label>
          </div>
        
          <h5>Дополнительные сведения:</h5>

          <div class='additional-information-extra'>
        </div>

      </div>
        <button type='button' class="pure-material-button-text add-extra-field">Добавить</button>
      </div>

      <div class='rest-information'>

        <div>
          <h4>Количество вопросов в исследовании:</h4>
          <div class='card'>
            <label class="pure-material-textfield-outlined">
              <input id='numberOfQuestions' name='questions-amount' type="number">
              <span>Введите число</span>
            </label>
          </div>
        </div>

        <div>
          <h4>Формат возможных ответов:</h4>
            <div class = 'possible-answers card' >
              <select id='possibleAnswersType' name='possible-answers'>
                <option selected value ='' hidden>Выберите вариант</option>
                <option name='possible-answers' value='boolean'>Да/Нет</option>
                <option name='possible-answers' value='range'>Диапазон</option>
              </select>
            </div>
        </div>
      </div>
      
    </form>
`

export default template;