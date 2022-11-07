import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from '../../routes/booking-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MaterialModule } from '../material/material.module';
import { PhotographerHistoryComponent } from './photographer-history/photographer-history.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';


@NgModule({
  declarations: [
    BookingComponent,
    PhotographerHistoryComponent,
    CustomerHistoryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule
  ]
})
export class BookingModule { }
