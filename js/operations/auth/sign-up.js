import storageService from "../../storage-service.js";
import usersList from "../../users.js";
import { uuidv4 } from "../../utils.js";

function signUp(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get('username');
  const password = formData.get('password');
  const repeatPass = formData.get('repeatpass');

  const hashedPassword = CryptoJS.SHA3(password);

  const newUser = {
    userId: uuidv4(),
    username,
    password: hashedPassword.toString()
  }

  usersList.addUser(newUser);
  storageService.set('Users', JSON.stringify(usersList.users));
}

export default signUp;