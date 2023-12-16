import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModificareContService } from '../services/modificare-cont.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modificare-cont',
  templateUrl: './modificare-cont.component.html',
  styleUrls: ['./modificare-cont.component.css'],
})
export class ModificareContComponent implements OnDestroy {
  displayDialog: boolean = false;
  email: string = '';
  address: string = '';
  phone: string = '';
  messages: any[] = []; // Array to store messages

  emailInvalid: boolean = true;
  addressInvalid: boolean = false;
  phoneInvalid: boolean = false;

  public modificareContService = inject(ModificareContService);
  private unsibscribe = new Subject();

  constructor(private messageService: MessageService) {
    this.modificareContService.modificareContDialogState
      .pipe(takeUntil(this.unsibscribe))
      .subscribe((value) => {
        this.displayDialog = value;
      });
  }

  checkEmail() {
    this.emailInvalid = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (this.email.length == 0) {
      this.emailInvalid = true;
    } else if (!emailPattern.test(<string>this.email)) {
      this.emailInvalid = true;
    }
  }

  checkAddress() {
    this.addressInvalid = false;
    if (this.address) {
      if (this.address.length > 300) {
        this.addressInvalid = true;
      }
    }
  }

  checkPhone() {
    this.phoneInvalid = false;
    const onlyNumbersRegex = /^\d+$/;

    if (this.phone) {
      if (this.phone.length != 10 || !onlyNumbersRegex.test(this.phone)) {
        this.phoneInvalid = true;
      }
    }
  }

  fieldsValid() {
    if (this.emailInvalid || this.addressInvalid || this.phoneInvalid) {
      return false;
    }
    return true;
  }

  saveUser() {}

  ngOnDestroy(): void {
    this.unsibscribe.next('');
  }
}
