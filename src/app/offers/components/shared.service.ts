import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private confirmationDialogSubject = new Subject<void>();

  showConfirmationDialog(): void {
    this.confirmationDialogSubject.next();
  }

  getConfirmationDialogSubject(): Subject<void> {
    return this.confirmationDialogSubject;
  }
}
