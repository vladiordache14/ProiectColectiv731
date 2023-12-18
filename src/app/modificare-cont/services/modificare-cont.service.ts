import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class ModificareContService {
  public modificareContDialogState = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:8080/users'; // Update with your backend URL

  private http = inject(HttpClient);

  public OpenModificareCont() {
    this.modificareContDialogState.next(true);
  }

  public CloseModificareCont() {
    this.modificareContDialogState.next(false);
  }

  public GetDetaliiCont(username: string) {

    const user = {};
    return this.http.post<User>(
      this.apiUrl + '/getCurrentUserData',
      { username: username },
      {
        responseType: 'json',
      }
    );
  }

  public SaveChanges(UserModified: Partial<User>) {
    return this.http.post(this.apiUrl + '/update', UserModified, {
      responseType: 'text',
    });
  }
}
