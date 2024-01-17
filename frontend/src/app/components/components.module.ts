import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceCardsComponent } from './choice-cards/choice-cards.component';
import { ChoiceCardComponent } from './choice-card/choice-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ChoiceCardsComponent, ChoiceCardComponent, FormComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [ChoiceCardsComponent, ChoiceCardComponent, FormComponent],
})
export class ComponentsModule {}
