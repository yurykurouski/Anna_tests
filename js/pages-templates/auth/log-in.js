const template = `
  <div>
    <form>
    
      <label class="pure-material-textfield-outlined">
        <input name='username' placeholder=' '>
        <span>Email</span>
      </label>
      <span class='username user error'></span>
      <br>
      <label label class = "pure-material-textfield-outlined" >
        <input type='password' name='password' placeholder=' ' >
        <span>Пароль</span>
      </label>
      <span class='password hashedPassword error'></span>
      <br>
      <span>
        <span><a href='/signup'>Создать аккаунт</a></span> 
        <button type='submit' class='pure-material-button-contained'>Продолжить</button>
      </span>
      <span class='repeatPass error'></span>
    
    </form>
  </div>
`

export default template;