import { Inject, Injectable } from '@angular/core';
import { UserDetails } from '../interface/user-details';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { localStorageToken } from '../javascriptapis/localstorage.token';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users:UserDetails[] = [
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

  private usersSubject = new BehaviorSubject<UserDetails[]>(this.users);

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    @Inject(localStorageToken) private localStorage: Storage
  ) {
    console.log(config.apiEndpoint)
    localStorage.setItem("name","hello")
   }

  getUserData(): Observable<UserDetails[]>{
    return this.usersSubject.asObservable();
  }

  addUser(userDetails: UserDetails):void{
    this.users.push(userDetails)
    this.usersSubject.next(this.users)
  }

  getUserById(id: string):UserDetails | undefined {
    return this.users.find(user=>user.userId === id)
  }

  deleteUserById(id:string):void{
    this.users = this.users.filter((item)=>item.userId != id)
    this.usersSubject.next(this.users)
  }

  updateUser(user: UserDetails): void{
      this.users = this.users.map((u)=>{
        if(u.userId === user.userId)
          return user
        else
          return u
      })
      this.usersSubject.next(this.users);
      console.log(this.users)
  }
}
