const template = `
  <div>
    <form>
    
      <label label class = "pure-material-textfield-outlined signup-user user" >
        <input name='username' placeholder=' '>
        <span>Email</span>
      </label>
      <span class='username error'></span>
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input type='password' name='password' placeholder=' ' >
        <span>Пароль</span>
      </label>
      <span class='password error'></span>
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input type='password' name='repeatpass' placeholder=' ' >
        <span>Подтвердите</span>
      </label>
      <span class='repeatPass error'></span>
      <br>
      <span id='msg'>
        <span><a href='/login'>Войти</a></span> 
      </span>
    
    </form>
  </div>
`

export default template;

// <button type='submit' class='pure-material-button-contained'>Регистрация</button>
