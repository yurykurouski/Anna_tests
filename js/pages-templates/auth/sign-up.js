const template = `
    <form class='auth-form'>
      <div>
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
        <span id='msg'>
          <span><a href='/login'>Войти</a></span> 
        </span>
      </div>
    </form>
`

export default template;

// <button type='submit' class='pure-material-button-contained'>Регистрация</button>
