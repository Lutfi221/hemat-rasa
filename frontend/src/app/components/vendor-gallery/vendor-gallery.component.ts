import { Component, Input } from '@angular/core';
import { Vendor } from '../../types';

@Component({
  selector: 'component-vendor-gallery',
  templateUrl: './vendor-gallery.component.html',
  styleUrl: './vendor-gallery.component.scss',
})
export class VendorGalleryComponent {
  @Input() vendors: Vendor[] = [];

  constructor() {}
}
