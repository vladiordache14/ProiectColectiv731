import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvertsComponent} from "./components/adverts.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: AdvertsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
