import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Palavra } from 'src/app/dicionario-cadastro/palavra.interface';
import { DicionarioService } from 'src/app/dicionario.service';
import { Dicionario } from 'src/app/dicionario-cadastro/dicionario.inteface';
import { ActivatedRoute } from '@angular/router';

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
    texto: ['', Validators.required],
    definicao: ['', Validators.required],
    definicao_extra: [''],
  })

  submitted = false;

  @Input('palavraEditar') palavraEditar?: Palavra;
  @Output('aoAdicionar') aoAdicionar = new EventEmitter<Palavra>();
  @Output('aoAtualizar') aoAtualizar = new EventEmitter<Palavra>()

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.palavraEditar) {
      this.palavraForm.patchValue({ ...this.palavraEditar });
    }
  }

  fecharFormulario(template: TemplateRef<any>) {
    this.modalService.hide();
  }

  onSubmit() {
    this.submitted = true;

    if (!this.palavraForm.valid) {
      return;
    }

    const palavra: Palavra = this.palavraForm.getRawValue();

    if (palavra.id && palavra.id > 0) {
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
