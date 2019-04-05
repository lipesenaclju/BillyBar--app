import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceBeersService {

  private URL:string = "https://api.punkapi.com/v2/";

  constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get(`${this.URL}beers`);
  }
}
