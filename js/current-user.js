import storageService from "./storage-service.js";

class CurrentUser {
  constructor(userData) {
    this.userData = userData;
  }

  login(userData) {
    this.userData = userData;
  }

  logout() {
    this.userData = null;
  }
}

const userData = JSON.parse(storageService.get('CurrentUser'));

const currentUser = new CurrentUser(userData || null);

export default currentUser;