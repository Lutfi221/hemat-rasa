import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RegistrationConsumerComponent } from './auth/registration-consumer/registration-consumer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationVendorComponent } from './auth/registration-vendor/registration-vendor.component';
import {
  IndexComponent as ConsumerIndexComponent,
  IndexComponent as VendorIndexComponent,
} from './consumers/index/index.component';
import { consumerRoutes } from './consumers/counsumers.route';
import { vendorRoutes } from './vendors/vendors.route';

export const routes: Routes = [
  {
    path: 'consumers',
    title: 'Konsumen',
    component: ConsumerIndexComponent,
    children: consumerRoutes,
  },
  {
    path: 'vendors',
    title: 'Produsen',
    component: VendorIndexComponent,
    children: vendorRoutes,
  },
  {
    path: 'register',
    title: 'Pendaftaran',
    component: RegistrationComponent,
  },
  {
    path: 'register/consumer',
    title: 'Pendaftaran Konsumen',
    component: RegistrationConsumerComponent,
  },
  {
    path: 'register/vendor',
    title: 'Pendaftaran Produsen',
    component: RegistrationVendorComponent,
  },
  {
    path: 'login',
    title: 'Masuk',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];
