import { Component } from '@angular/core';
import { UserDetails } from '../../interface/user-details';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userData: UserDetails[] = []
  constructor(private userService: UserServiceService){}

  ngOnInit(){
      this.userService.getUserData().subscribe((data)=>this.userData = data)
  }

  
  deleteUser(userId:string){
    this.userService.deleteUserById(userId)
  }
}
