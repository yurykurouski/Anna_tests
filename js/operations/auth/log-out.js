import currentUser from "../../current-user.js";
import storageService from "../../storage-service.js";

function logOut() {
  currentUser.logout();
  storageService.set('CurrentUser', JSON.stringify(currentUser.userData));
  
  window.location.reload();
}

export default logOut;