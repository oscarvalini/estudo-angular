import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Dicionario } from './dicionario-cadastro/dicionario.inteface';

@Injectable({
  providedIn: 'root'
})
export class DicionarioService {

  constructor() { }

  atualiza(dicionario: Dicionario) {
    console.log('Atualizando Dicionário')
  }

  adiciona(dicionario: Dicionario) {
    console.log('Adicionando Dicionário');
  }

  buscaTodos(): Dicionario[] {
    return [
      { codigo: 1, nome: 'Teste', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000' } as Dicionario,
      { codigo: 2, nome: 'Teste2', corTitulo: '#00CC00', corBotao: '#FFFFFF', corBotaoFonte: '#FFFFFF', corIcone: '#FFFFFF' } as Dicionario,
      { codigo: 3, nome: 'Teste3', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000' } as Dicionario,
      { codigo: 4, nome: 'Teste4', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000' } as Dicionario,
    ] 
  }

  exclui(codigoDicionario: Number) {
    console.log('excluir Dicionário ' + codigoDicionario);
  }
}
