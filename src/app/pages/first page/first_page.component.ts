import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {User} from "../../model/user";
import {SignupService} from "../../service/signup.service";


@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css']
})
export class First_pageComponent {

  displayDialog: boolean = false;
  username: string="";
  password: string="";
  messages: any[] = []; // Array to store messages

  usernameInvalid: boolean = true;
  passwordInvalid: boolean = true;

  constructor(private messageService: MessageService, private signupService: SignupService) {}

  checkUsername() {
    this.usernameInvalid = false;

    if (this.username.length==0) {
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
    }
    else if (!(uppercaseRegex.test(<string>this.password))){
      this.passwordInvalid = true;
    }
    else if (!(lowercaseRegex.test(<string>this.password))){
      this.passwordInvalid = true;
    }
    else if (!(digitRegex.test(<string>this.password))){
      this.passwordInvalid = true;
    }
  }

  logInPopup(){
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }


  registerUser(){
    if(this.fieldsValid()) {
      const currentUser = new User(this.username, this.password)

      this.signupService.signup(currentUser, {responseType: 'text'}).subscribe(
        {
          next: (response: string) => {
            this.messageService.add({severity: 'success', summary: response});
            this.username="";
            this.usernameInvalid=true;
            this.password="";
            this.passwordInvalid=true;
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

  fieldsValid(){
    if(this.usernameInvalid || this.passwordInvalid){
      return false;
    }
    return true;
  }
}
