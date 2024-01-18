import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { Stock } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Envelope } from '../../../types';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [ComponentsModule, LayoutsModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent implements OnInit {
  stocks: Stock[] = [];
  vendorId?: number;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.vendorId = params['vendorId'];
    });
  }

  ngOnInit() {
    this.http
      .get<Envelope<Stock[]>>(
        `${environment.apiUrl}/vendors/${this.vendorId}/stocks`
      )
      .subscribe((res) => {
        this.stocks = res.data;
        console.log(res);
      });
  }
}
