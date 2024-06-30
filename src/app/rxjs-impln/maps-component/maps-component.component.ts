import { Component } from '@angular/core';
import { StoreServiceService } from '../../services/store-service.service';
import { Product } from '../../interface/product';
import { debounce, debounceTime, interval, map, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrl: './maps-component.component.scss'
})
export class MapsComponentComponent {

  constructor(private storeService: StoreServiceService){}
  items: Product[]= []
  impItems: Product[] = []
  searchControl = new FormControl()
  counter = 0

  
  ngOnInit(){

    this.storeService.getAllProducts().subscribe((data)=>{
      this.items = data
    })
    
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      switchMap(()=>interval(500))
    ).subscribe((val)=>this.counter = val)

    this.storeService.getAllProducts().pipe(
        map(res=> res.map(data=>{
          return {
            ...data,
            title: data.title + " helllo"
          }
        }
      ))
    ).subscribe((data)=>this.impItems = data)
  }

}
