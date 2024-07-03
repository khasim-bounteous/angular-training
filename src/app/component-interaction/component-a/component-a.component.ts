import { Component, ViewChild } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {

  

  @ViewChild(ComponentBComponent) private cmpB!: ComponentBComponent;

  constructor() { 
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.cmpB) {
        this.cmpB.message = "hello";
      }
    }, 0);
  }

  message= ''
  sendMessage = ''
  data = ''
  receiveMessage(message: string){
    this.message = message
  }

  sendingMessage(){
    this.sendMessage = this.data
    this.data = ''
  }
}
