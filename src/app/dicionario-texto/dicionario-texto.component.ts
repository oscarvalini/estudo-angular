import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from '../dicionario/dicionario.inteface';
import { faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
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
  palavras!: DicionarioTexto[];
  palavrasExibir: DicionarioTexto[] = []

  palavraSelecionada?: DicionarioTexto;
  idPalavraExcluir?: number;

  constructor(
    private route: ActivatedRoute,
    private dicionarioService: DicionarioService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    const idDicionario = this.route.snapshot.params['id'];
    this.dicionarioService.buscaDicionario(idDicionario).subscribe(dicionario => {
      this.dicionario = dicionario;
    });

    this.dicionarioService.buscaPalavrasPorIdDicionario(idDicionario).subscribe(palavras => {
      this.palavras = [...palavras];
    })

    this.modalService.onHide.subscribe(() => { this.palavraSelecionada = undefined })
  }

  buscaPalavras() {
    this.dicionarioService.buscaPalavrasPorIdDicionario(this.dicionario.id!).subscribe(palavras => {
      this.palavras = [...palavras];
    })
  }

  public filtrarPorLetra(letra: string) {
    if (letra == '') {
      setTimeout(() => {
        this.palavrasExibir = [...this.palavras];
      }, 0)
    } else {
      setTimeout(() => {
        this.palavrasExibir = [...this.palavras].filter(palavra =>  palavra.texto.trim().toUpperCase().charAt(0) == letra);
      }, 0)
    }
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
      this.buscaPalavras();
      this.modalRef?.hide();
    });
  }
 
  cancelaExclusao(): void {
    this.modalRef?.hide();
  }
}
