import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { UserDetails } from '../../interface/user-details';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})

export class AddUserComponent {

  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    age: new FormControl('', [Validators.min(18),Validators.required]),
  })

  constructor(private userService: UserServiceService){}

  onSubmit() {
    if (this.userForm.valid) {

      const ageValue = this.userForm.get('age')!.value;
      const age = ageValue !== null ? parseInt(ageValue, 10) : 0;

      const userDetails: UserDetails = {
        userId: (this.userService.getUserData().length+1).toString(),
        name: this.userForm.get('name')?.value || "",
        email: this.userForm.get('email')?.value || "",
        age: age
      };
      this.userService.addUser(userDetails);
      this.userForm.reset(); 
    } else {
      alert("fill the details correctly")
    }
  }
}
