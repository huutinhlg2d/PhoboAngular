import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from '../components/booking/booking/booking.component';
import { PageNotFoundComponent } from '../components/error-page/page-not-found/page-not-found.component';
import { PhotographerIdResolver } from './resolvers/photographer-id.resolver';

const routes: Routes = [
  { path: ':id', component: BookingComponent, resolve: {photographer: PhotographerIdResolver} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
