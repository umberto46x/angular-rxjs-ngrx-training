import { Component, inject, OnInit } from '@angular/core';
import { UserCard } from '../../components/user-card/user-card';
import { CommonModule } from '@angular/common';
import { User } from '../../models/User';
import { Filter } from '../../models/Filter';
import { UsersService } from '../../services/users-service';

@Component({
  selector: 'app-users',
  imports: [UserCard, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  wasContacted: boolean = false;
  loadingStatus: 'Idle' | 'Loading' | 'Loaded' = 'Idle';
  users: User[] = [];
  selectedUser: User | undefined = undefined;
  filter: Filter = 'all';
  userService = inject(UsersService);

  ngOnInit() {
    this.loadingStatus = 'Loading';
    setTimeout(() => {
      this.users = this.userService.getUsers();
      this.loadingStatus = 'Loaded';
    }, 1000);
  }

  handleContact(e: boolean, id: number) {
    if (this.users) {
      let user = this.users.find((user) => user.id === id);
      if (user) {
        user.wasContacted = e;
      }
    }
  }

  handleFilter(f: string) {
    this.filter = f as Filter;

    switch (this.filter) {
      case 'all':
        {
          console.log('users all recuperati');
          this.users = this.userService.getUsers();
        }
        break;
      case 'wasContacted':
        {
          console.log('users contacted recuperati');
          let retrievedUsers = this.userService.getContactedUsers();
          if (retrievedUsers) {
            this.users = retrievedUsers;
          }
        }
        break;
      case 'wasNotContacted':
        {
          console.log('users not contacted recuperati');
          let retrievedUsers = this.userService.getNotContactedUsers();
          if (retrievedUsers) {
            this.users = retrievedUsers;
          }
        }
        break;
      default: {
        this.users = this.userService.getUsers();
      }
    }
  }

  handleUserSelection(e: number) {
    let searchedUser = this.userService.getUserById(e);
    if (searchedUser) {
      this.selectedUser = searchedUser;
    }
  }

  handleUserDeselection() {
    this.selectedUser = undefined;
  }
}
