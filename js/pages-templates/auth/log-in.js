const template = `
  <div>
    <form>
      <label  id='username' class="pure-material-textfield-outlined">
        <input name='username' placeholder=' '>
        <span>Email</span>
      </label>
      <br>
      <label id='password' label class = "pure-material-textfield-outlined" >
        <input type='password' name='password' placeholder=' ' >
        <span>Пароль</span>
      </label>
      <br>
      <span id='msg'>
        <span><a href=''>Создать аккаунт</a></span> 
      </span>

    </form>
  </div>
`

export default template;

// <button type='submit' class='pure-material-button-contained'>Продолжить</button>
