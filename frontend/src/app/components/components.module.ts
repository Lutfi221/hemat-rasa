import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceCardsComponent } from './choice-cards/choice-cards.component';
import { ChoiceCardComponent } from './choice-card/choice-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { VendorGalleryComponent } from './vendor-gallery/vendor-gallery.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ChoiceCardsComponent,
    ChoiceCardComponent,
    FormComponent,
    VendorGalleryComponent,
  ],
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
  exports: [
    ChoiceCardsComponent,
    ChoiceCardComponent,
    FormComponent,
    VendorGalleryComponent,
  ],
})
export class ComponentsModule {}
