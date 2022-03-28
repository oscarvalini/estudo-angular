import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Dicionario } from './dicionario-cadastro/dicionario.inteface';
import { Palavra } from './dicionario-cadastro/palavra.interface';
@Injectable({
  providedIn: 'root'
})
export class DicionarioService {

  dicionarioSequencia = 4;

  palavrasDic: Palavra[] = [
    {  codigo: 1,
    codigo_dicionario: 1,
    texto: "América",
    definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.",
    definicao_extra: "Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus."
    } as Palavra,
    {  codigo: 1,
      codigo_dicionario: 1,
      texto: "Banana",
      definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.",
      definicao_extra: "Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus."
      }as Palavra
    ,
    {  codigo: 1,
      codigo_dicionario: 1,
      texto: "Cabelo",
      definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.",
      definicao_extra: "Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus."
      }as Palavra,
      {  codigo: 1,
        codigo_dicionario: 1,
        texto: "Dado",
        definicao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.",
        definicao_extra: "Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus."
        }as Palavra]


  dicionarios: Dicionario[] = [
    { codigo: 1, nome: 'Teste', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000', palavras: this.palavrasDic} as Dicionario,
    { codigo: 2, nome: 'Teste2', corTitulo: '#00CC00', corBotao: '#FFFFFF', corBotaoFonte: '#FFFFFF', corIcone: '#FFFFFF' , palavras: this.palavrasDic} as Dicionario,
    { codigo: 3, nome: 'Teste3', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000' , palavras: this.palavrasDic} as Dicionario,
    { codigo: 4, nome: 'Teste4', corTitulo: '#2233CC', corBotao: '#CCCCCC', corBotaoFonte: '#000000', corIcone: '#000000', palavras: this.palavrasDic } as Dicionario,
  ];

  constructor() { }

  atualiza(dicionario: Dicionario): Boolean {
    const indice = this.dicionarios.findIndex(dicionario => dicionario.codigo == dicionario.codigo);
    this.dicionarios[indice] = dicionario;
    return true;
  }

  adiciona(dicionario: Dicionario): Dicionario {
    dicionario.codigo = ++this.dicionarioSequencia;
    this.dicionarios.push(dicionario);
    return dicionario;
  }
  buscaDicionario(codigoDicionario: Number ): Dicionario | undefined{
    return  this.dicionarios.find(d => d.codigo == codigoDicionario)
  }


  buscaTodos(): Dicionario[] {
    return  this.dicionarios;
  }

  buscaPorLetra(codigoDicionario: Number , letraBuscada: String) : Palavra[]|undefined {
    return  this.buscaDicionario(codigoDicionario)?.palavras.filter(p => p.texto.charAt(0) == letraBuscada)
  }
  buscaPalavras(codigoDicionario: Number) : Dicionario|undefined {
    return this.dicionarios.find(d => d.codigo == codigoDicionario)

  }

  exclui(codigoDicionario: Number) {
    console.log('excluir Dicionário ' + codigoDicionario);
  }
}
