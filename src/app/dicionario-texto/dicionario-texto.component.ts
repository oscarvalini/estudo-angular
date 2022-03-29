import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DicionarioService } from '../dicionario.service';
import { Dicionario } from '../dicionario-cadastro/dicionario.inteface';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Palavra } from '../dicionario-cadastro/palavra.interface';

@Component({
  selector: 'app-dicionario-texto',
  templateUrl: './dicionario-texto.component.html',
  styleUrls: ['./dicionario-texto.component.css']
})
export class DicionarioTextoComponent implements OnInit {

  iconeAdicionar = faPlusCircle;
  iconeLupa = faMagnifyingGlass;
  iconeEngrenagem = faGear;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;
  iconeEditar = faPencil;

  modalRef?: BsModalRef;

  dicionario!: Dicionario;

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
    private route: ActivatedRoute,
    private dicionarioService: DicionarioService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {  
      
    
      this.dicionarioService.buscaDicionario(params['id']).subscribe(dicionarioEncontrado => {

        if(!dicionarioEncontrado) {
          return;
        }
        this.dicionario = dicionarioEncontrado;
      });
      });

     
      // const dicionarioEncontrado = this.dicionarioService.buscaDicionario(params['id']);
     
  }

  abrePalavraForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  adicionaPalavra(palavra: Palavra) {
    console.log(palavra);
    this.dicionarioService.adicionaPalavra(this.dicionario.codigo, palavra);
    this.buscaDicionario();
  }

  atualizaPalavra(palavraAtualizar: Palavra) {
    console.log(palavraAtualizar)
    this.dicionarioService.atualizaPalavra(this.dicionario.codigo, palavraAtualizar);
    this.buscaDicionario();
  }

  excluiPalavra(idDicionario: Number) {
    this.dicionarioService.exclui(idDicionario);
    this.buscaDicionario();
  }

  buscaDicionario() {
    this.dicionarioService.buscaDicionario( this.dicionario.id! ).subscribe(dic =>  this.dicionario  = dic);


    // this.dicionario = this.dicionarioService.buscaDicionario(this.dicionario.codigo)!;
    console.log(this.dicionario);
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
