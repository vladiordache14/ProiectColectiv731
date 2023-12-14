//This service makes it possible for page-one (The All Offers page) to send the HTML code as a string
//to page-two (The My Offers page).

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private htmlContentSubject = new BehaviorSubject<string>('');
  public htmlContent$ = this.htmlContentSubject.asObservable();

  setHtmlContent(htmlContent: string): void {
    this.htmlContentSubject.next(htmlContent);
  }
}