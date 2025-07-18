import { Routes } from '@angular/router';
import { Users } from './features/users/users';
import { Home } from './features/home/home';
import { UserDetails } from './features/user-details/user-details';
import { RxjsTraining } from './features/rxjs-training/rxjs-training';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: Home,
  },
  {
    path: 'users',
    title: 'Users List',
    component: Users,
  },
  {
    path: 'users/:userId',
    title: 'User Defail',
    component: UserDetails,
  },
  {
    path: 'rxjs',
    title: 'RxJS Training',
    component: RxjsTraining,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
