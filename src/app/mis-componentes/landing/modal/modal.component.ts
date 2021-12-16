import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private peticion:UserService, private logueado:PerfilService, private msg:MensajesService, private router:Router ) { }

  registro:any = 
    {
      nombre:'',
      email:'',
      password:''
    }

  login:any=
    {
      email:'',
      password:''
    }

  
  ngOnInit(): void {
  }

//MODAL
public closeResult: string | undefined;

open(content:TemplateRef <any>) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

public getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


IniciarSesion(datos:any)
  {
    console.log(datos)

      var post= {
        host:this.peticion.urlLocal,
        path:'/Usuarios/Login',
        data:{
        email:datos.email,
        password:datos.password
        }
     }

     console.log(post)
     localStorage.setItem('datospersona', JSON.stringify(post));

      this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
      console.log(res)
      localStorage.setItem('nombre', res.nombre)
      localStorage.setItem('email', datos.email)
      if(res.state == false){
        this.msg.load(res.mensaje, 'danger')
      }else{
        this.msg.load(res.mensaje)
        this.router.navigateByUrl('home');
       this.modalService.dismissAll()
       
      }
      this.logueado.logueado = res.state
      
     })
  }

  Registro(datos:any)
  {
    console.log(datos)

    var post= {
      host:this.peticion.urlLocal,
      path:'/Usuarios/Guardar',
      data:{
      nombre: datos.nombre,
      email:datos.email,
      password:datos.password
      }
   }
  console.log(post)

    this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
    console.log(res)
    if(res.state == false){
      this.msg.load(res.mensaje, 'danger')
    }else{
      this.msg.load(res.mensaje)
      this.router.navigateByUrl('home');
      this.modalService.dismissAll()
    }
   })
  }
}


