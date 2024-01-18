import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../auth/auth.service';
import { CreateConsumerDto, CreateUserDto } from '../../../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-consumer',
  standalone: true,
  imports: [
    LayoutsModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './registration-consumer.component.html',
  styleUrl: './registration-consumer.component.scss',
})
export class RegistrationConsumerComponent {
  formData = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const data = this.formData.value;
    const userData: CreateUserDto = {
      username: data.username || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
    };
    const consumerData = {
      address: data.address || '',
      location: {
        type: 'Point',
        coordinates: [0, 0],
      },
    } as Omit<CreateConsumerDto, 'userId'>;

    this.authService.registerConsumer(userData, consumerData);
    this.router.navigate(['/login']);
  }
}
