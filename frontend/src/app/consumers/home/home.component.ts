import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Vendor } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Envelope } from '../../../types';
import { AuthService } from '../../../auth/auth.service';
import { environment } from '../../../environments/environment';
import { LayoutsModule } from '../../layouts/layouts.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, LayoutsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  vendors: Vendor[] = [];
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    this.http
      .get<Envelope<Vendor[]>>(
        `${environment.apiUrl}/consumers/${user!.consumer?.id}/vendors-for-you`
      )
      .subscribe((res) => {
        this.vendors = res.data;
      });
  }
}
