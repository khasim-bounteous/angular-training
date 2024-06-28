import { Component } from '@angular/core';
import { HarryPotterService } from '../harry-potter.service';
import { HarryPotter } from '../harry-potter';

@Component({
  selector: 'app-harrypotter-movies',
  templateUrl: './harrypotter-movies.component.html',
  styleUrl: './harrypotter-movies.component.scss'
})
export class HarrypotterMoviesComponent {
  harryPotterBooks: HarryPotter[] = [];
  sample ?: any;

  constructor(private hpService: HarryPotterService){}

  ngOnInit(){
    // this.harryPotterBooks = this.hpService.getHarryPotterBooks();

   this.sample = this.hpService.getHarryPotterBooks().subscribe(data => {
    console.log(data, "hello")
    this.harryPotterBooks = data;
   });

   this.hpService.animal().subscribe(data => {
     console.log(data, "animal")
   })
  }
}
