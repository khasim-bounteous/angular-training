import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../shared/store/counter.model';
import { changeName } from '../../shared/store/counter.actions';
import { getName } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrl: './counter1.component.scss'
})
export class Counter1Component {

  constructor(private store: Store<{counter: counterModel}>){}
  currName = ""
  temName = ""

  ngOnInit(){
    this.store.select(getName).subscribe(data=>{
      this.currName = data
      console.log("counter1")
    })
  }

  onChangeName(){
    this.store.dispatch(changeName({value: this.temName}))
  }
}
