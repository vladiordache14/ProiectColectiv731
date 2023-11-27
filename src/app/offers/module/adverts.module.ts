import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AdvertService } from "../service/advert.service";
import { AdvertsComponent } from "../components/adverts.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    AdvertsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppModule
  ],
  providers: [
    AdvertService
  ],
  exports: [
    AdvertsComponent
  ]
})
export class AdvertsModule { }
