import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { MoviesService } from 'src/app/services/movies.service';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  public elementToCountry: any;
  public elementToMovies: any;
  public elementToView: any;
  public elementos = [];
  public peliculas = [];
  public peliculasFiltradas = [];
  public paisesFiltrados = [];

  constructor(private actorsService: ActorsService, private moviesService: MoviesService, private paisService: PaisService) {

  }

  ngOnInit(): void {
    this.getUpdatedCollection();
    this.getUpdatedCollectionMovies();
  }

  handleCambiarVista() {}

  handleSelectElementForMovie(event) {
    var param = event;
    var aux = []
    this.moviesService
      .getElements()
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          this.peliculasFiltradas.push(element);
        });
        this.peliculasFiltradas = this.peliculasFiltradas.filter((pelicula) => {
          pelicula.data().reparto.forEach(actor => {
            if(actor === param.data.apellido)
            {
              aux.push(pelicula);
            }
          });
          return aux;
        });
        this.elementToMovies = this.peliculasFiltradas;
      });
  }
  handleSelectElementForView(event) {
    this.elementToView = event;
  }
  handleSelectElementForCountry(event) {
    var param = event;
    console.log(this.paisService.getCountries());
    this.paisService.getCountries().subscribe((countries: any) => {
      this.elementos = countries;

      countries.forEach((country) => {
        if (country.name === param.data.nacionalidad) {
          this.paisesFiltrados.push(country);
        }
      });
    });
    console.log(this.paisesFiltrados);
    this.elementToCountry = this.paisesFiltrados;
  }

  getUpdatedCollection() {
    this.actorsService
      .getElements()
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          this.actorsService.getActorPhoto(element.data().foto).then((url) => {
            this.elementos.push({
              id: element.id,
              data: element.data(),
              foto: url,
            });
          });
        });
      });
  }

  getUpdatedCollectionMovies()
  {
    this.moviesService
      .getElements()
      .where('isActive', '==', true)
      .get()
      .then((snapshot) => {
        this.peliculas = [];
        snapshot.docs.map((element: any) => {
          const url = this.moviesService.getMoviePhoto(element.data().fotoDeLaPelicula).then((url) => {
            this.peliculas.push({
              id: element.id,
              data: element.data(),
              movieUrl: url,
            });
          });
        });
      });
  }

}
