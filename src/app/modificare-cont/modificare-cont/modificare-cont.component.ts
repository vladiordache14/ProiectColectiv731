import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModificareContService } from '../services/modificare-cont.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-modificare-cont',
  templateUrl: './modificare-cont.component.html',
  styleUrls: ['./modificare-cont.component.css'],
})
export class ModificareContComponent implements OnInit, OnDestroy {
  displayDialog: boolean = false;
  email: string = '';
  address: string = '';
  phone: string = '';
  messages: any[] = []; // Array to store messages
  role: string = '';
  username: string = '';
  password: string = '';

  emailInvalid: boolean = true;
  addressInvalid: boolean = false;
  phoneInvalid: boolean = false;

  public modificareContService = inject(ModificareContService);
  public messageService = inject(MessageService);
  private unsibscribe = new Subject();

  constructor() {
    this.modificareContService.modificareContDialogState
      .pipe(takeUntil(this.unsibscribe))
      .subscribe((value) => {
        this.displayDialog = value;
        this.getUserDetails();
      });


  }
  ngOnInit(): void {
    this.messages = [];
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

  getUserDetails() {
    const username = localStorage.getItem('username');

    if (username) {
      console.log(username);
      this.modificareContService
        .GetDetaliiCont(username)
        .subscribe((response) => {
          if (response) {
            this.role = response.role;
            this.username = response.username;
            this.password = response.password;
            this.email = response.email;
            this.address = response.address;
            this.phone = response.phoneNumber;
            this.CheckAll();
          }
        });
    }
  }

  private CheckAll() {
    this.checkAddress();
    this.checkEmail();
    this.checkPhone();
  }

  saveUser() {
    if (this.fieldsValid()) {
      const user = {
        username: this.username,
        role: this.role,
        password: this.password,
        email: this.email,
        address: this.address,
        phoneNumber: this.phone,
      };
      this.modificareContService.SaveChanges(user).subscribe({
        next: (response: string) => {
          if (response === 'User updated successfully!') {
            this.messageService.add({ severity: 'success', summary: response });
            this.modificareContService.CloseModificareCont();
          }
        },
        error: (error: any) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: error.message,
          });
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.unsibscribe.next('');
  }
}
