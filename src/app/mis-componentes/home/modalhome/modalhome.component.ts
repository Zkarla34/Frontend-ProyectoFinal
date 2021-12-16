import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-modalhome',
  templateUrl: './modalhome.component.html',
  styleUrls: ['./modalhome.component.css']
})
export class ModalhomeComponent implements OnInit {

  constructor(private modalService: NgbModal, public post:PostService) { }

  nombre:string = 'Pepito Perez'
  descripcion:string = ''

  ngOnInit(): void {
  }

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

 datos:any[] = []
Guardar()
  {
    var post = {
      host:this.post.urlLocal,
      path:'/Post/Guardar',
      data:{
        descripcion: this.descripcion
      }
    }
    this.post.Post(post.host + post.path, post.data).then((res:any) =>{
    console.log(res)
    this.datos = res
    })
  }
}
