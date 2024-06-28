import { Component } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {

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
