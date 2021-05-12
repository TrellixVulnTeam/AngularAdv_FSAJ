import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  {



 //@Input('valor') prog : number = 0; renombra el argumento que va llegar desde el componente padre que seria progress
 @Input() prog : number = 0;
 @Output() valorsalida: EventEmitter<number> = new EventEmitter();

//  get getprog(){
//     return `${this.prog}%`
//   }

  cambiarvalor( valor: number ){

    if (this.prog >= 100 && valor >=0)
    {
      this.valorsalida.emit(100)
      return ;
    }

    if (this.prog <= 0 && valor < 0){
      this.valorsalida.emit(0)
      return ;
    }

      this.prog = this.prog + valor;
      this.valorsalida.emit(this.prog)



  }


}
