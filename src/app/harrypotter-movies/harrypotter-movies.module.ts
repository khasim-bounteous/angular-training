import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarryPotterService } from '../harry-potter.service';
import { HarrypotterMoviesComponent } from './harrypotter-movies.component';

@NgModule({
  declarations: [
    HarrypotterMoviesComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    HarryPotterService
  ],
  exports:[
    HarrypotterMoviesComponent
  ]
})
export class HarrypotterMoviesModule { }
