import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CustomerHistoryComponent } from './components/booking/customer-history/customer-history.component';
import { PhotographerHistoryComponent } from './components/booking/photographer-history/photographer-history.component';
import { ForbiddenComponent } from './components/error-page/forbidden/forbidden.component';
import { PageNotFoundComponent } from './components/error-page/page-not-found/page-not-found.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout/login-layout.component';
import { BookingRoutingModule } from './routes/booking-routing.module';
import { HomeRoutingModule } from './routes/home-routing.module';

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
        path: 'history/customer/:id',
        component: CustomerHistoryComponent
      },
      {
        path: 'history/photographer/:id',
        component: PhotographerHistoryComponent
      }

    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent}
    ],
  },
  { path: 'forbiden', component: ForbiddenComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
