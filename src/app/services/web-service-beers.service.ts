import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebServiceBeersService {

  private URL:string = "https://api.punkapi.com/v2/beers";

  constructor(private http: HttpClient) { }


  // função (método) terá um retorno do tipo Observable
  getBeers(param:string):Observable<any> {
    const url = `${this.URL}/${param}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`O parametro requisitado foi: ${param} pela URL: ${url}`)),
      catchError(this.handleError<any>(`Falha no getMovies parametro = ${param}`))
    );
  }

  // método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(error); // log do erro na console

      // mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}