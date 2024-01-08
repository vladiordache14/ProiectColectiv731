import { Component } from '@angular/core';
import {LogoutService} from "../../service/logout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(private logoutService: LogoutService, private router: Router){}

  logoutPopup: boolean = false;

  showLogoutPopup(){
    this.logoutPopup = true;
  }

  onYesClick(){
    this.logoutPopup = false;
    this.router.navigate(['./first_page']);
    this.logoutService.logout();
  }
  onNoClick(){
    this.logoutPopup = false;
  }


}

