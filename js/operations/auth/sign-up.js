import {
  generateId
} from '../../utils.js';
import usersList from '../../users.js';
import validateForms from '../validation.js';
import currentUser from '../../current-user.js';
import { navigateToUrl } from '../../routing.js';
import storageService from '../../storage-service.js';

function signUp(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username'),
    password = formData.get('password'),
    repeatPass = formData.get('repeatpass');

  if (validateForms({ username, password, repeatPass })) return;

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

export default signUp;