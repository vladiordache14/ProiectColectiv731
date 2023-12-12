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
  email: string="";
  address: string="";
  phone: string="";
  messages: any[] = []; // Array to store messages

  emailInvalid: boolean = true;
  addressInvalid: boolean = false;
  phoneInvalid: boolean = false;

  constructor(private messageService: MessageService, private signupService: SignupService) {}


  checkEmail() {
    this.emailInvalid = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (this.email.length == 0) {
      this.emailInvalid = true;
    } else if(!(emailPattern.test(<string>this.email))){
      this.emailInvalid = true;
    }
  }

  checkAddress(){
    this.addressInvalid = false;
    if(this.address){
      if(this.address.length>300){
        this.addressInvalid = true;
      }
    }
  }

  checkPhone(){
    this.phoneInvalid = false;
    const onlyNumbersRegex = /^\d+$/;

    if(this.phone){
      if(this.phone.length != 10 || !onlyNumbersRegex.test(this.phone)){
        this.phoneInvalid = true;
      }
    }
  }

  createAccountPopup(){
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }


  registerUser(){
    if(this.fieldsValid()) {
      const currentUser = new User(this.username, this.password, this.email, this.selectedRole.toString(), this.address, this.phone)

      this.signupService.signup(currentUser, {responseType: 'text'}).subscribe(
        {
          next: (response: string) => {
            this.messageService.add({severity: 'success', summary: response});
            this.username="";
            this.usernameInvalid=true;
            this.password="";
            this.passwordInvalid=true;
            this.email="";
            this.emailInvalid = true;
            this.selectedRole="";
            this.roleInvalid = true;
            this.address="";
            this.addressInvalid = false;
            this.phone="";
            this.phoneInvalid=false;
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
    if( this.emailInvalid ||  this.addressInvalid || this.phoneInvalid){
      return false;
    }
    return true;
  }
}
