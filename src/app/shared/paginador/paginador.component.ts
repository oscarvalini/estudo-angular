import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DicionarioTexto } from 'src/app/dicionario-texto/dicionario-texto.interface';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit, OnChanges {

  @Input('palavras') palavras: DicionarioTexto[]  = [];
  @Output('aoMudar') mudaLetraEvent = new EventEmitter<string>()

  letrasNoDicionario = new Set<string>();
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ''];
  letraSelecionada: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnCHANGE CHAMADO!!!!!! AAAAAAAAAA')
    console.log(changes['palavras'].currentValue);
    const palavras: DicionarioTexto[] = changes['palavras'].currentValue;
    this.letrasNoDicionario = new Set(palavras.map((palavra: DicionarioTexto) => palavra.texto.charAt(0).trim().toUpperCase()));
    this.letraSelecionada = palavras.length < 25 ? '' : [...this.letrasNoDicionario][0] 
  }

  ngOnInit(): void {
    //this.letras = new Set(this.palavras.map(palavra => palavra.texto.charAt(0).trim().toUpperCase()))
    console.log('Length: ' +  this.letrasNoDicionario.size)
    console.log('Oninit ' + Array.from(this.letras));
  }

  filtrarPorLetra(letra: string) {
    this.letraSelecionada = letra;
    this.mudaLetraEvent.emit(letra);
  }

  letraEstaSelecionada(letra: string) {
    return this.letraSelecionada == letra;
  }

  letraExiste(letra: string) {
    return this.letrasNoDicionario.has(letra);

  }


}
