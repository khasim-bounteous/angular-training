import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEnhancerComponent } from './text-enhancer.component';
import { FormsModule } from '@angular/forms';
import { HarrypotterMoviesModule } from '../harrypotter-movies/harrypotter-movies.module';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  declarations: [
    TextEnhancerComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HarrypotterMoviesModule,
  ],
  exports:[
    TextEnhancerComponent
  ]
})
export class TextEnhancerModule { }
