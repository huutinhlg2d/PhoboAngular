import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from '../../routes/navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule} from "../material/material.module";
import { PipeModule } from 'src/app/pipes/pipe/pipe.module';


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
    MaterialModule,
    PipeModule
  ]
})
export class NavbarModule { }
