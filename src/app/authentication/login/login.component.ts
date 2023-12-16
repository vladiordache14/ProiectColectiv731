import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { User } from 'src/app/model/user';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscriptionEnd.next('');
  }

  @Input() dialogState: boolean = false;

  public signupService = inject(SignupService);
  private messageService = inject(MessageService);
  private subscriptionEnd = new Subject();

  public username: string = '';
  public password: string = '';
  public messages: any[] = []; // Array to store messages

  ngOnInit(): void {
    this.signupService.openLoginModal
      .pipe(takeUntil(this.subscriptionEnd))
      .subscribe((value) => {
        this.dialogState = value;
      });
  }

  logIn() {
    const currentUser = new User(this.username, this.password);
    this.signupService.login(currentUser).subscribe({
      next: (response: string) => {
        this.messageService.add({ severity: 'success', summary: response });
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.error });
        console.error(error);
      },
    });
  }
}
