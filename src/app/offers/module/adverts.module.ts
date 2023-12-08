import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { HttpClientModule } from "@angular/common/http";
import { AdvertService } from "../service/advert.service";
import { AdvertsComponent } from "../components/adverts.component";
import {ConfirmationDialogService} from "../components/confirmation-dialog.service";
import {AppModule} from "../../app.module";
import {ConfirmationDialogComponent} from "../components/confirmation-dialog/confirmation-dialog.component";
import {EditAdvertComponentComponent} from "../components/edit-advert-component/edit-advert-component.component";

@NgModule({
  declarations: [
    AdvertsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AdvertService
  ],
  exports: [
    AdvertsComponent,
    ConfirmationDialogComponent
  ]
})
export class AdvertsModule { }
