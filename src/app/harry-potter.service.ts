import { Injectable } from '@angular/core';
import { HarryPotter } from './harry-potter';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {

  private harryPotterBooks = of([
    { title: "Harry Potter and the Philosopher's Stone", year: 1997,img:'https://m.media-amazon.com/images/S/pv-target-images/f8cabb24c2e15d65d8e6f55d52e51564d3ca2eefdca4c6ee9c8042b15394f010.jpg' },
    { title: "Harry Potter and the Chamber of Secrets", year: 1998,img:'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_FMjpg_UX1000_.jpg' },
    { title: "Harry Potter and the Prisoner of Azkaban", year: 1999,img:'https://external-preview.redd.it/oqSo9NCPFCixfHoQ3aRDBd17PlSmQBQ9WWYOOyp6q88.jpg?width=640&crop=smart&auto=webp&s=4abbbed567d7feed979514ec3b2921d9bbef2f6d' },
    { title: "Harry Potter and the Goblet of Fire", year: 2000,img:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90599_p_v8_aq.jpg' },
    { title: "Harry Potter and the Order of the Phoenix", year: 2003,img:'https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg' },
    { title: "Harry Potter and the Half-Blood Prince", year: 2005, img:'https://e.snmc.io/i/300/s/30a363fbe3e9dfa10fabe4c004939cbc/3585698'},
    { title: "Harry Potter and the Deathly Hallows", year: 2007, img:'https://images.moviesanywhere.com/de6092b467fc299fdf79a51dfa7f9710/12b877a3-28de-46ff-820f-dd8bf07e8edb.jpg'},
    { title: "Harry Potter and the Deathly Hallows", year: 2009, img:'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'}
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
