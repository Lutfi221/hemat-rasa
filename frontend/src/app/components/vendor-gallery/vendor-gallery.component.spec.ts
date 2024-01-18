import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGalleryComponent } from './vendor-gallery.component';

describe('VendorGalleryComponent', () => {
  let component: VendorGalleryComponent;
  let fixture: ComponentFixture<VendorGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
