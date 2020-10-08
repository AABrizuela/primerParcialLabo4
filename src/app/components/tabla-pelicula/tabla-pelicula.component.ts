import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css'],
})
export class TablaPeliculaComponent implements OnInit {
  @Input() coleccionPeliculas: any[];
  @Input() mostrarActualizarYBorrar: boolean;
  @Output() emitterBorrar: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitterModificar: EventEmitter<Pelicula> = new EventEmitter<
    Pelicula
  >();
  @Output() emitterDetalle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  emisorDetalle(pelicula: Pelicula) {
    this.emitterDetalle.emit(pelicula);
  }
  emisorBorar(pelicula: Pelicula) {
    this.emitterBorrar.emit(pelicula);
  }
  emisorModificar(pelicula: Pelicula) {
    this.emitterModificar.emit(pelicula);
  }
}
