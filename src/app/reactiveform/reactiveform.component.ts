import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  
  profileForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.min(10),
      Validators.max(10)
    ])
  })

  submitForm()
  {
    console.log(this.profileForm.value.name+'|'+this.profileForm.value.email)
  }
}
