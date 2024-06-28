import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { UserDetails } from '../../interface/user-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {

  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    age: new FormControl('', [Validators.min(18),Validators.required]),
  })

  userId?: string

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id')?.toString()
    if (this.userId) {
      const user = this.userService.getUserById(this.userId);
      if (user) {
        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          age: user.age.toString(),
        });
      }
    }
  }

  onSubmit() {
    if (this.userForm.valid) {

      const ageValue = this.userForm.get('age')!.value;
      const age = ageValue !== null ? parseInt(ageValue, 10) : 0;

      const userDetails: UserDetails = {
        userId: this.userId || "",
        name: this.userForm.get('name')?.value || "",
        email: this.userForm.get('email')?.value || "",
        age: age
      };
      this.userService.updateUser(userDetails);
      this.userForm.reset(); 
    } else {
      alert("fill the details correctly")
    }
  }
}
