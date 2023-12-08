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
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'editAdvert',component: EditAdvertComponentComponent },
  // Add other routes as needed
  {
    path: '',
    component: AdvertsComponent,
    pathMatch: 'full'
  },
  { path: '**', component: AdvertsComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
