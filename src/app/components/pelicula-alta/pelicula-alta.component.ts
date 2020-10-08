import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';
import { MoviesService } from '../../services/movies.service';
import { tipoPelisEnum, tipoPelisEnumLabels } from '../../enums/movieEnum';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css'],
})
export class PeliculaAltaComponent implements OnInit {

  tipoPelisEnum = tipoPelisEnum;
  tipoPelisLabels = tipoPelisEnumLabels;

  archivoParaSubir: File = null;
  public baseActores = [];

  public nombrePeli: string;
  public tipoPeli: string;
  public urlFoto: string;
  public cantEspectador: number;
  public fechaEstreno: Date = new Date();
  public reparto = new Array();

  constructor(
    private datepipe: DatePipe,
    public toastr: ToastrService,
    private router: Router,
    public servicioActores: ActorsService,
    public servicioPeliculas: MoviesService
  ) {}

  ngOnInit(): void {
    this.getColeccionActualizada();
  }

  getColeccionActualizada() {
    this.servicioActores
      .getElements()
      .get()
      .then((snapshot) => {
        this.baseActores = [];
        snapshot.docs.map((element: any) => {
          this.servicioActores.getActorPhoto(element.data().fotoActor).then((url) => {
            this.baseActores.push({
              id: element.id,
              data: element.data(),
              foto: url,
            });
          });
        });
      });
  }

  getTipoPeliValue(value) {
    console.log(value);
    this.tipoPeli = value;
  }

  handlerCambioFecha(date) {}

  handlerArchivoInput(files: FileList) {
    this.archivoParaSubir = files.item(0);
  }

  handleActorSelection(actor) {
    if (!this.reparto.includes(actor.id)) {
      this.toastr.success('Actor registrado en el reparto');
      this.reparto.push(actor.id);
    } else {
      this.toastr.error('Actor ya seleccionado');
    }
  }

  uploadNewMovie(): void {
    try {
      this.servicioPeliculas.createElement(
        {
          nombre: this.nombrePeli,
          tipo: this.tipoPeli,
          fechaDeEstreno: new Date(this.fechaEstreno),
          cantidadDePublico: this.cantEspectador,
          fotoDeLaPelicula: '',
          reparto: this.reparto,
        },
        this.archivoParaSubir
      );
      this.toastr.success('Pelicula Guardada.');
      this.router.navigate(['/busqueda']);
    } catch (error) {
      this.toastr.error('Error al guardar pelicula');
    }
  }
}
