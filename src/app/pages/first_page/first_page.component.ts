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
  username: string = "";
  password: string = "";
  messages: any[] = []; // Array to store messages

  usernameInvalid: boolean = true;
  passwordInvalid: boolean = true;

  constructor(private messageService: MessageService, private signupService: SignupService) {
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

}





