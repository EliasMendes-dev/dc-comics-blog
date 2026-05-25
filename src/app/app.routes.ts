import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Content } from './pages/content/content';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'content/:id',
    component: Content
  }
];
