import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {User} from "../../../model/user";
import {SignupService} from "./signup.service";
import {Router} from "@angular/router";
import { ModificareContService } from 'src/app/modificare-cont/services/modificare-cont.service';


@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css'],
})
export class First_pageComponent {

  displayDialog1: boolean = false;
  displayDialog: boolean = false;
  username: string = "";
  password: string = "";
  email: string = "";
  selectedRole: string = "";
  roleOptions: string[] = ['SELLER', 'BUYER'];
  address: string = "";
  phone: string = "";

  messages: any[] = []; // Array to store messages

  usernameInvalid: boolean = true;
  passwordInvalid: boolean = true;
  emailInvalid: boolean = true;
  roleInvalid: boolean = true;
  addressInvalid: boolean = false;
  phoneInvalid: boolean = false;

  constructor(private messageService: MessageService, private signupService: SignupService, private router:Router, private modificareContService : ModificareContService) {
  }

  checkUsername() {
    this.usernameInvalid = false;

    if (this.username.length == 0) {
      this.usernameInvalid = true; // Username is mandatory
    } else if (this.username.length > 30) {
      this.usernameInvalid = true; // Max length is 30 characters
    }
  }

  checkPassword() {
    this.passwordInvalid = false;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;

    if (this.password.length == 0 || this.password.length > 30) {
      this.passwordInvalid = true;
    } else if (!(uppercaseRegex.test(<string>this.password))) {
      this.passwordInvalid = true;
    } else if (!(lowercaseRegex.test(<string>this.password))) {
      this.passwordInvalid = true;
    } else if (!(digitRegex.test(<string>this.password))) {
      this.passwordInvalid = true;
    }
  }

  checkEmail() {
    this.emailInvalid = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (this.email.length == 0) {
      this.emailInvalid = true;
    } else if (!(emailPattern.test(<string>this.email))) {
      this.emailInvalid = true;
    }
  }

  checkRole() {
    this.roleInvalid = false;
    if (!this.selectedRole) {
      this.roleInvalid = true;
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

  createAccountPopup() {
    this.displayDialog1 = true;
  }

  hideDialog1() {
    this.displayDialog1 = false;
  }


  registerUser() {
    if (this.fieldsValid()) {
      const currentUser = new User(this.username, this.password, this.email, this.selectedRole.toString(), this.address, this.phone)

      this.signupService.signup(currentUser, {responseType: 'text'}).subscribe(
        {
          next: (response: string) => {
            this.messageService.add({severity: 'success', summary: response});
            this.username = "";
            this.usernameInvalid = true;
            this.password = "";
            this.passwordInvalid = true;
            this.email = "";
            this.emailInvalid = true;
            this.selectedRole = "";
            this.roleInvalid = true;
            this.address = "";
            this.addressInvalid = false;
            this.phone = "";
            this.phoneInvalid = false;
            this.router.navigate(['/page-one'])
            console.log(response);
          },
          error: (error: any) => {
            this.messageService.add({severity: 'error', summary: error.error});
            console.error(error);
          },
        }
      );
    }
  }

  fieldsValid() {
    if (this.usernameInvalid || this.passwordInvalid || this.emailInvalid || this.roleInvalid || this.addressInvalid || this.phoneInvalid) {
      return false;
    }
    return true;
  }
  logInPopup() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  logIn(){
    const currentUser = new User(this.username, this.password,'','','','');
    this.signupService.login(currentUser).subscribe(
      {
        next: (response: string) => {
          this.messageService.add({severity: 'success', summary: response});
          this.router.navigate(['/adverts'])
        },
        error: (error: any) => {
          this.messageService.add({severity: 'error', summary: error.error});
          console.error(error);
          this.router.navigate(['/adverts'])

        }
      }
    );
  }
  public updateCont() {
    if (localStorage.getItem('isUserAuthenticated') === 'true') {
      this.modificareContService.OpenModificareCont();
    } else {
      //AuthenticationService.OpenLoginModal();
    }
  }

}

