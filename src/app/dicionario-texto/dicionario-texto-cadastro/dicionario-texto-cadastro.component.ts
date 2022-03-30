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
    id: [],
    idDicionario: ['', Validators.required],
    texto: ['', Validators.required],
    definicao: ['', Validators.required],
    definicao_extra: [''],
  })

  submitted = false;

  @Input('palavraEditar') palavraEditar?: Palavra;
  @Input('idDicionario') idDicionario?: number;
  @Output('aoSubmeter') submeterPalavraEventEmitter = new EventEmitter<Palavra>();

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private dicionarioService: DicionarioService
  ) { }

  ngOnInit(): void {
    if (this.palavraEditar) {
      console.log(this.palavraEditar);
      this.palavraForm.patchValue({ ...this.palavraEditar });
    } else {
      this.palavraForm.patchValue({ idDicionario: this.idDicionario })
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
      this.atualizaPalavra(palavra);
    } else {
      this.adicionaPalavra(palavra);
    }


    // this.limpaFormulario();
    this.modalService.hide();
  }

  adicionaPalavra(palavra: Palavra) {
    console.log(palavra);
    this.dicionarioService.adicionaPalavra(palavra).subscribe(palavra => {
      this.submeterPalavraEventEmitter.emit(palavra);
    });
  }

  atualizaPalavra(palavraAtualizar: Palavra) {
    console.log(palavraAtualizar)
    this.dicionarioService.atualizaPalavra(palavraAtualizar).subscribe(palavra => {
      this.submeterPalavraEventEmitter.emit(palavra);
    });
  }

  limpaFormulario() {
    this.palavraForm.reset();
    this.submitted = false;
  }

}
