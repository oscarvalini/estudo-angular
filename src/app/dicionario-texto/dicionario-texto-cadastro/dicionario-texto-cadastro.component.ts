import { Component, OnInit, TemplateRef } from '@angular/core';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Palavra } from 'src/app/dicionario-cadastro/palavra.interface';

@Component({
  selector: 'app-dicionario-texto-cadastro',
  templateUrl: './dicionario-texto-cadastro.component.html',
  styleUrls: ['./dicionario-texto-cadastro.component.css']
})
export class DicionarioTextoCadastroComponent implements OnInit {



  iconeAdicionar = faPlusCircle;
  iconeLupa = faMagnifyingGlass;
  iconeEngrenagem = faGear;
  iconeAjuda = faQuestionCircle;
  iconeExcluir = faXmark;
  iconeEditar = faPencil;

  modalRef?: BsModalRef;

  palavraForm = this.formBuilder.group({
    codigo: [],
    codigo_dicionario: [],
    texto: ['', Validators.required, Validators.nullValidator],
    definicao: ['', Validators.required, Validators.nullValidator],
    definicao_extra: ['', Validators.required, Validators.nullValidator],
    
  })

  submitted = false;



  constructor(   
    private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  abrePalavraForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.submitted = true;

    if(!this.palavraForm.valid) {
      return;
    }

    const palavra: Palavra = this.palavraForm.getRawValue();

    if(palavra.codigo && palavra.codigo > 0) {
      // this.atualizaPalavra(palavra);
    } else {
      // this.adicionaPalavra(palavra);
    }


    // this.limpaFormulario();
    this.modalService.hide();
  }

  // adicionaPalavra(dicionario: Dicionario) {
  //   console.log(dicionario)
  //   this.dicionarioService.adiciona(dicionario);
  //   this.buscaDicionarios();
  // }

}
