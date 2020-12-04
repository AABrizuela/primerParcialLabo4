import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActorsService } from 'src/app/services/actors.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle-verificar',
  templateUrl: './detalle-verificar.component.html',
  styleUrls: ['./detalle-verificar.component.css']
})
export class DetalleVerificarComponent implements OnInit {
  @Input() inputElementToView: any;
  @Input() inputShowDelete: boolean;
  @Output() outputDeletedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  public movieName: string;
  public movieType: string;
  public photoUrl: string;
  public nacionalidad: string;
  public dateOfBirth: string;
  public elenco: string;

  constructor(
    public datepipe: DatePipe,
    public movieService: MoviesService,
    public actorsService: ActorsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.movieName = this.inputElementToView?.data().nombre;
    this.movieType = this.inputElementToView?.data().apellido;
    this.nacionalidad = this.inputElementToView?.data().nacionalidad;
    this.dateOfBirth = this.datepipe.transform(
      this.inputElementToView?.data().fechaDeNacimiento.toDate(),
      'dd/MM/yyyy'
    );
    console.log(this.inputElementToView);
    console.log(this.nacionalidad);
  }

  cleanFields(): void {
    this.inputElementToView = null;
    this.movieName = '';
    this.movieType = '';
    this.photoUrl = '';
    this.nacionalidad = '';
    this.dateOfBirth = '';
  }

  deleteElement(): void {
    try {
      this.movieService.deleteElement(this.inputElementToView.id);
      this.outputDeletedElement.emit(true);
      this.inputElementToView = undefined;
      this.toastr.success('Pelicula Borrada');
    } catch (error) {
      this.toastr.error('Error al Eliminar Pelicula ');
      console.log(error.message || 'Error al Eliminar.');
    }
  }
}
