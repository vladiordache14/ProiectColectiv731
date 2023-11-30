import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Advert} from "../advert";
import {AdvertService} from "../service/advert.service";
import {AdvertsModule} from "../module/adverts.module";
import {EditAdvertComponentComponent} from "./edit-advert-component/edit-advert-component.component";
import {AdvertsComponent} from "./adverts.component";
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "../../app.component";

const routes: Routes = [
  { path: 'app-adverts', component: AdvertsComponent },
  { path: 'app-edit-advert-component', component: EditAdvertComponentComponent },
  // Add other routes as needed
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
