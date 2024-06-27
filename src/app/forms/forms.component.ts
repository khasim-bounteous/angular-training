import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  topics = ['Angular','React','Vue']

  userModal: User = {
    name: "khasim",
    email:  "syed.khasim@gmail.com",
    phone:  999999999,
    topic:  "anything",
    timePreference:  "morning",
    subscribe: false
  }
}
