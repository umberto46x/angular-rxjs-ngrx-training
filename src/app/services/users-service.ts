import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: 0,
      name: 'Pippo',
      surname: 'Rossi',
      address: 'Via milano 50',
      age: 20,
      wasContacted: false,
    },
    {
      id: 1,
      name: 'Simone',
      surname: 'Bianchi',
      address: 'Via firenze 50',
      age: 52,
      wasContacted: false,
    },
    {
      id: 2,
      name: 'Carmelo',
      surname: 'Verdi',
      address: 'Via roma 50',
      age: 12,
      wasContacted: false,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
  getUserById(id: number): User | undefined {
    const foundUser = this.users.find((user) => user.id === id);
    if (foundUser) {
      return foundUser;
    }

    return undefined;
  }

  getContactedUsers() {
    const filteredUsers = this.users.filter(
      (user) => user.wasContacted === true
    );
    if (filteredUsers) {
      return filteredUsers;
    }
    return undefined;
  }

  getNotContactedUsers() {
    const filteredUsers = this.users.filter(
      (user) => user.wasContacted === false
    );
    if (filteredUsers) {
      return filteredUsers;
    }
    return undefined;
  }
}
