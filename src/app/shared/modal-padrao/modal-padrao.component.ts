import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input('corFonte') corFonte = '#FFF';
  @Input('corDestaque') corDestaque = '#253C89';

  iconeExcluir = faXmark;

  constructor() { }

  botaoFecharClicado() {
    this.fecharModalEvent.emit();
  }

}
