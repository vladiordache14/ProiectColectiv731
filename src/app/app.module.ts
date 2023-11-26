import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { ToggleService } from './services/toggle.service';
import { ModifyAndDeactivateButtonsComponent } from './modify-and-deactivate-buttons/modify-and-deactivate-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent, 
    PageOneComponent,
    PageTwoComponent,
    ModifyAndDeactivateButtonsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

