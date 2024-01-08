import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificareContComponent } from './modificare-cont/modificare-cont.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    PasswordModule,
    MessagesModule,
  ],
  declarations: [ModificareContComponent],
  exports: [ModificareContComponent],
})
export class ModificareContModule {}
