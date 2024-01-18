import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RegistrationConsumerComponent } from './auth/registration-consumer/registration-consumer.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'register/consumer',
    component: RegistrationConsumerComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];
