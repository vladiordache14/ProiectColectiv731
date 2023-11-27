import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {User} from "../../model/user";
import {SignupService} from "../../service/signup.service";
import { PassResetServiceService } from "../../service/pass-reset-service.service"


@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css']
})
export class First_pageComponent {

  displayDialog: boolean = false;
  username: string = "";
  password: string = "";
  messages: any[] = []; // Array to store messages

  usernameInvalid: boolean = true;
  passwordInvalid: boolean = true;

  constructor(private messageService: MessageService, private signupService: SignupService, private passResetService: PassResetServiceService) {
  }

  logInPopup() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  logIn(){
    const currentUser = new User(this.username, this.password);
    this.signupService.login(currentUser).subscribe(
      {
        next: (response: string) => {
          this.messageService.add({severity: 'success', summary: response});
        },
        error: (error: any) => {
          this.messageService.add({severity: 'error', summary: error.error});
          console.error(error);
        }
      }
    );
  }

  resetPass(){
    if (this.username==""){
      alert("Fill in your username")
      return;
    }
    this.passResetService.reset(this.username,{responseType: 'text'}).subscribe(
      {
        next: (response: string) => {
          this.messageService.add({severity: 'success', summary: response});
          console.log(response);
        },
        error: (error: any) => {
          this.messageService.add({severity: 'error', summary: error.error});
          console.error(error);
        },
  }
  );
  alert("An email has been sent to you if you typed your username correctly")

}

}