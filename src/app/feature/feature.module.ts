import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HarrypotterMoviesModule } from '../harrypotter-movies/harrypotter-movies.module';


@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HarrypotterMoviesModule
  ]
})
export class FeatureModule { }
