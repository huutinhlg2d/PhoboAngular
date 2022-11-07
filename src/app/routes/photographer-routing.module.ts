import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConceptConfigComponent } from '../components/photographer/booking-concept-config/booking-concept-config.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'config', component: BookingConceptConfigComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographerRoutingModule {}
