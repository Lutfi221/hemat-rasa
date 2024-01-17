import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'layout-central',
  templateUrl: './central.component.html',
  styleUrl: './central.component.scss',
})
export class CentralComponent implements OnInit {
  isSmall = false;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmall = result.matches;
      });
  }
}
