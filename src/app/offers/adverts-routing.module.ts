import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvertsComponent} from "./components/adverts.component";
import {RouterModule, Routes} from "@angular/router";
import { PageTwoComponent } from './components/page-two/page-two.component';


const routes: Routes = [
  { path: 'page-one', component: AdvertsComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '', redirectTo: '/page-one', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdvertsRoutingModule { }
