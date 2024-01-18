import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceCardsComponent } from './choice-cards/choice-cards.component';
import { ChoiceCardComponent } from './choice-card/choice-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { VendorGalleryComponent } from './vendor-gallery/vendor-gallery.component';
import { MatButtonModule } from '@angular/material/button';
import { StockGalleryComponent } from './stock-gallery/stock-gallery.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ChoiceCardsComponent,
    ChoiceCardComponent,
    FormComponent,
    VendorGalleryComponent,
    StockGalleryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ChoiceCardsComponent,
    ChoiceCardComponent,
    FormComponent,
    VendorGalleryComponent,
    StockGalleryComponent,
  ],
})
export class ComponentsModule {}
