import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsRoutingModule } from './offers/adverts-routing.module';
import {AdvertsComponent} from "./offers/components/adverts.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { CartDialogComponent } from './cart-dialog/components/cart-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    CartDialogComponent,
  ],
    imports: [
        BrowserModule, HttpClientModule, AdvertsRoutingModule, AppRoutingModule, MatIconModule,
      MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
