import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.page').then((m) => m.HomePage) },
  { path: 'catalogo', loadComponent: () => import('./pages/catalog.page').then((m) => m.CatalogPage) },
  { path: 'guia', loadComponent: () => import('./pages/guide.page').then((m) => m.GuidePage) },
  { path: 'historico', loadComponent: () => import('./pages/history.page').then((m) => m.HistoryPage) },
  { path: 'manobra/:id', loadComponent: () => import('./pages/trick-detail.page').then((m) => m.TrickDetailPage) },
  { path: 'blade/setup', loadComponent: () => import('./pages/blade-setup.page').then((m) => m.BladeSetupPage) },
  { path: 'blade/play', loadComponent: () => import('./pages/blade-game.page').then((m) => m.BladeGamePage) },
  { path: '**', redirectTo: '' },
];
