import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
  ]
})
export class BaseLayoutModule { }
