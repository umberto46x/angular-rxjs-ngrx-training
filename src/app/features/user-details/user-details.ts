import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data['userId']);
    });
  }
}
