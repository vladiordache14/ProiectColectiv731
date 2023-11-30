import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import AppRoute
import { AppComponent } from './app.component';
import { AdvertsModule } from './offers/module/adverts.module';
//import { ConfirmationDialogComponent } from './offers/components/confirmation-dialog/confirmation-dialog.component';
import {ConfirmationDialogService} from "./offers/components/confirmation-dialog.service";
import { EditAdvertComponentComponent } from './offers/components/edit-advert-component/edit-advert-component.component';
import { AppRoutingModule } from './offers/components/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EditAdvertComponentComponent,
    //ConfirmationDialogComponent

  ],
  imports: [
    BrowserModule,
    AdvertsModule,
    FormsModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [ConfirmationDialogService],
  exports: [
    //ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
