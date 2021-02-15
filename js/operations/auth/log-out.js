import currentUser from "../../current-user.js";
import { navigateToUrl } from "../../routing.js";
import storageService from "../../storage-service.js";

function logOut() {
  currentUser.logout();
  storageService.set('CurrentUser', JSON.stringify(currentUser.userData));

  navigateToUrl('/');
  window.location.reload();
}

export default logOut;