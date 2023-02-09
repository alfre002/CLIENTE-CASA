import { Gif, SearchGifsResponse } from "../interface/gifs";
import { HttpClient, HttpParams } from '@angular/common/http';

export class GifsService {
    private apiKey : string = '1Ii99EBx25xHi1rXXtxDkOcakozWnxKj';//API key que se optiene en giphy
    private servicioUrl: string = 'https://api.giphy.com/v1/gifs';//URL llamada a la API
    private _historial : string[] = [];//Guarda el historial de búsquedas, por convención se pone _ para indicar que es privada 
    public resultados: Gif[] = [];//Hacemos uso de la interfaz Gif
    get historial() {
        return [...this._historial];
    }
    constructor( private http: HttpClient ) {
        this._historial =
        JSON.parse(localStorage.getItem('historial')!) || [];
  
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
}
buscarGifs( query: string = '' ) {
    // si el gif no está en el historial lo añado
    if(!this._historial.includes(query)) {
        this._historial.unshift(query)
        this._historial = this._historial.splice(0,10)
        localStorage.setItem('historial', JSON.stringify(this._historial))
    }
/*
fetch
("https://api.giphy.com/v1/gifs/search?api_key=LsRGOaQxDIOkxXYmt1v8yQx7fm
IiqkSs&q=perro&limit=10")
.then(resp=>{
resp.json()
.then(data=>{
console.log(data);
})
})
*/
//Creamos un objeto para los parámetros de llamada a la API
const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit', '10')
.set('q', query );
this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { 
params } )//SearchGifsResponse se obtiene de la interfaz
.subscribe( ( resp ) => {//resp es un Observable, con más funcionalidades que las Promesas
this.resultados = resp.data;
localStorage.setItem('resultados', JSON.stringify(this.resultados));
});
}
}