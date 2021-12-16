import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  public mensajes:any[] = []

borrar()
{
  setTimeout(() =>{
    this.mensajes.splice(0,1)
  }, 5000);
}

public load(msg:string, color?:string)
{

  if(color == undefined){
    color = 'success'
  }
  this.mensajes.push({texto:msg, color:color})
  this.borrar()
  console.log(msg)
  console.log(color)
}
}
