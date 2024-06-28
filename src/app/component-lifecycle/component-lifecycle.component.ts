import { Component } from '@angular/core'

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrl: './component-lifecycle.component.scss'
})
export class ComponentLifecycleComponent {

  name = "khasim"
  constructor(){
    console.log("i am constructor")
  }
  ngOnInit(){
    console.log("i am oninit")
  }
  ngOnChanges(){
    console.log("i am onChange")
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
