import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographerRoutingModule } from '../../routes/photographer-routing.module';
import { BookingConceptConfigComponent } from './booking-concept-config/booking-concept-config.component';
import { MaterialModule } from '../material/material.module';
import { AddBookingConceptConfigComponent } from './add-booking-concept-config/add-booking-concept-config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '../dialog/dialog.module';


@NgModule({
  declarations: [
    BookingConceptConfigComponent,
    AddBookingConceptConfigComponent
  ],
  imports: [
    CommonModule,
    PhotographerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class PhotographerModule { }
