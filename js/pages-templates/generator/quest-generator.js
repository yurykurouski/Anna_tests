const template = `
    <form id='quest-generator'>

        <h4>Название проводимого исследования:</h4>
        <label id='templateName' class="pure-material-textfield-filled">
          <textarea class='template-name light-theme' name='rscrch-name' placeholder='Название исследования' autofocus
          ></textarea>
          <span></span>
        </label>

      <div>
        <h4>Описание исследования:</h4>
        <label id='description' class="pure-material-textfield-filled">
          <textarea class='light-theme' name='rsrchdescription' placeholder='Описание исследования'
          ></textarea>
          <span></span>
        </label>

      </div>

      <div>
        <h4>Сбор предварительной информации о респонденте:</h4>
        <div div class = 'additional-information card light-theme'>
          <div class='checks light-theme'>
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

       <div>
        <h4>Количество вопросов в исследовании и формат возможных ответов:</h4>
        <div class='rest-information card light-theme'>
          <label id='numberOfQuestions' class="pure-material-textfield-outlined">
            <input name='questions-amount' placeholder=' '>
            <span>Введите число</span>
          </label>

          <div class = 'possible-answers' >
            <select id='possibleAnswersType' class='light-theme' name='possible-answers'>
              <option selected value ='' hidden>Выберите вариант</option>
              <option name='possible-answers' value='boolean'>Да/Нет</option>
              <option name='possible-answers' value='range'>Диапазон</option>
            </select>
          </div>
        </div>

    </form>
`

export default template;