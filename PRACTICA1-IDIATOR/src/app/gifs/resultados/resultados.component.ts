import { GifsService } from './../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private gifsService: GifsService) { }

  //recogemos los resultados del servicio
  get resultados() {
    return this.gifsService.resultados;
  }
}
