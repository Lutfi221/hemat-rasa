import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCardComponent } from './choice-card.component';

describe('ChoiceCardComponent', () => {
  let component: ChoiceCardComponent;
  let fixture: ComponentFixture<ChoiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
