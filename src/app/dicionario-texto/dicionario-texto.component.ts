import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from '../dicionario/dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DicionarioTexto } from './dicionario-texto.interface';

@Component({
  selector: 'app-dicionario-texto',
  templateUrl: './dicionario-texto.component.html',
  styleUrls: ['./dicionario-texto.component.css']
})
export class DicionarioTextoComponent implements OnInit {

  modalOptions: ModalOptions = {
    class: 'modal-lg'
  }

  iconeAdicionar = faPlusCircle;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;
  iconeEditar = faPencil;

  modalRef?: BsModalRef;
  @ViewChild('templateModalDicionarioTexto') modalDicionarioTexto!: TemplateRef<any>
  @ViewChild('templateModalConfirmacao') modalConfirmacaoRef!: TemplateRef<any>

  dicionario!: Dicionario;
  palavras: DicionarioTexto[] = []

  palavraSelecionada?: DicionarioTexto;
  idPalavraExcluir?: number;

  constructor(
    private route: ActivatedRoute,
    private dicionarioService: DicionarioService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    const idDicionario = this.route.snapshot.params['id'];
    this.dicionarioService.buscaDicionario(idDicionario).subscribe(dicionarioEncontrado => {
      this.dicionario = dicionarioEncontrado;
      this.buscaPalavras();
    });

    this.modalService.onHide.subscribe(() => { this.palavraSelecionada = undefined })
  }

  buscaPalavras() {
    this.dicionarioService.buscaPalavrasPorIdDicionario(this.dicionario.id!).subscribe(palavras => {
      this.palavras = palavras;
    })
  }

  abreModalDicionarioTexto() {
    this.modalRef = this.modalService.show(this.modalDicionarioTexto, Object.assign({}, this.modalOptions));
  }

  editaPalavra(palavra: DicionarioTexto) {
    this.palavraSelecionada = palavra;
    this.abreModalDicionarioTexto();
  }

  excluiPalavra(idPalavra: number) {
    this.idPalavraExcluir = idPalavra;
    this.modalRef = this.modalService.show(this.modalConfirmacaoRef);
  }

  confirmaExclusao(): void {
    this.dicionarioService.excluiPalavra(this.idPalavraExcluir!).subscribe(response => {
      console.log(response)
      this.buscaPalavras();
      this.modalRef?.hide();
    });
  }
 
  cancelaExclusao(): void {
    this.modalRef?.hide();
  }
}
