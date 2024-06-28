import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp1Component } from './cmp-1/cmp-1.component';
import { Cmp2Component } from './cmp-2/cmp-2.component';



@NgModule({
  declarations: [
    Cmp1Component,
    Cmp2Component
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModuleModule { }
