import { currentTheme } from '../../utils.js'

const template = `
<form id='existing-anquete'>
    <div>
      <h3>Название проводимого исследования:</h3>
      <p class='template-name card ${currentTheme()}'></p>
    </div>

    <div>
      <h3>Описание проводимого исследования:</h3>
      <p class='template-description card ${currentTheme()}'></p>
    </div>

    <div id='additional-information-wrap'>
      <h3>Сбор предварительной информации:</h3>
      <div class='additional-information-anquette card ${currentTheme()}'></div>
    </div>
    
    <h4 class='summary'></h4>
    <button type='submit' class='pure-material-button-contained go-to-questions'>Перейти к вопросам</button>
  </form>
`

export default template;