import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  public datoscarrito:any[] = []


  cargar()
  {
    let tmp:any = localStorage.getItem('carrito')
    if(tmp == undefined || tmp == null)
    {
      this.datoscarrito = [];
    }
    else
    {
      this.datoscarrito = JSON.parse(tmp)
    }
    this.totalitems()
    
  }
  agregar(item:any){

    this.datoscarrito.push(item)
    localStorage.setItem('carrito', JSON.stringify(this.datoscarrito))
    console.log(this.datoscarrito)
    this.totalitems()
  }


  public totalcompra:number = 0
  totalitems()
  {
    this.totalcompra = 0
    for (let a = 0; a < this.datoscarrito.length; a++) {
      this.totalcompra = this.totalcompra + this.datoscarrito[a].precio
      console.log(this.totalcompra)
    }
  }

  eliminar(id:number)
  {
    this.datoscarrito.splice(id, 1)
    localStorage.setItem('carrito', JSON.stringify(this.datoscarrito))
    this.totalitems()
  }
}
