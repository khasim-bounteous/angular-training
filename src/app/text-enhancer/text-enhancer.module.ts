import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEnhancerComponent } from './text-enhancer.component';
import { FormsModule } from '@angular/forms';
import { HarrypotterMoviesModule } from '../harrypotter-movies/harrypotter-movies.module';


@NgModule({
  declarations: [
    TextEnhancerComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HarrypotterMoviesModule
  ],
  exports:[
    TextEnhancerComponent
  ]
})
export class TextEnhancerModule { }
