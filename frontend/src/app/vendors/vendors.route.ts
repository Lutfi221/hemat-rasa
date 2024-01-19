import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const vendorRoutes: Routes = [
  {
    path: '',
    title: 'Produsen',
    component: HomeComponent,
  },
];
