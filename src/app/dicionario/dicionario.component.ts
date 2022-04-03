import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from './dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencilAlt, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dicionario',
  templateUrl: './dicionario.component.html',
  styleUrls: ['./dicionario.component.css']
})
export class DicionarioComponent implements OnInit {

  iconeAdicionar = faPlusCircle;
  iconeLupa = faMagnifyingGlass;
  iconeEngrenagem = faGear;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;
  iconeEditar = faPencilAlt;

  modalRef!: BsModalRef;
  @ViewChild('templateModalConfirmacao') modalConfirmacaoRef!: TemplateRef<any>
  dicionarios: Dicionario[] = [];
  dicionarioEditar?: Dicionario;

  idDicionarioExcluir!: number;

  constructor(
    private dicionarioService: DicionarioService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.dicionarioService.buscaDicionarios().subscribe(dic => this.dicionarios  = dic);
    this.modalService.onHide.subscribe(() => { this.dicionarioEditar = undefined })
  }

  abreDicionarioForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  editaDicionario(template: TemplateRef<any>, dicionarioEditar: Dicionario) {
    this.dicionarioEditar = dicionarioEditar;
    this.modalRef = this.modalService.show(template)
  }

  excluiDicionario(idDicionario: number) {
    this.idDicionarioExcluir = idDicionario;
    this.modalRef = this.modalService.show(this.modalConfirmacaoRef);
  }

  buscaDicionarios() {
    this.dicionarioService.buscaDicionarios().subscribe(dic => {
      this.dicionarios = dic;
      console.log(this.dicionarios);
    });
  }

  aoSubmeter(dicionario: Dicionario) {
    console.log(dicionario);
    this.dicionarioEditar = undefined;
    this.modalRef?.hide();
    this.buscaDicionarios();
  }

  changeColor(event: any) {
    console.log(event);
  }

  confirmaExclusao(): void {
    this.dicionarioService.excluiDicionario(this.idDicionarioExcluir).subscribe(response => {
      console.log(response)
      this.buscaDicionarios();
      this.modalRef?.hide();
    });
  }
 
  cancelaExclusao(): void {
    this.modalRef?.hide();
  }

}
