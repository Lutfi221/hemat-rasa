import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConsumerComponent } from './registration-consumer.component';

describe('RegistrationConsumerComponent', () => {
  let component: RegistrationConsumerComponent;
  let fixture: ComponentFixture<RegistrationConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationConsumerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
