import { Routes } from '@angular/router';
import { HomeComponent } from './infrastructure/presentation/pages/home/home.component';

export const routes: Routes = [
  {
    title: 'Home - 3D Website',
    path: '',
    loadComponent: () =>
      import('@pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    title: 'Customizer - 3D Website',
    path: 'customizer',
    loadComponent: () =>
      import('@pages/customaizer/customaizer.component').then((c) => c.CustomaizerComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
