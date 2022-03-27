import { Component, OnInit, TemplateRef } from '@angular/core';
import { faCross, faGear } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dicionario-consulta',
  templateUrl: './dicionario-consulta.component.html',
  styleUrls: ['./dicionario-consulta.component.css']
})
export class DicionarioConsultaComponent implements OnInit {

  modalRef!: BsModalRef;

  iconeConfig = faGear;
  iconeFechar = faCross;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

}
