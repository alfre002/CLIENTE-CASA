import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) { }

  valor = '';

  buscar() {
    this.valor = this.txtSearch.nativeElement.value;
    this.gifsService.buscarGifs( this.valor );
    this.valor = '';
  }
}
