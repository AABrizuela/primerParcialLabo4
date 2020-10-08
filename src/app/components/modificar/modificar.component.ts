import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringLiteral } from 'typescript';
import { MoviesService } from '../../services/movies.service';
import { movieTypesEnum, movieTypesEnumLabels } from '../../enums/movieEnum';
import { ToastrService } from 'ngx-toastr';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  @Input() inputElementToModify: any;
  @Output() outputModifiedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public movieName: string;
  public movieType: string;
  public photoUrl: string;
  public spectatorCount: string;
  public releaseDate: string;
  public actorLastName: string;
  public nationality: string;
  private fileToUpload: File;

  movieTypesEnum = movieTypesEnum;
  movieTypesLabels = movieTypesEnumLabels;
  movieTypeSelection: string;

  constructor(
    private movieService: MoviesService,
    private datepipe: DatePipe,
    private toastr: ToastrService,
    private actorsService: ActorsService
  ) {}

  ngOnInit(): void {
    this.movieTypeSelection = this.movieTypesEnum.SINCLASIFICACION;
  }

  ngOnChanges(): void {
    this.movieName = this.inputElementToModify?.data.nombre;
    this.movieType = movieTypesEnum[this.inputElementToModify?.data.tipo];
    this.actorLastName = this.inputElementToModify?.data.apellido;
    this.movieTypeSelection = movieTypesEnum[this.movieType];
    this.photoUrl = this.inputElementToModify?.data.fotoDeLaPelicula;
    this.spectatorCount = this.inputElementToModify?.data.cantidadDePublico;
    this.nationality = this.inputElementToModify?.data.nacionalidad;
    this.releaseDate = this.datepipe.transform(
      this.inputElementToModify?.data.fechaDeNacimiento.toDate(),
      'yyyy-MM-dd'
    );
  }

  modifyElement(inputElementToModify) {
    try {
      this.actorsService.modifyElement(
        {
          id: inputElementToModify.id,
          data: {
            nombre: this.movieName,
            apellido: this.actorLastName,
            fechaDeNacimiento: new Date(this.releaseDate),
            nacionalidad: this.nationality,
          },
        },
        this.fileToUpload
      );
      this.outputModifiedElement.emit(true);
      this.inputElementToModify = undefined;
      this.toastr.success('Cambios Guardados');
    } catch (error) {
      this.toastr.error('Error al guardar los cambios');
      console.log(
        error.message || 'Error al escribir las modificaciones en la base.'
      );
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  getMovieTypeValue(value) {
    this.movieType = value;
  }
}
