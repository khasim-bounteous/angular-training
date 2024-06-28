import { Injectable } from '@angular/core';
import { HarryPotter } from './harry-potter';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {

  private harryPotterBooks = of([
    { title: "Harry Potter and the Philosopher's Stone", year: 1997 },
    { title: "Harry Potter and the Chamber of Secrets", year: 1998 },
    { title: "Harry Potter and the Prisoner of Azkaban", year: 1999 },
    { title: "Harry Potter and the Goblet of Fire", year: 2000 },
    { title: "Harry Potter and the Order of the Phoenix", year: 2003 },
    { title: "Harry Potter and the Half-Blood Prince", year: 2005 },
    { title: "Harry Potter and the Deathly Hallows", year: 2007 }
  ]);

  private harryPotterBooks2 = of(["cat", "dog", "mouse", "lion"])

  constructor() { }

  getHarryPotterBooks(): Observable<HarryPotter[]> {
    return this.harryPotterBooks;
  }

  animal(): Observable<any>{
    return this.harryPotterBooks2
  }
}
