import { Component } from '@angular/core';

console.log("lazy loading in inner module")
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

}
