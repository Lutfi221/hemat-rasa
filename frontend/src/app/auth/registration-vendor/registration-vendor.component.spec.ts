import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationVendorComponent } from './registration-vendor.component';

describe('RegistrationVendorComponent', () => {
  let component: RegistrationVendorComponent;
  let fixture: ComponentFixture<RegistrationVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationVendorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
