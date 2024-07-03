import { Component } from '@angular/core';

console.log("feature module loaded using lazy loading")
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {

}
