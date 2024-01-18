import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RegistrationConsumerComponent } from './auth/registration-consumer/registration-consumer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationVendorComponent } from './auth/registration-vendor/registration-vendor.component';
import { IndexComponent as ConsumerIndexComponent } from './consumers/index/index.component';
import { consumerRoutes } from './consumers/counsumers.route';

export const routes: Routes = [
  {
    path: 'consumers',
    title: 'Konsumen',
    component: ConsumerIndexComponent,
    children: consumerRoutes,
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
