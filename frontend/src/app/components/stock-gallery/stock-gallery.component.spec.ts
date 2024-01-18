import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGalleryComponent } from './stock-gallery.component';

describe('StockGalleryComponent', () => {
  let component: StockGalleryComponent;
  let fixture: ComponentFixture<StockGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
