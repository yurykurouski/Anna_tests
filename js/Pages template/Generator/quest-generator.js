const template = `
  <div>
    <form>
      <div>
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
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='gender'><span>Пол</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='age'><span>Возраст</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='educatiion'><span>Образование</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='marital-status'><span>Семейное положение</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' name='additional-information' value='residence'><span>Место проживания</span></label>
        </div>
       
        <h5>Дополнительные сведения:</h5>

        <div class='additional-information-extra'>
          <label class="pure-material-textfield-outlined">
            <input name='additional-information-extra' placeholder=' '>
            <span>Введите...</span>
          </label>
        </div>
        <button type='button' class="pure-material-button-text add-extra-field">Добавить</button>
      </div>

      <div>
        <h4>Количество вопросов в исследовании:</h4>

      <label class="pure-material-textfield-outlined">
        <input name='questions-amount' type="number">
        <span>Введите число</span>
      </label>
      </div>

      <div>
        <h4>Формат возможных ответов:</h4>
        <select name='possible-answers' required>
          <option name='possible-answers'value='boolean'>Да/Нет</option>
          <option name='possible-answers' value='range'>Диапазон</option>
          <option name='possible-answers' value='rating'>Оценка</option>
        </select>
      </div>

      <div>/Здесь будет блок с редактированием возможных вариантов ответа/</div>

      <button type='submit' class='pure-material-button-contained'>Продолжить</button>

    </form>
  </div>
`

export default template;