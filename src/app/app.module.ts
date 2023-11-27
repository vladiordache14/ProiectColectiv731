import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsModule } from './offers/module/adverts.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, AdvertsModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
