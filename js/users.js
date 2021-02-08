import storageService from "./storage-service.js";

class UsersList {
  constructor(users) {
    this.users = users;
  }

  addUser(newUser) {
    this.users = [...this.users, newUser];
  }
}

const users = JSON.parse(storageService.get('Users'));

const usersList = new UsersList(users || []);

export default usersList;