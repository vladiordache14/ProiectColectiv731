import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsRoutingModule } from './offers/adverts-routing.module';
import {AdvertsComponent} from "./offers/components/adverts.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { ToggleButtonComponent } from './offers/components/toggle-button/toggle-button.component';
import { PageTwoComponent } from './offers/components/page-two/page-two.component';
import { ModifyAndDeactivateButtonsComponent } from './offers/components/modify-and-deactivate-buttons/modify-and-deactivate-buttons.component';
import { ToggleService } from './offers/service/toggle.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    ToggleButtonComponent,
    PageTwoComponent,
    ModifyAndDeactivateButtonsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AdvertsRoutingModule, AppRoutingModule
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
