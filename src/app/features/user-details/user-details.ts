import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/User';
import { UsersService } from '../../services/users-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails implements OnDestroy, OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  userService: UsersService = inject(UsersService);
  router: Router = inject(Router);
  idSub: Subscription | undefined;
  user: User | undefined;

  ngOnInit() {
    this.idSub = this.activatedRoute.params.subscribe((data) => {
      this.user = this.userService.getUserById(data['userId']);
    });
  }

  ngOnDestroy(): void {
    if (this.idSub) {
      this.idSub.unsubscribe();
    }
  }
}
