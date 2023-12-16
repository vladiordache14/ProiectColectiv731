import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { First_pageComponent } from './pages/first_page/first_page.component';
import { LoginComponent } from './authentication/login/login.component';
import { featureFlagGuard } from './authentication/guards/auth-guard';

const routes: Routes = [
  { path: '', component: First_pageComponent },
  {
    path: 'adverts',
    loadChildren: () =>
      import('./offers/module/adverts.module').then((m) => m.AdvertsModule),
    canActivate: [featureFlagGuard('adverts')],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
