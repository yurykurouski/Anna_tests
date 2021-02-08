const template = `
  <div>
    <form>
    
      <label label class = "pure-material-textfield-outlined signup-user user" >
        <input name='username' placeholder=' '>
        <span>Введите имя пользователя</span>
      </label>
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input type='password' name='password' placeholder=' ' >
        <span>Введите пароль</span>
      </label>
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input type='password' name='repeatpass' placeholder=' ' >
        <span>Повторите пароль</span>
      </label>
      <br>
      <span>
        <span><a href='/login'>У меня есть аккаунт</a></span> 
        <button type='submit' class='pure-material-button-contained'>Регистрация</button>
      </span>
    
    </form>
  </div>
`

export default template;