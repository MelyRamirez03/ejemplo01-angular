import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=60;
  imageMargin:number=10;
  muestraImg:boolean=true;
  listFilter:string='';

  constructor() { }

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  ngOnInit(): void {
  }

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3, 2020",
      "Precio":120000,
      "Marca":'Nissan',
      "Color":"Azul",
      "imagenUrl":"https://www.informador.mx/__export/1591376300172/sites/elinformador/img/2020/06/05/nissan-sentra-2020-1600-0c_1_crop1591376299435.jpg_1970638775.jpg"
    },
    {

      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"auto potente y con mucha velocidad",
      "year":"febrero 3, 2020",
      "Precio":350000,
      "Marca":'Audi',
      "Color":"Blanco",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_da9f0baadd664593ad89bda3893a8861.jpg"
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":"auto con mucha elegancia y clase",
      "year":"febrero 3, 2020",
      "Precio":140000,
      "Marca":'Kia',
      "Color":"Rojo",
      "imagenUrl":"http://www.autosactual.mx/wp-content/uploads/2016/09/kia-rio-2018-cuarta-generacion-02.jpg"
    }
  ]

}
