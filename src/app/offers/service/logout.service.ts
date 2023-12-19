import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiUrl = 'http://localhost:8080/users/logout'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  logout(): void {
    console.log('User logged out');
    // Implement logout logic here, such as clearing authentication tokens, user data, etc.
    this.http.post(this.apiUrl,"");
  }

}
