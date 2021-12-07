import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }
  public logueado:boolean = false;
  public nombreUsuario:string ='';
}
