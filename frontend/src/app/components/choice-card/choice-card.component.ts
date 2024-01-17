import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-choice-card',
  templateUrl: './choice-card.component.html',
  styleUrl: './choice-card.component.scss',
})
export class ChoiceCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() routerLink: string = '';
}
