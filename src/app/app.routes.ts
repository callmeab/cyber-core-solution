import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home // ✅ homepage
  },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import('./components/project-detail/project-detail')
        .then(m => m.ProjectDetailComponent)
  }
];