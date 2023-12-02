import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {RouterModule, Routes} from "@angular/router";
import {First_pageComponent} from "./pages/first_page/first-page.component";

const routes: Routes = [
   
    {
      path: '',component:First_pageComponent
    },
    //{
      //path: 'adverts',
      //loadChildren: () => import('./offers/module/adverts.module').then(m => m.AdvertsModule),
    //},
    //{
      //path: '**',
      //redirectTo: 'adverts',
      //pathMatch: 'full'
    //},
    {
      path: '',
      redirectTo: 'pages/firstpage',
      pathMatch: 'full'
    }, 
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