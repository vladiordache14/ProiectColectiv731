//This is the 'My offers' page

import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../service/data-sharing.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-page-two',
  template: `
  <body>
    <div>
      <app-logout-button></app-logout-button>

      <app-toggle-button></app-toggle-button>

      <!-- Makes the string it recives from page-one to be the actual HTML of this page -->
      <div [innerHTML]="htmlContent"></div>
    </div>
  </body>
  `,
})
export class PageTwoComponent implements OnInit {
  //SafeHtml and the DomSanatizer are needed because otherwise Angular's security features won't
  //let the string recived from page-one be implemented as the HTML for this page.
  htmlContent : SafeHtml = '';

  constructor(
    private dataSharingService: DataSharingService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.dataSharingService.htmlContent$.subscribe((htmlContent) => {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
    });
  }

}
