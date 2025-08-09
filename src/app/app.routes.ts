// app.routes.ts

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ContentComponent } from './pages/content/content'; // Corrija a importação aqui

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'content/:id',
    // Agora o loadComponent também usará o nome correto da classe
    loadComponent: () =>
      import('./pages/content/content').then(m => m.ContentComponent)
  }
];
