import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.component.html',
  styleUrls: ['./modalperfil.component.css']
})
export class ModalperfilComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  nombreUsuario:string='Pepito Perez';
  correo:string='pepito@gmail.com';
  
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

}

