const template = `
  <div>
    <form>
    
      <label class="pure-material-textfield-outlined">
        <input name='login-user user' placeholder=' '>
        <span>Введите имя пользователя</span>
      </label>
      <br>
      <label label class = "pure-material-textfield-outlined" >
        <input type='password' name='login-password password' placeholder=' ' >
        <span>Введите пароль</span>
      </label>
      <br>
      <span>
        <span><a href='/signup'>Создать аккаунт</a></span> 
        <button type='submit' class='pure-material-button-contained'>Продолжить</button>
      </span>
    
    </form>
  </div>
`

export default template;