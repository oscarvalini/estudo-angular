import { Component, OnInit, TemplateRef } from '@angular/core';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import {
  faCross,
  faFile,
  faGear,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Palavra } from '../dicionario-cadastro/palavra.interface';
import { DicionarioService } from '../dicionario.service';

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
  palavras: Palavra[] | undefined = [];
  codigoDicionario: Number = 1;
  nomeDicionario: String | undefined = '';
  palavraModal!: Palavra;
  letrasNoDicionario : Set<String> = new Set();
  letraSelecionada: String = 'Todos';

  constructor(
    private modalService: BsModalService,
    private dicionarioService: DicionarioService
  ) {}



  ngOnInit(): void {
   
    this.nomeDicionario = this.dicionarioService.buscaDicionario(
      this.codigoDicionario
    )?.nome;
    this.palavras = this.dicionarioService.buscaPalavras(
      this.codigoDicionario
    )?.palavras;

    this.palavras?.forEach(p => this.letrasNoDicionario.add(p.texto.charAt(0)))
    
  }

 public filtrarPorLetra(
    letra: String,
  
  ){
    this.palavras = this.dicionarioService.buscaPorLetra(this.codigoDicionario, letra)
  }


  public abrirModalDefinicaoExtra(
    template: TemplateRef<any>,
    palavra: Palavra
  ) {
    this.palavraModal = palavra;

    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };

    /* this is how we open a Modal Component from another component */

    this.modalRef = this.modalService.show(
      template,

      Object.assign(modalConfig, {
        class: 'modal-lg',
        width: 'auto',
        height: 'auto',
        maxHeight: '100px',
        maxWidth: '100vw',
      })
    );
  }
}
