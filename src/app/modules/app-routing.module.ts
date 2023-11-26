//This module makes possile the navigation between the two pages (All Offers and My Offers)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from '../components/page-one/page-one.component';
import { PageTwoComponent } from '../components/page-two/page-two.component';

//'page-one' and 'page-two' can be renamed but they would have to be renamed in toggle-button.component.ts too
const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '', redirectTo: '/page-one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}