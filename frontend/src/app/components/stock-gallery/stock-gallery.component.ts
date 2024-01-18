import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Stock } from '../../types';

@Component({
  selector: 'component-stock-gallery',
  templateUrl: './stock-gallery.component.html',
  styleUrl: './stock-gallery.component.scss',
})
export class StockGalleryComponent implements OnChanges {
  @Input() stocks: Stock[] = [];
  /**
   * Time left for each stock until expiration in days
   */
  daysLefts: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stocks']) {
      this.daysLefts = this.stocks.map((stock) => {
        const now = new Date().getTime();
        const expiration = new Date(stock.product.expireAt).getTime();
        return Math.floor((expiration - now) / (1000 * 60 * 60 * 24));
      });
    }
  }
}
