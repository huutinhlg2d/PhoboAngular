import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CustomerHistoryComponent } from './components/booking/customer-history/customer-history.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'history', component: CustomerHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
