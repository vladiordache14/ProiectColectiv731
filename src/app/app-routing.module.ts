import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  //{
  //  path: partea de auth,
  //  loadChildren: ...
  //},
  {
    path: 'adverts',
    loadChildren: () => import('./offers/module/adverts.module').then(m => m.AdvertsModule),
  },
  {
    path: '**',
    redirectTo: 'adverts',
    pathMatch: 'full'
  },
  //{
  //  path: '',
  //  redirectTo: partea de auth,
  //  pathMatch: 'full'
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
