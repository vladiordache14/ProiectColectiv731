//This service keeps track on which page we are at (All Offers ir My Offers) and can change the page

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private _isToggled = new BehaviorSubject<boolean>(false);

  get isToggled$() {
    return this._isToggled.asObservable();
  }

  toggle() {
    this._isToggled.next(!this._isToggled.value);
  }
}