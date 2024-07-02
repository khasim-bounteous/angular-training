import { Component} from '@angular/core';

@Component({
  selector: 'app-text-enhancer',
  templateUrl: './text-enhancer.component.html',
  styleUrl: './text-enhancer.component.scss'
})
export class TextEnhancerComponent {

  para: string = ""
  baseNumber:number = 0
  power:number = 0
  
  countLetters():number{
    const lettersOnly = this.para.replace(/[^a-zA-Z]/g,'')
    return lettersOnly.length
  }

  countWords(): number{
    return this.para.length === 0 ? 0 : this.para.trim().replace(/\s+/g," ").split(" ").length;
  }

  countNumbers(): number{
    const numbersOnly = this.para.replace(/[^\d]+/g,'')
    return numbersOnly?.length ?? 0
  }

  countSpecialCharacters(): number{
    const specialOnly = this.para.replace(/[\da-zA-Z]+/g,'');
    return specialOnly?.length ?? 0
  }
}
