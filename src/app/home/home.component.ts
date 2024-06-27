import { Component,inject} from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-homeee',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService)
  filteredLocationList: Housinglocation[] = [];
  
  constructor(){
    // this.getLocations()
    console.log("construcotr")
  }

  ngOnInit(){
    this.getLocations()
    console.log("oninit")
  }

  async getLocations(){
    this.housingLocationList =  await this.housingService.getAllHousingLocations()
    this.filteredLocationList = this.housingLocationList
  }

  filterResults(text:string)
  {
    if(!text){
      this.filteredLocationList = this.housingLocationList
      return 
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation)=>{
      return housingLocation.city.toLowerCase().includes(text.toLowerCase())
    })
  }
  housingLocationList:Housinglocation[] = []
}
