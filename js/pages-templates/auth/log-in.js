const template = `
    <form class='auth-form'>
      <div>
        <h3>Войти:</h3>
        
          <label id='username' class="pure-material-textfield-outlined">
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
      </div>
    </form>
`

export default template;