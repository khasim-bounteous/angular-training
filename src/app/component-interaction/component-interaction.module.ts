import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentBComponent,
    ComponentAComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ComponentAComponent,
    ComponentBComponent
  ]
})
export class ComponentInteractionModule { }
