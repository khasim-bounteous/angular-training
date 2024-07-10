import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, customIncrement, decrement, increment, reset } from '../shared/store/counter/counter.actions';
import { counterModel } from '../shared/store/counter/counter.model';
import { getCounter } from '../shared/store/counter/counter.selector';
import { AppStateModel } from '../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  constructor(private store: Store<AppStateModel>){}
  counterDisplay!: number;
  customNumber = 0
  actionType = "add"
  temName = ""

  ngOnInit():void{
    this.store.select(getCounter).subscribe(data=>{
      this.counterDisplay=data
      console.log("counter main")
    })
  }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }

  onCustomIncrement(){
    this.store.dispatch(customIncrement({value: +this.customNumber,action: this.actionType}))
  }

  onChangeName(){
    console.log(this.temName)
    this.store.dispatch(changeName({value: this.temName}))
  }
}
