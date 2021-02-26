import usersList from "../../users.js";
import validateForms from "../validation.js";
import currentUser from "../../current-user.js";
import { navigateToUrl } from "../../routing.js";

function login(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username'),
    password = formData.get('password');

  const user = usersList.getUserByUsername(username),
    hashedPassword = CryptoJS.SHA3(password).toString();

  if (validateForms({ username, user, password, hashedPassword })) return;

  if (user && user.password === hashedPassword) {
    currentUser.login(user);
    sessionStorage.setItem('CurrentUser', JSON.stringify(user));

    navigateToUrl('/');
  }
}

export default login;