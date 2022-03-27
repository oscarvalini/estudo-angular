import { Component, OnInit, TemplateRef } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from './dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  iconeEditar = faPencil;

  modalRef?: BsModalRef;

  dicionarios: Dicionario[] = [];

  dicionarioForm = this.formBuilder.group({
    codigo: [''],
    nome: ['', Validators.required],
    corBotao: ['#000000', Validators.required],
    corBotaoFonte: ['#FFFFFF', Validators.required],
    corTitulo: ['#FFFFFF', Validators.required],
    corIcone: ['#FFFFFF', Validators.required]
  })

  constructor(
    private dicionarioService: DicionarioService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dicionarios = [...this.dicionarioService.buscaTodos()];
  }

  abreDicionarioForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  adicionarDicionario() {
    console.log('adicionando Funcionário');
  }

  excluirDicionario(codigoDicionario: Number) {
    this.dicionarioService.exclui(codigoDicionario);
  }

}
