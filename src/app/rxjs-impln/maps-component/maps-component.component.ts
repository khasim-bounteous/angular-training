import { Component } from '@angular/core';
import { StoreServiceService } from '../../services/store-service.service';
import { Product } from '../../interface/product';
import { concatMap, debounce, debounceTime, filter, interval, map, mergeMap, of, switchMap } from 'rxjs';
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
  productId = of(1,2,3,4)
  
  ngOnInit(){

    this.storeService.getAllProducts().subscribe((data)=>{
      this.items = data
    })

    // merge map
    this.productId.pipe(
      mergeMap((item)=> this.storeService.getProductById(item))
    ).subscribe((data)=>{
      console.log(data)
      console.log("Merge")
    })

    // concat map
    this.productId.pipe(
      concatMap((item)=> this.storeService.getProductById(item))
    ).subscribe((data)=>{
      console.log(data)
      console.log("Concat")
    })

    // filter map
    this.productId.pipe(
      filter((item)=>item %2==0),
      concatMap((item)=>this.storeService.getProductById(item))
    ).subscribe((data)=>{
      console.log(data)
      console.log("Filter")
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
