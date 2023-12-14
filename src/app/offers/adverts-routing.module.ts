import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import { PageTwoComponent } from './components/page-two/page-two.component';
import {AdvertsComponent} from "./components/adverts.component";


const routes: Routes = [
  { path: 'page-one', component: AdvertsComponent },
  { path: 'page-two', component: PageTwoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
