import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../auth/auth.service';
import { CreateUserDto, CreateVendorDto } from '../../../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-vendor',
  standalone: true,
  imports: [
    LayoutsModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './registration-vendor.component.html',
  styleUrl: './registration-vendor.component.scss',
})
export class RegistrationVendorComponent {
  formData = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    vendorName: new FormControl('', { nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const data = this.formData.value;
    const userData: CreateUserDto = {
      username: data.username || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
    };
    const vendorData = {
      name: data.vendorName || '',
      address: data.address || '',
      location: {
        type: 'Point',
        coordinates: [0, 0],
      },
    } as Omit<CreateVendorDto, 'userId'>;

    this.authService.registerVendor(userData, vendorData);
    this.router.navigate(['/login']);
  }
}
