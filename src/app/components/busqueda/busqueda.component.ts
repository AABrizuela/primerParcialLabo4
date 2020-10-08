import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  constructor(private servicioPeliculas: MoviesService) {}
  public elements = [];
  public imagesPictures;

  public elementoParaBorrar: any;
  public elementoParaModificar: any;
  public elementoDetalle: any;
  public deletedElement: boolean;
  public busqueda = false;
  public controlesIsFull = true;
  ngOnInit(): void {
    this.getColeccionActualizada();
  }

  handleCambiarVista() {}
  handlerelementoParaModificar(event) {
    this.elementoParaModificar = event;
  }
  handlerElementoDetalle(event) {
    this.elementoDetalle = event;
  }
  handlerElementoBorrar(event) {
    this.elementoParaBorrar = event;
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
