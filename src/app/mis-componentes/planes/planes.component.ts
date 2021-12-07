import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  constructor(public carrito:CarritoService) { }

  ngOnInit(): void {
  }


  data:any[] = [
    {
      "nombre": "Salto de Bungee Jumping 40 m.",
      "descripcion": "A dos horas de Bogota, a 30 minutos de Tunja y a 15 minutos del Puente de Boyaca, se encuentra un bello escenario natural, el antiguo puente férreo conocido como El Puenton  un clásico puente en piedra con 40 metros de altura que pondrán a prueba TODOS tus sentidos",
      "precio": 130000,
      "imgUrl": "../../../assets/Img/Ciclismo-Mountain.jpg"
    },
    {
      "nombre": "Bici Camping Embalse del Neusa",
      "descripcion": "El Embalse del Neusa se encuentra ubicado en el Municipio de Cogua  a 55 km de Bogotá  y a 15 km de Zipaquirá, propicio escenario para actividades de camping, ciclomontañismo o Mountain Bike , Trekking o caminatas.",
      "precio": 150000,
      "imgUrl": "../../../assets/Img/Ciclismo-Mountain.jpg"
    },
    {
      "nombre": "Bici Camping Embalse del Neusa",
      "descripcion": "El Embalse del Neusa se encuentra ubicado en el Municipio de Cogua  a 55 km de Bogotá  y a 15 km de Zipaquirá, propicio escenario para actividades de camping, ciclomontañismo o Mountain Bike , Trekking o caminatas.",
      "precio": 150000,
      "imgUrl": "../../../assets/Img/Ciclismo-Mountain.jpg"
    }
  ]

  agregar(item:any){
    this.carrito.agregar(item)
  }
}
