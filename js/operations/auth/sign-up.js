import { EMAIL_REGEX, MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from "../../constants.js";
import currentUser from "../../current-user.js";
import { navigateToUrl } from "../../routing.js";
import storageService from "../../storage-service.js";
import usersList from "../../users.js";
import {
  checkIfHasErrors,
  generateId,
  showErrors
} from "../../utils.js";

function signUp(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username'),
        password = formData.get('password'),
        repeatPass = formData.get('repeatpass');

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
    sessionStorage.setItem('CurrentUser', JSON.stringify(currentUser.userData));

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

  const existingUser = usersList.getUserByUsername(username);

  let errors = {
    username: [],
    password: [],
    repeatPass: []
  };

  if (!username) {
    errors = {
      ...errors,
      username: [...errors.username, 'Заполните это поле']
    };
  }

  if (existingUser) {
    errors = {
      ...errors,
      username: [...errors.username, 'Пользователь с указанным e-mail уже существует.']
    };
  }

  if (username && !EMAIL_REGEX.test(username)) {
    errors = {
      ...errors,
      username: [...errors.username, 'Неверный формат e-mail.']
    };
  }

  if (!password) {
    errors = {
      ...errors,
      password: [...errors.password, 'Заполните это поле.']
    };
  }

  if (password && password.length < MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, `Пароль должен состоять минимум из ${MIN_PASSWORD_LENGTH} символов.`]
    };
  }

  if (password && !PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      password: [...errors.password, 'Неверный формат пароля.']
    };
  }

  if (password !== repeatPass && PASSWORD_REGEX.test(password) && password.length > MIN_PASSWORD_LENGTH) {
    errors = {
      ...errors,
      repeatPass: [...errors.repeatPass, 'Пароли не совпадают.']
    };
  }

  return errors;
}

export default signUp;