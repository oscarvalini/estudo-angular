import { Component, OnInit, TemplateRef } from '@angular/core';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import {
  faCross,
  faFile,
  faGear,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dicionario-consulta',
  templateUrl: './dicionario-consulta.component.html',
  styleUrls: ['./dicionario-consulta.component.css'],
})
export class DicionarioConsultaComponent implements OnInit {
  modalRef!: BsModalRef;

  iconeDocumento = faFileLines;
  iconeConfig = faGear;
  iconeFechar = faXmark;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  // abrirModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, >)
  // }

  public openModalWithComponent(template: TemplateRef<any>) {
    let initialState = {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      title: 'I.A.S.',
    };
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    /* this is how we open a Modal Component from another component */
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, modalConfig, { class: 'modal-lg', initialState ,

      width: 'auto',
      height: 'auto',
      maxHeight: '100px',
      maxWidth:'100vw'
     
     })
    );
  }
}
