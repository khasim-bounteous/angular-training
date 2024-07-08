import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { Counter1Component } from './counter1/counter1.component';



@NgModule({
  declarations: [
    CounterComponent,
    Counter1Component,
    ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class CounterModule { }
