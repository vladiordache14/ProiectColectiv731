import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/model/user';
import {ModificareContService} from "../../modificare-cont/services/modificare-cont.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private modificareContService = inject(ModificareContService);

  private apiUrl = 'http://localhost:8080/authenticate/login'; // Update with your backend URL
  private sucessMessage = 'Login successful.';
  public readonly authenticationState = new BehaviorSubject<boolean>(false);
  public openLoginModal = new BehaviorSubject<boolean>(false);
  public redirectToUpdateAccount = new BehaviorSubject<boolean>(false);

  public login(loginData: User): Observable<any> {
    return this.http
      .post(this.apiUrl, loginData, { responseType: 'text' })
      .pipe(
        tap((result) => {
          if (result === this.sucessMessage) {
            this.saveAuthenticatedFlag(true);
            if(this.redirectToUpdateAccount.value)
            {
              this.redirectToUpdateAccount.next(false);
              this.modificareContService.OpenModificareCont();
              this.openLoginModal.next(false);
            }
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
    localStorage.setItem('isUserAuthenticated', state.toString());
  }

  private getAuthenticatedFlag(): boolean {
    const isAuthenticated = localStorage.getItem('isUserAuthenticated');
    if (isAuthenticated === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
