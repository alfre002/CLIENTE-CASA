import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

constructor(private gifsService: GifsService) {}

ngOnInit(): void {
}

  value = ''

  buscar(): void {
    this.value = this.txtBuscar.nativeElement.value
    this.gifsService.buscarGifs(this.value)
    this.value = ''
  }
}