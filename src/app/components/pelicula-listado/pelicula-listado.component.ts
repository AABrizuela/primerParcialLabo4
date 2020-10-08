import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css'],
})
export class PeliculaListadoComponent implements OnInit {
  public elements = [];
  public elementoDetalle: any;
  @Input() inputElementoDetalle: any;
  constructor(public servicioPeliculas: MoviesService) {}
  public busqueda = true;
  ngOnInit(): void {
    this.getColeccionActualizada();
  }

  handlerElementoBorrar(pelicula) {}
  handlerElementoDetalle(pelicula) {
    this.elementoDetalle = pelicula;
  }

  getColeccionActualizada() {
    this.servicioPeliculas
      .getElements()
      .where('isActive', '==', true)
      .get()
      .then((snapshot) => {
        this.elements = [];
        snapshot.docs.map((element: any) => {
          const rl = this.servicioPeliculas
            .getMoviePhoto(element.data().foto)
            .then((url) => {
              this.elements.push({
                id: element.id,
                data: element.data(),
                movieUrl: url,
              });
            });
        });
      });
  }
}
