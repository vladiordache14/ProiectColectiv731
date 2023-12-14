import { NgModule } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { MessageService } from 'primeng/api';
import {MessagesModule} from "primeng/messages";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import {First_pageComponent} from "../components/first_page/first_page.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [First_pageComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    MessagesModule,
    ChipsModule,
    PasswordModule,
  ],
  providers: [MessageService],
})
export class First_pageModule { }
