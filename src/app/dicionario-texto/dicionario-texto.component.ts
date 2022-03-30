import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from '../dicionario-cadastro/dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Palavra } from '../dicionario-cadastro/palavra.interface';

@Component({
  selector: 'app-dicionario-texto',
  templateUrl: './dicionario-texto.component.html',
  styleUrls: ['./dicionario-texto.component.css']
})
export class DicionarioTextoComponent implements OnInit {

  iconeAdicionar = faPlusCircle;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;
  iconeEditar = faPencil;

  modalRef?: BsModalRef;
  @ViewChild('template') elementoModalRef!: TemplateRef<any>
  @ViewChild('templateModalConfirmacao') modalConfirmacaoRef!: TemplateRef<any>

  dicionario!: Dicionario;
  palavras: Palavra[] = []

  palavraSelecionada?: Palavra;
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

  abrePalavraForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  editaPalavra(palavra: Palavra) {
    this.modalRef = this.modalService.show(this.elementoModalRef);
    this.palavraSelecionada = palavra;
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
