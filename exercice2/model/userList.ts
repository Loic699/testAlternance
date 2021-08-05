import { User } from './user';

export class UserList {
  public users: User[];
  constructor(users: User[]) {
    this.users = users;
  }
  
}