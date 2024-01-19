import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LayoutsModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formData = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(64),
      ],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(128),
      ],
    }),
  });

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    if (!this.formData.valid) return;
    const data = this.formData.value;
    console.log(data);

    const user = await this.authService.login(data.username!, data.password!);
    if (user.vendor) this.router.navigate(['/vendors']);
    else if (user.consumer) this.router.navigate(['/consumers']);
    else this.router.navigate(['/']);
  }
}
