import { Component, input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name = "Add your name"
  inputName = ""
  
  imageUrl = 'https://images.ctfassets.net/usf1vwtuqyxm/3xcbmkDkyIWgQQmUMCCaiQ/5ece7798b84c9283b8410633d9f69a97/AlbusDumbledore_PM_B6C26M1_DumbledoreCastingFireSpell_Moment.jpg?w=914&q=70&fm=webp'
  changeName(){
    if(this.inputName === '')
      alert("Write something to change")
    else{
      this.name = this.inputName
      this.inputName = ""
    }
  }
}
