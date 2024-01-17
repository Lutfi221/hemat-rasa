import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [LayoutsModule, ComponentsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {}
