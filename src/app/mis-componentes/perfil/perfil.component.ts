import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public usuario:PerfilService, public posts:PostService) { }


  usuarios:string ='';
  descripcion:string = '';

  nombre:string = 'Pepito Perez';

  ngOnInit(): void {
    this.listpostbyuser()
  }


 datos:any[] = []

  listpostbyuser()
  {
    var post = {
      host:this.posts.urlLocal,
      path:'/Post/ListByUser',
      data:{}
    }
    this.posts.Post(post.host + post.path, post.data).then((res:any) =>{
    console.log(res)
    this.datos = res
    })
  }
}
