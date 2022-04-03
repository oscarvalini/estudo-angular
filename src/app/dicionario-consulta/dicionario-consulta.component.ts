import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGear, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Dicionario } from '../dicionario/dicionario.inteface';
import { DicionarioTexto } from '../dicionario-texto/dicionario-texto.interface';
import { DicionarioService } from '../dicionario.service';

@Component({
  selector: 'app-dicionario-consulta',
  templateUrl: './dicionario-consulta.component.html',
  styleUrls: ['./dicionario-consulta.component.css'],
})
export class DicionarioConsultaComponent implements OnInit {

  @ViewChild('templateDicionario') templateDicionarioRef!: TemplateRef<BsModalRef>
  @ViewChild('templateDefinicaoExtra') templateDefinicaoExtraRef!: TemplateRef<BsModalRef>

  modalRef?: BsModalRef;

  iconeEditar = faPencil;
  iconeDocumento = faFileLines;
  iconeConfig = faGear;
  iconeFechar = faXmark;

  palavras: DicionarioTexto[] = [];
  palavrasExibir: DicionarioTexto[] = [];
  palavraModal!: DicionarioTexto;
  dicionario!: Dicionario;

  constructor(
    private dicionarioService: DicionarioService,
    private routingService: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const idDicionario = this.route.snapshot.params['id'];

    this.dicionarioService.buscaDicionario(idDicionario).subscribe({
      next: (dicionario) => {
        this.dicionario = dicionario;
        console.log(dicionario);
      },
      error: (err) => {
        this.routingService.navigateByUrl('..');
      }
    })


    this.dicionarioService.buscaPalavrasPorIdDicionario(idDicionario).subscribe(palavras => {
      this.palavras = palavras;
      this.palavrasExibir = this.ordernarPalavras(this.palavras);

    })
  }

  public filtrarPorLetra(letra: string) {
    if (letra == '') {
      this.dicionarioService.buscaPalavrasPorIdDicionario(this.dicionario.id!).subscribe(palavras => {
        this.palavrasExibir = this.ordernarPalavras(palavras);
        console.log(this.palavrasExibir)
      })
    } else {
      this.dicionarioService.buscaPalavrasPelaPrimeiraLetra(this.dicionario.id!, letra).subscribe(palavras => {
        console.log(palavras)
        this.palavrasExibir = this.ordernarPalavras(palavras);
        console.log(this.palavrasExibir)
      })
    }
  }


  public ordernarPalavras(palavrasParaOrdenar : DicionarioTexto[]){
    return palavrasParaOrdenar.sort((a, b) => {
      if (a.texto < b.texto) { return -1; }
      if (a.texto > b.texto) { return 1; }
      return 0;
    });
  }
  paginadorNecessario(){
    console.log(this.palavras.length )
    return this.palavras.length > 25
  }


  aoSubmeter(dicionario: Dicionario) {
    this.dicionarioService.buscaDicionario(this.dicionario.id!).subscribe((dicionario) => this.dicionario = dicionario);
    this.modalRef?.hide();
  }

  abrirModalDicionario() {
    this.modalRef = this.modalService.show(this.templateDicionarioRef);
  }

  abrirModalDefinicaoExtra(
    template: TemplateRef<any>,
    palavra: DicionarioTexto
  ) {
    this.palavraModal = palavra;

    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };

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
