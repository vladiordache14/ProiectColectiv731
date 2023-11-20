import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css']
})
export class First_pageComponent {

  displayDialog: boolean = false;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  selectedRole: string | undefined;
  roleOptions: string[] = ['Seller', 'Buyer'];
  address: string | undefined;
  phone: string | undefined;
  messages: any[] = []; // Array to store messages

  usernameInvalid: boolean = true;
  passwordInvalid: boolean = true;
  emailInvalid: boolean = true;
  roleInvalid: boolean = true;
  addressInvalid: boolean = false;
  phoneInvalid: boolean = false;

  constructor(private messageService: MessageService) {}

  checkUsername() {
    this.usernameInvalid = false;

    if (!this.username) {
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

    if (!this.password || this.password.length > 30) {
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

  checkEmail() {
    this.emailInvalid = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (!this.email) {
      this.emailInvalid = true;
    } else if(!(emailPattern.test(<string>this.email))){
      this.emailInvalid = true;
    }
  }

  checkRole() {
    this.roleInvalid = false;
    if (!this.selectedRole) {
      this.roleInvalid = true;
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
    console.log("Create account clicked!");
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }


  registerUser(){
    if(this.usernameExists(this.username)){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username already exists!' });

    }else{
      //backend create account
    }
  }
  usernameExists(username:any){
    //some backend code check if username exists
    return true;
  }

  fieldsValid(){
    if(this.usernameInvalid || this.passwordInvalid || this.emailInvalid || this.roleInvalid || this.addressInvalid || this.phoneInvalid){
      return false;
    }
    return true;
  }
}
