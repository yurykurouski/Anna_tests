const template = `
  <div>
    <form>
  
      <label label class = "pure-material-textfield-outlined signup-user user" >
        <input id='username' name='username' placeholder=' '>
        <span>Email</span>
      </label>
      
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input id = 'password' type='password' name='password' placeholder=' ' >
        <span>Пароль</span>
      </label>
      
      <br>
      <label label label class = "pure-material-textfield-outlined signup-password password" >
        <input id ='repeatPass' type='password' name='repeatpass' placeholder=' ' >
        <span>Подтвердите</span>
      </label>
      
      <br>
      <span id='msg'>
        <span><a href='/login'>Войти</a></span> 
      </span>
    
    </form>
  </div>
`

export default template;

// <button type='submit' class='pure-material-button-contained'>Регистрация</button>
