import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isCorrectAns = false;
  chances = 3
  userAns = new FormControl("");

  ngOnInit(){
    this.userAns.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((data) => {
      this.chances--
      if (data == "7") {
        this.isCorrectAns = true;
        this.userAns.disable({emitEvent:false})
      }
      else
      {
        this.userAns.setValue("",{emitEvent:false})
        if(this.chances==0)
          this.userAns.disable({emitEvent:false})
      }
    });
  }

  checkQuiz() {
    console.log("jj");

    if (this.userAns.value == "7") {
      this.isCorrectAns = true;
    }
  }

  items = ["ant", "bull", "cat", "dog"];
  fontSize = "50px";
  color = "red";
}
