import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from './dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';

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
  @ViewChild('templateModalConfirmacao') modalConfirmacaoRef!: TemplateRef<any>
  dicionarios: Dicionario[] = [];

  idDicionarioExcluir!: number;

  dicionarioForm = this.formBuilder.group({
    id: [],
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
    this.dicionarioService.buscaDicionarios().subscribe(dic => this.dicionarios  = dic);
    this.modalService.onHide.subscribe(() => { this.limpaFormulario() })
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

    if(dicionario.id && dicionario.id > 0) {

      this.atualizaDicionario(dicionario);
    } else {
      this.adicionaDicionario(dicionario);
    }

    this.limpaFormulario();
    this.modalService.hide();
  }

  adicionaDicionario(dicionario: Dicionario) {
    console.log(dicionario)
    this.dicionarioService.criaDicionario(dicionario).subscribe(response => {
      console.log(response)
      this.buscaDicionarios();
    });
  }

  atualizaDicionario(dicionarioAtualizar: Dicionario) {
    console.log(dicionarioAtualizar)
    this.dicionarioService.atualizaDicionario(dicionarioAtualizar).subscribe(response => {
      console.log(response)
      this.buscaDicionarios();
    });
  }

  editaDicionario(template: TemplateRef<any>, dicionarioEditar: Dicionario) {
    this.dicionarioForm.patchValue({...dicionarioEditar})
    this.modalRef = this.modalService.show(template)
  }

  excluiDicionario(idDicionario: number) {
    this.idDicionarioExcluir = idDicionario;
    this.modalRef = this.modalService.show(this.modalConfirmacaoRef);
  }

  buscaDicionarios() {
    this.dicionarioService.buscaDicionarios().subscribe(dic =>  this.dicionarios = dic);
    console.log(this.dicionarios);
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

  confirmaExclusao(): void {
    this.dicionarioService.excluiDicionario(this.idDicionarioExcluir).subscribe(response => {
      console.log(response)
      this.buscaDicionarios();
      this.modalRef?.hide();
    });
  }
 
  cancelaExclusao(): void {
    this.modalRef?.hide();
  }

}
