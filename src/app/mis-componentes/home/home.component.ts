import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peticion:PostService) { }

  descripcion:string = '';
  usuario:string = '';

  ngOnInit(): void {
    this.listar()
  }

  data:any[] = [
    {
      "nombre": "Bici Camping Embalse del Neusa",
      "descripcion": "A dos horas de Bogota, a 30 minutos de Tunja y a 15 minutos del Puente de Boyaca, se encuentra un bello escenario natural, el antiguo puente férreo conocido como El Puenton  un clásico puente en piedra con 40 metros de altura que pondrán a prueba TODOS tus sentidos",
      "precio": 80000,
      "imgUrl": "../../../assets/Img/Ciclismo-Mountain.jpg"
    },
    {
      "nombre": "Paracaidismo",
      "descripcion": "El Embalse del Neusa se encuentra ubicado en el Municipio de Cogua  a 55 km de Bogotá  y a 15 km de Zipaquirá, propicio escenario para actividades de camping, ciclomontañismo o Mountain Bike , Trekking o caminatas.",
      "precio": 300000,
      "imgUrl": "../../../assets/Img/paracaidismo.jpeg"
    },
    {
      "nombre": "Tirolesa",
      "descripcion": "El Embalse del Neusa se encuentra ubicado en el Municipio de Cogua  a 55 km de Bogotá  y a 15 km de Zipaquirá, propicio escenario para actividades de camping, ciclomontañismo o Mountain Bike , Trekking o caminatas.",
      "precio": 240000,
      "imgUrl": "../../../assets/Img/tiroless.jpeg"
    }
  ]

  datos:any[] = []


  listar()
  {
    var post = {
      host:this.peticion.urlLocal,
      path:'/Post/List',
      data:{}
    }
    this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
    console.log(res)
    this.datos = res
    })
  }
}
