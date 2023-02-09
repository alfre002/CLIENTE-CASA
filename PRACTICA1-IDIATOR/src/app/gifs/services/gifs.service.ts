import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/SearchGifsResponse.interface';
import { Gif } from '../interface/Gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //key que obtenemos en la pagina de giphy
  private apiKey: string = "th2kZqOBOlLuNy3LZnVKDPq8jANyH1ve";

  //url de la api
  private servicioUrl: string = "https://api.giphy.com/v1/gifs";

  //historial de busquedas
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    // los tres puntos es para hacer una copia del arreglo
    // y no se pueda modificar desde afuera
    return [...this._historial];
  }

  constructor( private http: HttpClient) { 
    this._historial =
      JSON.parse(localStorage.getItem('Historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('Resultados')!) || [];
   }


  buscarGifs( query: string = '' ) {

    if(!this._historial.includes(query)){
      //si no esta lo añadimos a historial al comienzo
      this._historial.unshift(query);
      //guardamos en el localstorage
      localStorage.setItem('Historial', JSON.stringify(this._historial));
    }

    //creamos un objeto para los parametros de la llamada a la api
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);
          
      this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('Resultados', JSON.stringify(this.resultados));
    });         
  }
}
