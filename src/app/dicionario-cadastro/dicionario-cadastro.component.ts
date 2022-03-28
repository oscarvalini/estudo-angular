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
    codigo: [],
    nome: ['', Validators.required],
    corBotao: ['#000000', Validators.required],
    corBotaoFonte: ['#FFFFFF', Validators.required],
    corTitulo: ['#FFFFFF', Validators.required],
    corIcone: ['#FFFFFF', Validators.required]
  })

  submitted = false;

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

  onSubmit() {
    this.submitted = true;

    if(!this.dicionarioForm.valid) {
      return;
    }

    const dicionario: Dicionario = this.dicionarioForm.getRawValue();

    console.log(dicionario)

    if(dicionario.codigo && dicionario.codigo > 0) {
      this.atualizaDicionario(dicionario);
    } else {
      this.adicionaDicionario(dicionario);
    }
    this.limpaFormulario();
  }

  adicionaDicionario(dicionario: Dicionario) {
    console.log(dicionario)
    const dicionarioAdicionado = this.dicionarioService.adiciona(dicionario);
    this.dicionarios.push(dicionarioAdicionado);
  }

  atualizaDicionario(dicionarioAtualizar: Dicionario) {
    console.log(dicionarioAtualizar)
    this.dicionarioService.atualiza(dicionarioAtualizar);
    const indice = this.dicionarios.findIndex(dicionario => dicionario.codigo == dicionarioAtualizar.codigo);
    this.dicionarios[indice] = dicionarioAtualizar;
  }

  excluirDicionario(codigoDicionario: Number) {
    this.dicionarioService.exclui(codigoDicionario);
  }

  limpaFormulario() {
    this.dicionarioForm.reset({
      corBotao: '#000000',
      corBotaoFonte: '#FFFFFF',
      corTitulo: '#FFFFFF',
      corIcone: '#FFFFFF'
    });
    this.submitted = false;
  }

  changeColor(event: any) {
    console.log(event);
  }

}
