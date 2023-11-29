import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsRoutingModule } from './offers/adverts-routing.module';
import {AdvertsComponent} from "./offers/components/adverts.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AdvertsRoutingModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
