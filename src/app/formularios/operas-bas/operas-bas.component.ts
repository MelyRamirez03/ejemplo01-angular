import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  num='';
  resultado1:number=0;
  resultado2:number=0;
  imprimir='';
  texto:string[]=[];



  sumar(){
    this.resultado1=parseInt(this.num1)+parseInt(this.num2);
  }

  tabla(){
    let numero:number=parseInt(this.num);
    let texto : string[]=[];
    for(let i=1; i<=10; i++){
      this.resultado2=numero*i;
      texto.push(numero+' x '+i+' = '+this.resultado2); //Push:añadir uno o más elementos a un array, devolviendo la longitud del array
    }
    this.texto = texto;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
