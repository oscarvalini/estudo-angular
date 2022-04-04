import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dicionario } from './dicionario/dicionario.inteface';
import { DicionarioTexto } from './dicionario-texto/dicionario-texto.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DicionarioService {
  dicionarioSequencia = 4;

  private dicionariosUrl = 'api/dicionarios/';
  private palavrasUrl = 'api/palavras/'
  constructor(private http: HttpClient) { }

  buscaDicionarios(): Observable<Dicionario[]> {
    return this.http.get<Dicionario[]>(this.dicionariosUrl).pipe(
      map(results => results.sort((a, b) => {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      })),
      retry(2),
      catchError(this.handleError)
    );
  }

  buscaDicionario(idDicionario: Number): Observable<Dicionario> {
    return this.http.get<Dicionario>(this.dicionariosUrl + idDicionario).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  criaDicionario(dicionario: Dicionario): Observable<Dicionario> {
    return this.http.post<Dicionario>(this.dicionariosUrl, dicionario).pipe(
      catchError(this.handleError)
    );
  }

  atualizaDicionario(dicionario: Dicionario): Observable<any> {
    return this.http.put(this.dicionariosUrl + dicionario.id, dicionario).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  excluiDicionario(id: number): Observable<any> {
    return this.http.delete(this.dicionariosUrl + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  excluiPalavra(id: number): Observable<DicionarioTexto> {
    return this.http.delete<DicionarioTexto>(this.palavrasUrl + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  
  buscaPalavrasPorIdDicionario(idDicionario: number) {
    const options = idDicionario ? { params: new HttpParams().set('idDicionario', idDicionario) } : {};
    return this.http.get<DicionarioTexto[]>(this.palavrasUrl, options).pipe(
      map(results => results.sort((a, b) => {
        if (a.texto < b.texto) { return -1; }
        if (a.texto > b.texto) { return 1; }
        return 0;
      })),
      catchError(this.handleError)
    );
  }

  buscaPalavrasPelaPrimeiraLetra(idDicionario: number, letra: string) {
    const options = idDicionario ? { params: new HttpParams().set('idDicionario', idDicionario).append('texto', `^${letra}`) } : {};
    return this.http.get<DicionarioTexto[]>(this.palavrasUrl, options).pipe(
      map(results => results.sort((a, b) => {
        if (a.texto < b.texto) { return -1; }
        if (a.texto > b.texto) { return 1; }
        return 0;
      })),
      catchError(this.handleError)
    );
  }

  adicionaPalavra(palavraAdicionar: DicionarioTexto): Observable<DicionarioTexto> {
    return this.http.post<DicionarioTexto>(this.palavrasUrl, palavraAdicionar).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  atualizaPalavra(palavraAtualizar: DicionarioTexto) {
    return this.http.put<DicionarioTexto>(this.palavrasUrl + palavraAtualizar.id, palavraAtualizar).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError (error: any) {
    console.error(error);
    return throwError(error);
  }
}
