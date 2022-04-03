import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { faGear, faMagnifyingGlass, faPencil, faPlusCircle, faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DicionarioTexto } from 'src/app/dicionario-texto/dicionario-texto.interface';
import { DicionarioService } from 'src/app/dicionario.service';

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
    definicaoExtra: [''],
  })

  submitted = false;

  @Input('palavraEditar') palavraEditar?: DicionarioTexto;
  @Input('idDicionario') idDicionario?: number;
  @Output('aoSubmeter') submeterPalavraEventEmitter = new EventEmitter<DicionarioTexto>();

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
    const palavra: DicionarioTexto = this.palavraForm.getRawValue();
    if (palavra.id && palavra.id > 0) {
      this.atualizaPalavra(palavra);
    } else {
      this.adicionaPalavra(palavra);
    }


    // this.limpaFormulario();
    this.modalService.hide();
  }

  adicionaPalavra(palavra: DicionarioTexto) {
    console.log(palavra);
    this.dicionarioService.adicionaPalavra(palavra).subscribe(palavra => {
      this.submeterPalavraEventEmitter.emit(palavra);
    });
  }

  atualizaPalavra(palavraAtualizar: DicionarioTexto) {
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
