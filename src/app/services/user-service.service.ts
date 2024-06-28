import { Injectable } from '@angular/core';
import { UserDetails } from '../interface/user-details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users = [
    {
      userId: '1',
      name: "harry",
      email: "harry@gmail.com",
      age: 21
    },
    {
      userId: '2',
      name: "hermoine",
      email: "hermoine@gmail.com",
      age: 21
    },
    {
      userId: '3',
      name: "ron",
      email: "ron@gmail.com",
      age: 21
    }
  ]

  constructor() { }

  getUserData(): UserDetails[]{
    return this.users
  }

  addUser(userDetails: UserDetails):void{
    this.users.push(userDetails)
  }

  getUserById(id: string):UserDetails | undefined {
    return this.users.find(user=>user.userId === id)
  }

  updateUser(user: UserDetails): void{
      this.users = this.users.map((u)=>{
        if(u.userId === user.userId)
          return user
        else
          return u
      })
      console.log(this.users)
  }
}
