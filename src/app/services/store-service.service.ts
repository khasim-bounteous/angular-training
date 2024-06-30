import { Injectable } from '@angular/core';
import { Observable, from, of, shareReplay } from 'rxjs';
import { Product } from '../interface/product';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';
import { dummyData } from '../mockdata/dummyData';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  // creating observable with of
  obsOf = of(dummyData)
  
  // creating observable with from
  obsFrom = from(dummyData)

  //  creating obsrevable using new keyword
  observable = new Observable(observer=>{
    observer.next("first vlaue")
    observer.next("second value")
    observer.complete()

    return()=>{
      console.log("observable got completed")
    }
  })

  // shareReplay
  getProductItems$ = this.http.get<Product[]>(`${environment.apiEndpoint}/products`).pipe(
    shareReplay(1)
  )

  constructor(private http: HttpClient) {
    console.log("hello")
  }

  getObsOf(): Observable<any[]>{
    return this.obsOf;
  }
  getObsFrom(): Observable<any>{
    return this.obsFrom;
  }

  // http client requests which will give us basic http apis
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndpoint}/products`)
  }

  addProduct():Observable<Product> {
    return this.http.post<Product>(`${environment.apiEndpoint}/products`,dummyData[0])
  }

  updateProduct(productId:number): Observable<Product>{
    return this.http.put<Product>(`${environment.apiEndpoint}/products/${productId}`,dummyData[1])
  }

// using new HttpRequest we will get some extra functionalities
  getPhotoes():Observable<HttpEvent<Product[]>>{
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      }
    )
    return this.http.request(request)
  }

}
