import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css'],
})
export class BorrarComponent implements OnInit {
  @Input() inputElementoParaBorrar: any;
  @Output() outputDeletedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(
    private servicioPelicula: MoviesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  borrarElemento(): void {
    try {
      this.servicioPelicula.borrarElemento(this.inputElementoParaBorrar.id);
      this.outputDeletedElement.emit(true);
      this.inputElementoParaBorrar = undefined;
      this.toastr.success('Pelicula Borrada');
    } catch (error) {
      this.toastr.error('Error al Eliminar Pelicula ');
      console.log(error.message || 'Error al Eliminar.');
    }
  }
}
