import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassResetServiceService {

  private apiUrl = 'http://localhost:8080/passReset/reset?username='; // Update with your backend URL

  constructor(private http: HttpClient) { }

  public reset(username:string,options:any={}): Observable<any> {
    return this.http.post(this.apiUrl+username,username,options);
  }

}
