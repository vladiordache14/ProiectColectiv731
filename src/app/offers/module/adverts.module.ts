import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AdvertService } from "../service/advert.service";
import {AdvertsComponent} from "../components/adverts.component";
import {ToggleButtonComponent} from "../components/toggle-button/toggle-button.component";
import {PageTwoComponent} from "../components/page-two/page-two.component";
import {
  ModifyAndDeactivateButtonsComponent
} from "../components/modify-and-deactivate-buttons/modify-and-deactivate-buttons.component";
import {AdvertsRoutingModule} from "../adverts-routing.module";

@NgModule({
  declarations: [AdvertsComponent, ToggleButtonComponent,PageTwoComponent,ModifyAndDeactivateButtonsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdvertsRoutingModule
  ],
  providers: [
    AdvertService
  ],
})
export class AdvertsModule { }
