import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsRoutingModule } from './offers/adverts-routing.module';
import {AdvertsComponent} from "./offers/components/advert/adverts.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './offers/components/navbar/navbar.component';
import { CreateAdvertComponent } from './offers/components/create-advert/create-advert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAdvertModalService } from './offers/service/create-advert-modal.service';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    NavbarComponent,
    CreateAdvertComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AdvertsRoutingModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, FormsModule, ReactiveFormsModule, MatDialogModule
  ],
  providers: [
      CreateAdvertModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
