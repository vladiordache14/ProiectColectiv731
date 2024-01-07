import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AdvertService } from "../service/advert.service";
import {ReactiveFormsModule} from "@angular/forms";
import {AdvertsRoutingModule} from "../adverts-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdvertsRoutingModule
  ],
  providers: [
    AdvertService,
  ],
})
export class AdvertsModule { }
