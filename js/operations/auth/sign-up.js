function signUp(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username');
  const password = formData.get('password');
  const repeatPass = formData.get('repeatpass');

}

export default signUp;