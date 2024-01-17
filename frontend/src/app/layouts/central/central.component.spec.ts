import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralComponent } from './central.component';

describe('CentralComponent', () => {
  let component: CentralComponent;
  let fixture: ComponentFixture<CentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
