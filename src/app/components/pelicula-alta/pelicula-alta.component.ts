import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';
import { MoviesService } from '../../services/movies.service';
import { movieTypesEnum, movieTypesEnumLabels } from '../../enums/movieEnum';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css'],
})
export class PeliculaAltaComponent implements OnInit {
  public movieName: string;
  public movieType: string;
  public photoUrl: string;
  public spectatorCount: number;
  public releaseDate: Date = new Date();
  public reparto = new Array();
  public actoresRegistrados: string;

  fileToUpload: File = null;
  public dbActors = [];

  movieTypesEnum = movieTypesEnum;
  movieTypesLabels = movieTypesEnumLabels;

  constructor(
    public actorsService: ActorsService,
    public moviesService: MoviesService,
    private datepipe: DatePipe,
    public toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUpdatedCollection();
  }

  peliculaForm = new FormGroup({
    descripcion: new FormControl(''),
    cantidadDePublico: new FormControl(''),
    fecha: new FormControl(''),
    tipo: new FormControl(''),
  });

  uploadNewMovie(): void {
    console.log(this.peliculaForm.value);
    try {
      this.moviesService.createElement(
        {
          nombre: this.peliculaForm.value.descripcion,
          tipo: this.peliculaForm.value.tipo,
          fechaDeEstreno: new Date(this.peliculaForm.value.fecha),
          cantidadDePublico: this.peliculaForm.value.cantidadDePublico,
          fotoDeLaPelicula: '',
          reparto: this.reparto,
        },
        this.fileToUpload
      );
      this.toastr.success('Pelicula Guardada.');
      this.router.navigate(['/listado-peliculas']);
    } catch (error) {
      this.toastr.error('Error al guardar pelicula');
    }
  }

  getUpdatedCollection() {
    this.actorsService
      .getElements()
      .get()
      .then((snapshot) => {
        this.dbActors = [];
        snapshot.docs.map((element: any) => {
          this.actorsService.getActorPhoto(element.data().foto).then((url) => {
            this.dbActors.push({
              id: element.id,
              data: element.data(),
              foto: url,
            });
          });
        });
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  handleDateChange(date) {}

  getMovieTypeValue(value) {
    console.log(value);
    this.movieType = value;
  }

  handleActorSelection(actor) {
    if (!this.reparto.includes(actor.id)) {
      this.toastr.success('Actor registrado en el reparto');
      this.reparto.push(`${actor.data.apellido}`);
    } else {
      this.toastr.error('Actor ya seleccionado');
    }
  }
}
