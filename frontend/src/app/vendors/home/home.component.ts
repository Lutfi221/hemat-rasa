import { Component } from '@angular/core';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AuthService } from '../../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../../types';
import { environment } from '../../../environments/environment';
import { MatTableModule } from '@angular/material/table';
import { Envelope } from '../../../types';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutsModule, MatTableModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stocks: Stock[] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = [
    'name',
    'humanName',
    'price',
    'expireAt',
    'quantity',
    'desc',
    'actions',
  ];
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    const user = this.authService.getUser();
    this.http
      .get<Envelope<Stock[]>>(
        `${environment.apiUrl}/vendors/${user!.vendor?.id}/stocks`
      )
      .subscribe((res) => {
        console.log(res);
        this.stocks = res.data;
        this.dataSource = this.stocks.map((stock) => ({
          id: stock.id,
          name: stock.product.name,
          humanName: stock.product.humanName,
          price: stock.product.price,
          expireAt: new Date(stock.product.expireAt),
          quantity: stock.quantity,
          desc: stock.product.desc,
        }));
      });
  }
}
