import currentUser from '../../current-user.js';
import { navigateToUrl } from '../../routing.js';

function logOut() {
  currentUser.logout();
  sessionStorage.setItem('CurrentUser', JSON.stringify(currentUser.userData));

  navigateToUrl('/');
  window.location.reload();
}

export default logOut;