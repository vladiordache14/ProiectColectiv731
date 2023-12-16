import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/authenticate/login'; // Update with your backend URL
  private sucessMessage = 'Login successful.';
  public readonly authenticationState = new BehaviorSubject<boolean>(false);
  public openLoginModal = new BehaviorSubject<boolean>(false);

  public login(loginData: User): Observable<any> {
    return this.http
      .post(this.apiUrl, loginData, { responseType: 'text' })
      .pipe(
        tap((result) => {
          if (result === this.sucessMessage) {
            this.saveAuthenticatedFlag(true);
          } else {
            this.saveAuthenticatedFlag(false);
          }
        })
      );
  }

  public isAuthenticated(): boolean {
    return this.getAuthenticatedFlag();
  }

  private saveAuthenticatedFlag(state: boolean) {
    this.authenticationState.next(state);
  }

  private getAuthenticatedFlag(): boolean {
    return this.authenticationState.value;
  }
}
