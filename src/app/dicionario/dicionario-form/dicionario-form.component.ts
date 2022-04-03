import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DicionarioService } from 'src/app/dicionario.service';
import { Dicionario } from '../dicionario.inteface';

@Component({
  selector: 'app-dicionario-form',
  templateUrl: './dicionario-form.component.html',
  styleUrls: ['./dicionario-form.component.css']
})
export class DicionarioFormComponent implements OnInit {

  @Input() dicionarioEditar?: Dicionario;
  @Output('aoSubmeter') submeteEvent = new EventEmitter<Dicionario>();

  dicionarioForm = this.formBuilder.group({
    id: [],
    codigo: [],
    nome: ['', Validators.required],
    corBotao: ['#000000', Validators.required],
    corBotaoFonte: ['#FFFFFF', Validators.required],
    corTitulo: ['#000000', Validators.required],
    corIcone: ['#FFFFFF', Validators.required]
  })

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dicionarioService: DicionarioService,
  ) { }

  ngOnInit(): void {
    if(this.dicionarioEditar) {
      this.dicionarioForm.patchValue({...this.dicionarioEditar});
    }
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
    //this.modalService.hide();
  }

  adicionaDicionario(dicionario: Dicionario) {
    console.log(dicionario)
    this.dicionarioService.criaDicionario(dicionario).subscribe(response => {
      console.log(response)
      this.submeteEvent.emit(response);
    });
  }

  atualizaDicionario(dicionarioAtualizar: Dicionario) {
    console.log(dicionarioAtualizar)
    this.dicionarioService.atualizaDicionario(dicionarioAtualizar).subscribe(response => {
      console.log(response)
      this.submeteEvent.emit(response);
    });
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

}
