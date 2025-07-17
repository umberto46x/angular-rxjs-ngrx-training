import { Component, EventEmitter, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './components/user-card/user-card';
import { User } from './models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCard, CommonModule],
  outputs: ['userContacted'],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  wasContacted: boolean = false;
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

  handleContact(e: boolean, id: number) {
    let user = this.users.find((user) => user.id === id);

    if (user) {
      user.wasContacted = true;
    }
  }
}
