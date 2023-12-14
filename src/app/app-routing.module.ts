import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {RouterModule, Routes} from "@angular/router";
import {First_pageComponent} from "./offers/components/first_page/first_page.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./offers/module/first_page.module').then(m => m.First_pageModule)
  },
  {
    path: 'adverts',
    loadChildren: () => import('./offers/module/adverts.module').then(m => m.AdvertsModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'adverts',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
