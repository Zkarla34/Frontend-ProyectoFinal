import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private peticion:UserService, private logueado:PerfilService ) { }

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

private getDismissReason(reason: any): string {
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

      this.peticion.Post(post.host + post.path, post.data).then((res:any) =>{
      console.log(res)
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
   })
  }
}
