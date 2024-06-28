import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  items = ["ant","bull","cat","dog"]
  fontSize = "50px"
  color = "red"
}
