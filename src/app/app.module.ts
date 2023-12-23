import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertsComponent } from './offers/components/adverts.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToggleButtonComponent } from './offers/components/toggle-button/toggle-button.component';
import { PageTwoComponent } from './offers/components/page-two/page-two.component';
import { ModifyAndDeactivateButtonsComponent } from './offers/components/modify-and-deactivate-buttons/modify-and-deactivate-buttons.component';
import { ToggleService } from './offers/service/toggle.service';
import { First_pageComponent } from './offers/components/first_page/first_page.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ChipsModule } from 'primeng/chips';
import { PasswordModule } from 'primeng/password';
import { AdvertsRoutingModule } from './offers/adverts-routing.module';
import { First_pageModule } from './offers/module/first_page.module';
import { First_pageRoutingModule } from './offers/first_page-routing.module';
import { AdvertsModule } from './offers/module/adverts.module';
import { ModificareContModule } from './modificare-cont/modificare-cont.module';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsComponent,
    ToggleButtonComponent,
    PageTwoComponent,
    ModifyAndDeactivateButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    First_pageModule,
    AdvertsModule,
    RouterModule,
    ModificareContModule
  ],
  providers: [MessageService, ToggleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
