import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { First_pageComponent } from './pages/first_page/./first_page.component';
import {RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { MessageService } from 'primeng/api';
import {MessagesModule} from "primeng/messages";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    First_pageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    MessagesModule,
    ChipsModule,
    PasswordModule,
    HttpClientModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
