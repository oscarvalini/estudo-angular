import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-padrao',
  templateUrl: './modal-padrao.component.html',
  styleUrls: ['./modal-padrao.component.css']
})
export class ModalPadraoComponent {

  @Output('aoFechar') fecharModalEvent = new EventEmitter();
  @Input('iconeTitulo') iconeTitulo = faPencil;
  @Input('titulo') titulo = '';

  iconeExcluir = faXmark;

  constructor() { }

  botaoFecharClicado() {
    this.fecharModalEvent.emit();
  }

}
