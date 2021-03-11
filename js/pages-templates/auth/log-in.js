import { currentTheme } from '../../utils.js';

const template = `
    <form class='auth-form'>
    
      <div class='form-wrap card ${currentTheme()}'>
        <h3>Войти:</h3>
        
          <label id='username' class='pure-material-textfield-outlined'>
            <input name='username' placeholder=' '>
            <span>Email</span>
          </label>
          <br>
          <label id='password' label class = 'pure-material-textfield-outlined' >
            <input type='password' name='password' placeholder=' ' >
            <span>Пароль</span>
          </label>
          <br>
      </div>

    </form>
`

export default template;