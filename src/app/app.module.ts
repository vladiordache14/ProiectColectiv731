import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsModule } from './offers/module/adverts.module';
//import { ConfirmationDialogComponent } from './offers/components/confirmation-dialog/confirmation-dialog.component';
import {ConfirmationDialogService} from "./offers/components/confirmation-dialog.service";


@NgModule({
  declarations: [
    AppComponent,
    //ConfirmationDialogComponent

  ],
  imports: [
    BrowserModule,
    [AdvertsModule],
  ],
  providers: [ConfirmationDialogService],
  exports: [
    //ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
