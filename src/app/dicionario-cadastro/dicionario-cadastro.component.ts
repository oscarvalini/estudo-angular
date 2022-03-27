import { Component, OnInit } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from './dicionario.inteface';
import { faGear, faMagnifyingGlass, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dicionario-cadastro',
  templateUrl: './dicionario-cadastro.component.html',
  styleUrls: ['./dicionario-cadastro.component.css']
})
export class DicionarioCadastroComponent implements OnInit {

  iconeAdicionar = faPlusCircle;
  iconeLupa = faMagnifyingGlass;
  iconeEngrenagem = faGear;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;

  dicionarios: Dicionario[] = [];

  constructor(
    private dicionarioService: DicionarioService
  ) {}

  ngOnInit(): void {
    this.dicionarios = [...this.dicionarioService.buscaTodos()];
  }

  adicionarDicionario() {
    console.log('abre modal dicionário');
  }

  excluirDicionario(codigoDicionario: Number) {
    this.dicionarioService.exclui(codigoDicionario);
  }

}
