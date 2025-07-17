import { Routes } from '@angular/router';
import { Users } from './features/users/users';
import { Home } from './features/home/home';

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
    component: Users,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
