import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  prog:number = 10;
  prog1:number = 10;

   get getprog1(){
    return `${this.prog}%`
  }

  get getprog(){
    return `${this.prog1}%`
  }

// cambiovalorhijo(valor:number){

//   console.log(valor)
// }

}
