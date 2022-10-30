import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from '../../routes/navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule
  ]
})
export class NavbarModule { }
