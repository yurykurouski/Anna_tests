import currentUser from "../../current-user.js";
import storageService from "../../storage-service.js";

function logOut() {
  currentUser.logout();
  storageService.set('CurrentUser', JSON.stringify(currentUser.userData));
}

export default logOut;