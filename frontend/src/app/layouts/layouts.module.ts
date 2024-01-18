import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralComponent } from './central/central.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [CentralComponent, MainComponent],
  imports: [CommonModule],
  exports: [CentralComponent, MainComponent],
})
export class LayoutsModule {}
