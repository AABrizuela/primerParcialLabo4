import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { MoviesService } from 'src/app/services/movies.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-pais-pelicula',
  templateUrl: './pais-pelicula.component.html',
  styleUrls: ['./pais-pelicula.component.css']
})
export class PaisPeliculaComponent implements OnInit {

  public elementToMovies: any;
  public elementToView: any;
  public elementToActors: any;
  elementos = [];
  elementosFiltrados = [];
  peliculas = [];
  peliculasFiltradas = [];
  actores = [];
  actoresFiltrados = [];

  constructor( private countryService: PaisService, private moviesService: MoviesService, private actorsService: ActorsService ) { }

  ngOnInit(): void {
    this.getCountryCollection()
  }

  getCountryCollection()
  {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.elementos = countries;

      countries.forEach((country) => {
        if (country.region === 'Americas') {
          this.elementosFiltrados.push(country);
        }
      });
    });
  }

  handleSelectedElementForMovies(event)
  {
    this.moviesService
      .getElements()
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          this.peliculasFiltradas.push(element);
        });
        this.peliculasFiltradas = this.peliculasFiltradas.filter((pelicula) => {
          if(pelicula.data().nationality == event)
          {
            return pelicula;
          }
        });
        this.elementToMovies = this.peliculasFiltradas;
      });
  }

  handleSelectedElementForActors(event)
  {
    this.actorsService
      .getElements()
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          this.actoresFiltrados.push(element);
        });
        this.actoresFiltrados = this.actoresFiltrados.filter((actor) => {
          if(actor.data().nacionalidad == event)
          {
            return actor;
          }
        });
        this.elementToActors = this.actoresFiltrados;
      });
  }

  handleSelectedElementForView(event)
  {
    this.elementToView = event;
  }
}
