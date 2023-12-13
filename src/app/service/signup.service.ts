import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8080/authenticate/login'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  login(loginData: User): Observable<any>{
    return this.http.post(this.apiUrl, loginData);
  }

}
