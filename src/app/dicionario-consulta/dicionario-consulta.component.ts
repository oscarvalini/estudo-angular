import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Dicionario } from '../dicionario-cadastro/dicionario.inteface';
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
  palavras: Palavra[] = [];
  palavraModal!: Palavra;
  letrasNoDicionario: Set<string> = new Set();
  letraSelecionada: string = 'Todos';
  dicionario!: Dicionario;
  idDicionario: number = 1;

  constructor(
    private dicionarioService: DicionarioService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    this.idDicionario = this.route.snapshot.params['id'];

    this.dicionarioService.buscaDicionario(this.idDicionario).subscribe((dicionario) => {
        this.dicionario = dicionario;
        console.log(this.dicionario);
    });

    this.dicionarioService.buscaPalavrasPorIdDicionario(this.idDicionario).subscribe(palavras => {
      this.palavras = palavras;
      this.palavras.forEach((p) => this.letrasNoDicionario.add(p.texto.trim().charAt(0).toUpperCase()));
      if (this.letrasNoDicionario.size > 1) {
        this.letrasNoDicionario.add('Todos');
      }
      console.log(palavras)
    })
  }        

  public filtrarPorLetra(letra: string) {
    if (letra == 'Todos') {
      this.dicionarioService.buscaPalavrasPorIdDicionario(this.idDicionario).subscribe(palavras => { 
        this.palavras = palavras;
        this.letraSelecionada = 'Todos';
      })
    } else {
      this.dicionarioService.buscaPalavrasPelaPrimeiraLetra(this.idDicionario, letra).subscribe(palavras => {
        console.log(palavras)
        this.palavras = palavras
        this.letraSelecionada = letra;
      })
    }
  }

  public letraEstaSelecionada(letra: String) {
    return this.letraSelecionada == letra;
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
