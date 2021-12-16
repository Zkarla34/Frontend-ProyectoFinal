import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public carrito:CarritoService, public msg:MensajesService) { }

  ngOnInit(): void {
  }

  eliminaritem(id:number)
  {
    console.log(id)
    this.carrito.eliminar(id)
    this.msg.load('Elemento eliminado correctamente')
  }

}
