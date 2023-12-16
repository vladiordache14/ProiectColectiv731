import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class ModificareContService {
  public modificareContDialogState = new BehaviorSubject<boolean>(false);

  public OpenModificareCont() {
    this.modificareContDialogState.next(true);
  }

  public CloseModificareCont() {
    this.modificareContDialogState.next(false);
  }

  public SaveChanges(UserModified: User) {
    /*
    if (this.fieldsValid()) {
      const currentUser = new User(this.username, this.password, this.email, this.selectedRole.toString(), this.address, this.phone)

      this.signupService.signup(currentUser, {responseType: 'text'}).subscribe(
        {
          next: (response: string) => {
            this.messageService.add({severity: 'success', summary: response});
            this.username="";
            this.usernameInvalid=true;
            this.password="";
            this.passwordInvalid=true;
            this.email="";
            this.emailInvalid = true;
            this.selectedRole="";
            this.roleInvalid = true;
            this.address="";
            this.addressInvalid = false;
            this.phone="";
            this.phoneInvalid=false;
            console.log(response);
          },
          error: (error: any) => {
            this.messageService.add({severity: 'error', summary: error.error});
            console.error(error);
          },
        }
      );
    }*/
  }
}
