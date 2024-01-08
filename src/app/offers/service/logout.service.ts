import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }

  logout(): void {
    console.log('User logged out');
    localStorage.removeItem('username');
    // Implement logout logic here, such as clearing authentication tokens, user data, etc.
  }

}
