import { Component } from '@angular/core';
import { StoreServiceService } from '../../services/store-service.service';
import { Product } from '../../interface/product';
import { concatMap, debounce, debounceTime, delay, filter, interval, map, mergeMap, of, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps-component.component.html',
  styleUrl: './maps-component.component.scss'
})
export class MapsComponentComponent {

  constructor(private storeService: StoreServiceService){}
  items: Product[]= []
  mapResult: Product[] = []
  searchControl = new FormControl()
  counter = 0
  productId = of(1,2,3,4)

  mergeResult : Product[] = []
  concatResult : Product[] = []
  filterResult: Product[] = []

  ngOnInit(){


    // merge map
    this.productId.pipe(
      delay(2000),
      mergeMap((item)=> this.storeService.getProductById(item))
    ).subscribe((data)=>{
      this.mergeResult.push(data)
    })

    // concat map
    this.productId.pipe(
      delay(2000),
      concatMap((item)=> this.storeService.getProductById(item))
    ).subscribe((data)=>{
      this.concatResult.push(data)
    })

    // filter map
    this.productId.pipe(
      filter((item)=>item %2==0),
      mergeMap((item)=>this.storeService.getProductById(item))
    ).subscribe((data)=>{
      this.filterResult.push(data)
    })
    
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      switchMap(()=>interval(500))
    ).subscribe((val)=>this.counter = val)

    this.storeService.getAllProducts().pipe(
        map(res=> res.map(data=>{
          return {
            ...data,
            title: data.title + " ------------mapppp changed me----- i wont leave ittt!!!!"
          }
        }
      ))
    ).subscribe((data)=>this.mapResult = data.slice(0,4))
  }

}
