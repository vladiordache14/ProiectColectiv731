import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    MessagesModule,
    PasswordModule,
    HttpClientModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [MessageService],
})
export class AuthenticationModule {}
