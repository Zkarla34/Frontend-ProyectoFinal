import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  position = {
    lat: 4.570,
    lng: -74.297,
  }

  constructor() { }

  ngOnInit(): void {

    this.crearmarcadores(this.ubiBalsismo)
  }
  center:any = {}
  markers:any = []
  zoom:number = 6

 crearmarcadores(data:any)
 {

  this.center = 
  {
    lat:data.lat[0],
    lng:data.lng[0]
  }

  this.markers = []
  for(let a = 0; a < data.places.length; a++)
  {
    this.markers.push(
      {

      position:{lat:data.lat[a], lng:data.lng[a]},
      label:{
        color:'white',
        text:data.places[a]
      },
        title:data.places[a],
        options:{animation:google.maps.Animation.BOUNCE}
    })
  }

 }

 ubiBalsismo ={
  places: ['San Gil, Norte de santander', 'Río Barragán, Antioquia', 'Cundinamarca', 'San agustin, Huila', 'Tumaco, Nariño'],
  lat: [6.5516818, 4.1059379, 5.1234372, 1.8798907, 1.1032824],
  lng: [-73.1314809, -76.8352143, -74.4501513, -76.2795043, -77.7624045]
 }

 ubiTirolesa = {
  places: ['Punta gallinas, Guajira', 'Choco', 'Cauca'],
  lat: [11.9427122, 6.1334764, 2.383219],
  lng: [-71.6801578, -76.8859684, -76.891327]
}

ubiEscalar = {
  places: ['Magdalena', 'Bolivar', 'Huila', 'Guaviare', 'Guainía', 'Vaupes', 'Amazonas'],
  lat: [10.5314974, 8.2778041, 1.8798907, 1.793674, 2.6058139, 0.4272643, -1.203122],
  lng: [-73.7665107, -75.1439119, -76.2795043, -72.9473822, -70.0108894, -71.6977593, -71.1350809]
}

ubiParacaidismo = {
  places: ['Norte de Santander, El Cañon del Chicamocha', 'Antioquia, Guatape.', 'Cundinamarca, Guasca', 'Cundinamarca, Tolima', 'Nariño, Taminango.'],
  lat: [7.3807268, 6.2319374, 4.8660992, 4.2157396, 1.5704954],
  lng: [-73.5047423, -75.1628759, -73.8828888, -75.3364417, -77.2829157]
}

ubiPuentismo = {
  places: ['La Guajira, Colombia.', 'Chocó, Colombia.', 'Cauca, Santa Elena.'],
  lat: [10.7577114,  5.6956754,  3.6566955],
  lng: [-73.014894,  -76.6628026,  -76.2544197]
}

ubiParapente = {
  places: ['Magdalena', 'Bolivar', 'Huila', 'Guaviare', 'Guainía', 'Vaupes', 'Amazonas'],
  lat: [10.5314974, 8.2778041, 1.8798907, 1.793674, 2.6058139, 0.4272643, -1.203122],
  lng: [-73.7665107, -75.1439119, -76.2795043, -72.9473822, -70.0108894, -71.6977593, -71.1350809]
}
 cambiarposicion(nombre:any)
{
  this.crearmarcadores(nombre)
}



}

