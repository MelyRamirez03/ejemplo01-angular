import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [//Rutas o reglas de navegación, colocar un objeto con dos parametros, primera comillas se refiere al home, component el nombre de la pagina principal
  {path:'', component:ProductListComponent},  //Ctrl+. para completar la ruta una vez poniendo el nombre
  {path:'suma',component:OperasBasComponent},
  {path:'cine',component:CineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
