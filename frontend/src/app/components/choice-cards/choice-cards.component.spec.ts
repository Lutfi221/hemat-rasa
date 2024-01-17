import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCardsComponent } from './choice-cards.component';

describe('ChoiceCardsComponent', () => {
  let component: ChoiceCardsComponent;
  let fixture: ComponentFixture<ChoiceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
