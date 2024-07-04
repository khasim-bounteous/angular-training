import { Component } from '@angular/core';
import { StoreServiceService } from '../services/store-service.service';
import { Product } from '../interface/product';
import { HttpEventType } from '@angular/common/http';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-impln',
  templateUrl: './rxjs-impln.component.html',
  styleUrl: './rxjs-impln.component.scss'
})
export class RxjsImplnComponent {

  items: Product[] = []
  items$ = this.storeService.getProductItems$
  roomsCount = 0
  totalBytes = 0
  constructor(private storeService: StoreServiceService){
  }

  cmpItemsDisplay = true
  toggle(){
    this.cmpItemsDisplay = !this.cmpItemsDisplay
  }
  ngOnInit(){

    this.storeService.observable.subscribe((data)=>{
      console.log("********************")
      console.log(data)
    })

    this.storeService.getAllProducts().subscribe({
      next: (data) => {
        console.log("******akjdshdshflsahfhsaflksahflks*********")
        this.items = data
        console.log(data)
        console.log("*****kajfds;js;dafj;aksjf;lkjsd;lkfjsa;**********")
      },
      error: (err) => console.log(err),
      complete: ()=> console.log("complete")
    })

    this.storeService.getAllProducts().pipe(
      map((rooms)=>rooms.length)
    ).subscribe(data=>this.roomsCount = data)
    
    this.storeService.getProductItems$.subscribe((items)=>{
      console.log(items)
    })

    this.storeService.addProduct().subscribe(data=>{
      console.log("********************")
      console.log(data)
      this.items.push(data)
      console.log("********************")
    })

    this.storeService.updateProduct(2).subscribe((data)=>{
      this.items = this.items.map((item)=>{
        return item.id == data.id ? data : item
      })
      console.log(this.items)
    })

    this.storeService.getObsFrom().subscribe(data=>{
      console.log("********************")
      console.log(data)
    })

    this.storeService.getObsOf().subscribe(data=>{
      console.log(data)
    })

    this.storeService.getPhotoes().subscribe(event=>{
      
      switch(event.type){
        case HttpEventType.Sent: {
          console.log('request has been made')
          break
        } 
        case HttpEventType.ResponseHeader: {
          console.log("request is success")
          break
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes+= event.loaded
          console.log(event.loaded)
          break;
        }
        case HttpEventType.Response: {
          console.log("request completed")
        }
      }
    })
  }

}
