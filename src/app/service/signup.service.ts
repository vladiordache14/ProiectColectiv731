import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8080/users/signup'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  signup(signupData: User, options: any = {}): Observable<any> {
    return this.http.post(this.apiUrl, signupData,{ ...options });
  }

}
