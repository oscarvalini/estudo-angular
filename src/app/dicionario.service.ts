import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dicionario } from './dicionario-cadastro/dicionario.inteface';
import { Palavra } from './dicionario-cadastro/palavra.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, find, map, retry } from 'rxjs/operators';


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
    )
  }

  atualizaDicionario(dicionario: Dicionario): Observable<any> {
    return this.http.put(this.dicionariosUrl + dicionario.id, dicionario);
  }

  excluiDicionario(id: Number): Observable<any> {
    return this.http.delete(this.dicionariosUrl + id).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  buscaPalavrasPorIdDicionario(idDicionario: number) {
    const options = idDicionario ? { params: new HttpParams().set('idDicionario', idDicionario) } : {};
    return this.http.get<Palavra[]>(this.palavrasUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  adicionaPalavra(palavraAdicionar: Palavra): Observable<Palavra> {
    return this.http.post<Palavra>(this.palavrasUrl, palavraAdicionar).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  atualizaPalavra(palavraAtualizar: Palavra) {
    return this.http.put<Palavra>(this.palavrasUrl + palavraAtualizar.id, palavraAtualizar).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError (error: any) {
    console.error(error);
    return throwError(error);
  }
}
