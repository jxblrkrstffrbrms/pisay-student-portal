import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then( m => m.Tab5Page)
  },
  
];
