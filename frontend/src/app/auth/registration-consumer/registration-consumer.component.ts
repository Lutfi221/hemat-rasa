import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
  consumerData = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.consumerData.value);
  }
}
