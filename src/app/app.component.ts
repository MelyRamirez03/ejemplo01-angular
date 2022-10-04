import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo01-angular';
  nombre:string='Mely';
  apaterno:string='Ramírez';

  calculaDoble(x:number):number{
    return x*2;
  }
}
