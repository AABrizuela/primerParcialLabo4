import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  @Input() inputElementoDetalle: any;
  @Input() inputMostrarBorrar: boolean;
  @Output() outputDeletedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public nombrePeli: string;
  public tipoPeli: string;
  public urlFoto: string;
  public cantEspectador: string;
  public fechaEstreno: string;

  constructor(
    public datepipe: DatePipe,
    public servicioPelicula: MoviesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.nombrePeli = this.inputElementoDetalle?.data.nombre;
    this.tipoPeli = this.inputElementoDetalle?.data.tipo;
    this.urlFoto = this.inputElementoDetalle?.data.fotoDeLaPelicula;
    this.cantEspectador = this.inputElementoDetalle?.data.cantidadDePublico;
    this.fechaEstreno = this.datepipe.transform(
      this.inputElementoDetalle?.data.fechaDeEstreno.toDate(),
      'dd/MM/yyyy'
    );
  }

  borrarElemento(): void {
    try {
      this.servicioPelicula.borrarElemento(this.inputElementoDetalle.id);
      this.outputDeletedElement.emit(true);
      this.inputElementoDetalle = undefined;
      this.toastr.success('Pelicula Borrada');
    } catch (error) {
      this.toastr.error('Error al Eliminar Pelicula ');
      console.log(error.message || 'Error al Eliminar.');
    }
  }

  limpiarCampos(): void {
    this.inputElementoDetalle = null;
    this.nombrePeli = '';
    this.tipoPeli = '';
    this.urlFoto = '';
    this.cantEspectador = '';
    this.fechaEstreno = '';
  }
}
