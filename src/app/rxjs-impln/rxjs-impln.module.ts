import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponentComponent } from './maps-component/maps-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsImplnComponent } from './rxjs-impln.component';

@NgModule({
  declarations: [
    RxjsImplnComponent,
    MapsComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RxjsImplnModule { }
