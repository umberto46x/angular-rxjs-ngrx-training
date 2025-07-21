import { Routes } from '@angular/router';
import { Users } from './features/users/users';
import { Home } from './features/home/home';
import { UserDetails } from './features/user-details/user-details';
import { RxjsTraining } from './features/rxjs-training/rxjs-training';
import { NgrxTraining } from './features/ngrx-training/ngrx-training';

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
    path: 'ngrx',
    title: 'NgRX Training',
    component: NgrxTraining,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
