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
    console.log(this._isToggled.value);
  }
}