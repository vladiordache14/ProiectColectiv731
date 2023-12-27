import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {RouterModule, Routes} from "@angular/router";
import {First_pageComponent} from "./components/first_page/first_page.component";

const routes: Routes = [
  { path: '',
    component: First_pageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class First_pageRoutingModule { }
