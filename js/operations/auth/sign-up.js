import currentUser from "../../current-user.js";
import { navigateToUrl } from "../../routing.js";
import storageService from "../../storage-service.js";
import usersList from "../../users.js";
import {
  checkIfHasErrors,
  generateId,
  showErrors
} from "../../utils.js";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

function signUp(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username');
  const password = formData.get('password');
  const repeatPass = formData.get('repeatpass');

  const errors = validateRegistration({
    username,
    password,
    repeatPass
  });

  showErrors(errors);

  const hasErrors = checkIfHasErrors(errors);

  if (hasErrors) {
    return;
  };

  const hashedPassword = CryptoJS.SHA3(password);

  const newUser = {
    id: generateId(usersList.users),
    username,
    password: hashedPassword.toString()
  }

  try {
    usersList.addUser(newUser);
    currentUser.login(newUser);

    storageService.set('Users', JSON.stringify(usersList.users));
    storageService.set('CurrentUser', JSON.stringify(currentUser.userData));

    navigateToUrl('/')
  } catch (error) {
    alert(error.message);
  }

  event.target.reset();
}

function validateRegistration({
  username,
  password,
  repeatPass
}) {
  let errors = {
    username: [],
    password: [],
    repeatPass: []
  };

  if (!username) {
    errors = {
      ...errors,
      username: [...errors.username, 'Email cannot be empty.']
    };
  }

  if (username && !EMAIL_REGEX.test(username)) {
    errors = {
      ...errors,
      username: [...errors.username, 'Email invalid format.']
    };
  }

  if (!password) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password can not be empty.']
    };
  }

  if (password && password.length < MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`]
    };
  }

  if (password && !PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password invalid format.']
    };
  }

  if (password !== repeatPass && PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      repeatPass: [...errors.repeatPass, 'Passwords does not match.']
    };
  }

  return errors;
}

export default signUp;