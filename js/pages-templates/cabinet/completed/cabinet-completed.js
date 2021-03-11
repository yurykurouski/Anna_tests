import {currentTheme} from '../../../utils.js'

const template = `
  <h4>Название исследования:</h4> 
  <div class='completed-name card ${currentTheme()}'></div>

  <h4>Описание исследования:</h4> 
  <div class='completed-description card ${currentTheme()}'></div>

  <span>
    <h4 class='completed-num'></h4>
  </span>

  <table class='striped ${currentTheme()}'>

  </table>
`

export default template;