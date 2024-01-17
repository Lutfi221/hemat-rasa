import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralComponent } from './central/central.component';

@NgModule({
  declarations: [CentralComponent],
  imports: [CommonModule],
  exports: [CentralComponent],
})
export class LayoutsModule {}
