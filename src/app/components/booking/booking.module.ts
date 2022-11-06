import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from '../../routes/booking-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class BookingModule { }
