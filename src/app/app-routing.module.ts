import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { ForbiddenComponent } from './components/error-page/forbidden/forbidden.component';
import { PageNotFoundComponent } from './components/error-page/page-not-found/page-not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout/login-layout.component';
import { BookingRoutingModule } from './routes/booking-routing.module';
import { HomeRoutingModule } from './routes/home-routing.module';
import { PhotographerRoutingModule } from './routes/photographer-routing.module';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => HomeRoutingModule,
      },
      {
        path: 'booking',
        loadChildren: () => BookingRoutingModule,
      },
      {
        path: 'photographer',
        loadChildren: () => PhotographerRoutingModule,
      },
      { path: 'forbiden', component: ForbiddenComponent },
      { path: 'notfound', component: PageNotFoundComponent },
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
