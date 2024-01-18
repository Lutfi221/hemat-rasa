import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';

export const consumerRoutes: Routes = [
  {
    path: '',
    title: 'Konsumen',
    component: HomeComponent,
  },
  {
    path: 'browse',
    title: 'Telusuri',
    component: BrowseComponent,
  },
];
