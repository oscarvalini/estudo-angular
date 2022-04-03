import { Component, Input, OnInit } from '@angular/core';
import { DicionarioTexto } from 'src/app/dicionario-texto/dicionario-texto.interface';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input('palavras') palavras: DicionarioTexto[]  = [];

  letras = new Set<string>();

  constructor() { }

  ngOnInit(): void {
    //this.letras = [...this.palavras.map(palavra => palavra.texto.charAt(0))]
  }

}
