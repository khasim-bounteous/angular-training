import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.scss'
})
export class ComponentBComponent {

  @Input() message? : string
  outMessage:string = ''
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    if(this.outMessage==='')
      alert("enter something to send")
    else{
      this.messageEvent.emit(this.outMessage)
      this.outMessage = ''
    }
  } 
  
  
  constructor(){
    console.log("i am constructor")
  }
  ngOnInit(){
    console.log("i am oninit")
  }
  ngOnChanges(){
    console.log("i am onChange*****************")
  }

  ngDoCheck(){
    console.log("i am docheck")
  }

  ngAfterViewInit(){
    console.log("i am afterviewInit")
  }

  ngAfterContentInit(){
    console.log("i am aftercontentInit")
  }

  ngAfterViewChecked(){
    console.log("i am afterviewChecked")
  }

  ngAfterContentChecked(){
    console.log("i am aftecontentChecked")
  }

  ngAfterNextRender(){
    console.log("i am nextRender")
  }
  
  ngAfterRender(){
    console.log("i am afterRender")
  }

  ngOnDestroy(){
    console.log("jj")
  }
}
