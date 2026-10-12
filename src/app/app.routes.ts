import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home // ✅ homepage
  },
  {
    path: 'privacy',
    loadComponent: () => import('./components/legal/legal').then(m => m.LegalComponent),
    data: { doc: 'privacy' }
  },
  {
    path: 'terms',
    loadComponent: () => import('./components/legal/legal').then(m => m.LegalComponent),
    data: { doc: 'terms' }
  },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import('./components/project-detail/project-detail')
        .then(m => m.ProjectDetailComponent)
  }
];