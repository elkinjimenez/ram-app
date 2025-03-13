import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/intro/intro.page').then(m => m.IntroPage),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'character-detail/:id',
    loadComponent: () => import('./pages/characters-detail/characters-detail.page').then(m => m.CharactersDetailPage)
  },

];
