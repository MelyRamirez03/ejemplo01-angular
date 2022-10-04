import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  constructor(){}

  boleta:any;
  pago:number=0;

  comprador:any;
  nombre:any;
  tarjeta: boolean = false
  error:string='';
  maxBoletos:number=0;

  desc:number=0;
  valor:number=0;

      procesamiento(){
        /*this.maxBoletos = this.comprador*7 
        let precio = this.maxBoletos * 12
        if(this.maxBoletos > 3 ){
          if(this.boleta > 5){
            this.pago = (this.tarjeta? precio*0.65 : precio*0.850)
          }else{
            precio = (this.tarjeta ? precio*0.70 : precio*0.90)
          }
        }else{
          precio = (this.tarjeta ? precio*0.80 : precio)
        }
      this.pago = precio*/

        if (this.comprador==1) {
          if(this.tarjeta==true){
            if(this.boleta<=7){
              if(this.boleta>5 && this.boleta<=7){
                this.pago=(12*this.boleta)*0.25;
                this.desc=(12*this.boleta)-this.pago;
              }
              else{
                if(this.boleta<=5 && this.boleta>=3){
                  this.pago=(12*this.boleta)*0.20;
                  this.desc=(12*this.boleta)-this.pago;
                }
                else{
                  this.pago=(12*this.boleta)*0.10;
                  this.desc=(12*this.boleta)-this.pago;
                }
              }
            }
          }
      
          else{
            if(this.tarjeta==false){
              if(this.boleta<=7){
                if(this.boleta>5 && this.boleta<=7){
                  this.pago=(12*this.boleta)*0.15;
                  this.desc=(12*this.boleta)-this.pago;
                }
                else{
                  if(this.boleta<=5 && this.boleta>=3){
                    this.pago=(12*this.boleta)*10;
                    this.desc=(12*this.boleta)-this.pago;
                  }
                  else{
                    this.desc=12*this.boleta;
                  }
                }
              }
            }
          }
        }
        else{
        if (this.comprador==2) {
          if(this.tarjeta==true){
            if(this.boleta<=14){
              if(this.boleta>5 && this.boleta<=14){
                this.pago=(12*this.boleta)*0.25;
                this.desc=(12*this.boleta)-this.pago;
              }
              else{
                if(this.boleta<=5 && this.boleta>=3){
                  this.pago=(12*this.boleta)*0.20;
                  this.desc=(12*this.boleta)-this.pago;
                }
                else{
                  this.pago=(12*this.boleta)*0.10;
                  this.desc=(12*this.boleta)-this.pago;
                }
              }
            }
          }
      
          else{
            if(this.tarjeta==false){
              if(this.boleta<=14){
                if(this.boleta>5 && this.boleta<=14){
                  this.pago=(12*this.boleta)*0.15;
                  this.desc=(12*this.boleta)-this.pago;
                }
                else{
                  if(this.boleta<=5 && this.boleta>=3){
                    this.pago=(12*this.boleta)*10;
                    this.desc=(12*this.boleta)-this.pago;
                  }
                  else{
                    this.desc=12*this.boleta;
                  }
                }
              }
              
            }
          }
        }
        }
       }

  /*procesoA(){

    if(this.tarjeta==true){
      if(this.boleta<=7){
        if(this.boleta>5 && this.boleta<=7){
          this.pago=12*this.boleta;
          this.desc=this.pago*0.25;
          this.valor=this.pago-this.desc;
        }
        else{
          if(this.boleta<=5 && this.boleta>=3){
            this.pago=12*this.boleta;
            this.desc=this.pago*0.20;
            this.valor=this.pago-this.desc;
          }
          else{
            this.pago=12*this.boleta;
            this.desc=this.pago*0.10;
            this.valor=this.pago-this.desc;
          }
        }
      }
    }

    else{
      if(this.tarjeta==false){
        if(this.boleta<=7){
          if(this.boleta>5 && this.boleta<=7){
            this.pago=12*this.boleta;
            this.desc=this.pago*0.15;
            this.valor=this.pago-this.desc;
          }
          else{
            if(this.boleta<=5 && this.boleta>=3){
              this.pago=12*this.boleta;
              this.desc=this.pago*0.10;
              this.valor=this.pago-this.desc;
            }
          }
        }
      }
    }
  }*/
// 
  // proceso(){
    // console.log("hola");
    // 
    // if(this.comprador==1){
      // this.maxBoletos=7;
      // if(this.boleta<=2){
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if(this.boleta>=3 && this.boleta<=5){
        // this.pago=(this.pago*12)-((this.pago*12)*0.10);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*10);
          // }
      // }
      // else if (this.boleta>=6 && this.boleta<=7 ) {
        // this.pago=(this.boleta*12)-((this.boleta*12)*0.15);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=8) {
        // this.error=(`ERROR: No se puede comprar más de 7 boletos`)
          // }
    // }
// 
    // if(this.comprador==2){
      // this.maxBoletos=7*2;
      // if (this.boleta<=2) {
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=3 && this.boleta<=5) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.10);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=6 && this.boleta<=14) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.15);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10)
        // }
      // }
      // else if (this.boleta>=15) {
        // this.error=(`ERROR: No se pueden comprar más de 14 boletos`);
      // }
    // }
// 
    // if(this.comprador==3){
      // this.maxBoletos=7*3;
      // if (this.boleta<=2) {
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=3 && this.boleta<=5) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.10);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=6 && this.boleta<=14) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.15);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10)
        // }
      // }
      // else if (this.boleta>=21) {
        // this.error=(`ERROR: No se pueden comprar más de 21 boletos`);
      // }
    // }
// 
    // if(this.comprador==4){
      // this.maxBoletos=7*4;
      // if (this.boleta<=2) {
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=3 && this.boleta<=5) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.10);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=6 && this.boleta<=14) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.15);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10)
        // }
      // }
      // else if (this.boleta>=28) {
        // this.error=(`ERROR: No se pueden comprar más de 28 boletos`);
      // }
    // }
// 
    // if(this.comprador==5){
      // this.maxBoletos=7*5;
      // if (this.boleta<=2) {
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=3 && this.boleta<=5) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.10);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10);
        // }
      // }
      // else if (this.boleta>=6 && this.boleta<=14) {
        // this.pago=(this.pago*12)-((this.pago*12)*0.15);
        // if (this.isMember) {
          // this.pago=this.pago-(this.pago*0.10)
        // }
      // }
      // else if (this.boleta>=35) {
        // this.error=(`ERROR: No se pueden comprar más de 35 boletos`);
      // }
    // }
// 
    // else if(this.comprador>=6){
      // this.error=(`ERROR: No se aceptan más de 5 compradores`)
    // }
    // console.log("fin");
    // 
  // }

  ngOnInit(): void {
    
  }

}
