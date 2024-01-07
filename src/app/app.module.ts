import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AdvertsComponent} from "./offers/components/advert/adverts.component";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { ToggleButtonComponent } from './offers/components/toggle-button/toggle-button.component';
import { PageTwoComponent } from './offers/components/page-two/page-two.component';
import { ModifyAndDeactivateButtonsComponent } from './offers/components/modify-and-deactivate-buttons/modify-and-deactivate-buttons.component';
import { ToggleService } from './offers/service/toggle.service';
import { First_pageComponent } from './offers/components/first_page/first_page.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import { MessageService } from 'primeng/api';
import {MessagesModule} from "primeng/messages";
import {ChipsModule} from "primeng/chips";
import {PasswordModule} from "primeng/password";
import {AdvertsRoutingModule} from "./offers/adverts-routing.module";
import {First_pageModule} from "./offers/module/first_page.module";
import {First_pageRoutingModule} from "./offers/first_page-routing.module";
import {AdvertsModule} from "./offers/module/adverts.module";
import {MatIconModule} from "@angular/material/icon";
import { CartDialogComponent } from './cart-dialog/components/cart-dialog.component';
import { NavbarComponent } from './offers/components/navbar/navbar.component';
import { CreateAdvertComponent } from './offers/components/create-advert/create-advert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAdvertModalService } from './offers/service/create-advert-modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './offers/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    PageTwoComponent,
    ModifyAndDeactivateButtonsComponent,
    CartDialogComponent,
    NavbarComponent,
    CreateAdvertComponent,
    ConfirmDialogComponent,
    AdvertsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    First_pageModule,
    AdvertsModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    AdvertsRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
    DialogModule

  ],
  providers: [MessageService, ToggleService, CreateAdvertModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
