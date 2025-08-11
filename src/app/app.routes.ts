import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basics',
    title: 'Basics Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages/number-page/number-page.component'),
  },
  {
    path: 'uncommons',
    title: 'Uncommons Pipes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: 'customs',
    title: 'Customs Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basics',
  },
];
