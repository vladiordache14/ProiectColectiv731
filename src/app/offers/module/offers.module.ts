import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {OffersService} from "../service/offers.service";
import {OffersComponent} from "../components/offers.component";

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    OffersService
  ],
  exports: [
    OffersComponent
  ]
})
export class OffersModule { }
