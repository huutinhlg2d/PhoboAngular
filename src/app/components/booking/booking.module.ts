import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from '../../routes/booking-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule
  ]
})
export class BookingModule { }
