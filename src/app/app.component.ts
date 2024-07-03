import { Component } from '@angular/core';

console.log("App component is loaded")
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang-tr-1';
}
