import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dicionario } from './dicionario-cadastro/dicionario.inteface';
import { Palavra } from './dicionario-cadastro/palavra.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, find, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PalavraService {


  palavraSequencia = 4;

  private dicionariosUrl = 'api/dicionarios/';
  private palavrasUrl = 'api/palavras/';
  constructor(private http: HttpClient) { }


  //===============================================================


  adiciona(palavra: Palavra): Observable<Palavra> {
    palavra.codigo = ++this.palavraSequencia;
    return this.http.post<Palavra>(this.palavrasUrl, palavra).pipe(
     
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  atualiza(palavra: Palavra): Observable<any> {
    return this.http.put(this.palavrasUrl + palavra.id, palavra);
  }

  exclui(id: Number): Observable<any> {
    return this.http.delete(this.palavrasUrl + id).pipe(
     
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

    
  buscaPalavrasDicionario(codigo_dicionario: Number ): Observable<Palavra[]> {
    return this.http.get<Palavra[]>(this.palavrasUrl).pipe(   
      map((result : Palavra[]) => {
        // you need to sort, if your data was not sorted
        return result.filter( p => p.codigo_dicionario == codigo_dicionario)
        }),
   
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }



  //===============================================================

  // atualiza(dicionarioAtualizar: Dicionario): Boolean {
  //   dicionarioAtualizar.palavras = this.palavrasDic;
  //   const indice = this.dicionarios.findIndex(dicionario => dicionario.codigo == dicionarioAtualizar.codigo);
  //   this.dicionarios[indice] = dicionarioAtualizar;
  //   return true;
  // }

  // adiciona(dicionario: Dicionario): Dicionario {
    
  //   dicionario.codigo = ++this.dicionarioSequencia;
  //   this.dicionarios.push(dicionario);
  //   return dicionario;
  // }

  adicionaPalavra(codigoDicionario: number, palavra: Palavra) {
    const dicionario = this.dicionarios.find(dic => dic.codigo == codigoDicionario);
    if(!dicionario) {
      return;
    }
    dicionario.palavras.push(palavra);
  }

  atualizaPalavra(codigoDicionario: number, palavraAtualizar: Palavra) {
    const dicionario = this.dicionarios.find(dic => dic.codigo == codigoDicionario);
    const indice = dicionario?.palavras.findIndex(pal => pal.codigo == palavraAtualizar.codigo);
    if(!indice) {
      return;
    }
    if(!dicionario) {
      return;
    }
    dicionario.palavras[indice] = palavraAtualizar;

  }
}
