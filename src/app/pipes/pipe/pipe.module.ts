import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcePipe } from './resource.pipe';



@NgModule({
  declarations: [
    ResourcePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResourcePipe
  ]
})
export class PipeModule { }
