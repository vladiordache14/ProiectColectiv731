import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  private showDialogSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showDialog$: Observable<boolean> = this.showDialogSubject.asObservable();

  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  message$: Observable<string> = this.messageSubject.asObservable();

  show(message: string): void {
    this.messageSubject.next(message);
    this.showDialogSubject.next(true);
  }

  hide(): void {
    this.showDialogSubject.next(false);
  }

  //constructor() { }
}
