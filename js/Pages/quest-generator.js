const questGeneratorTemplate = `
  <div>
    <form>
      <div>
        <h3>Описание исследования:</h3>

        <label class="pure-material-textfield-filled">
          <textarea name='rsrch-description' placeholder='Здесь можно ввести описание проводимого исследования' autofocus
          ></textarea>
          <span></span>
        </label>

      </div>

      <div class='additional-information'>
        <h4>Сбор предварительной информации о респонденте:</h4>
        <div>
          <label class="pure-material-checkbox"><input type='checkbox' value='gender'><span>Пол</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' value='age'><span>Возраст</span></label>
          <label  class="pure-material-checkbox"><input type='checkbox' value='educatiion'><span>Образование</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' value='marital-status'><span>Семейное положение</span></label>
          <label class="pure-material-checkbox"><input type='checkbox' value='residence'><span>Место проживания</span></label>
        </div>
       
        <h5>Дополнительные сведения:</h5>

        <div class='additional-information-extra'>
          <label class="pure-material-textfield-outlined">
            <input placeholder=' '>
            <span>Введите...</span>
          </label>
        </div>
        <button class="pure-material-button-text add-extra-field">Добавить</button>
      </div>

      <div>
        <h4>Количество вопросов в исследовании:</h4>

      <label class="pure-material-textfield-outlined">
        <input type="number">
        <span>Введите число</span>
      </label>
      </div>

      <div>
        <h4>Формат возможных ответов:</h4>
        <select>
          <option value='boolean'>Да/Нет</option>
          <option value='range'>Диапазон</option>
          <option value='rating'>Оценка</option>
        </select>
      </div>

      <div>/Здесь будет блок с редактированием возможных вариантов ответа/</div>

      <input type='submit' class='pure-material-button-contained' value='Продолжить'></input>

    </form>
  </div>
`

export default questGeneratorTemplate;