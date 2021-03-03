const template = `
    <form class='auth-form'>
      <div class='form-wrap card light-theme'>
      <h3>Регистрация:</h3>
      
        <label id='username' class = "pure-material-textfield-outlined signup-user user" >
          <input name='username' placeholder=' '>
          <span>Email</span>
        </label>
        
        <br>
        <label id='password' class = "pure-material-textfield-outlined signup-password password" >
          <input type='password' name='password' placeholder=' ' >
          <span>Пароль</span>
        </label>
        
        <br>
        <label id='repeatPass' class = "pure-material-textfield-outlined signup-password password" >
          <input type='password' name='repeatpass' placeholder=' ' >
          <span>Подтвердите</span>
        </label>
        <br>

      </div>
    </form>
`

export default template;