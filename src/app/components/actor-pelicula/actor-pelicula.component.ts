import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  public elementToCountry: any;
  public elementToMovie: any;
  public elementToView: any;
  public elementos = [];
  public peliculas = [];

  constructor(private actorsService: ActorsService, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.getUpdatedCollection();
    this.getUpdatedCollectionMovies();
  }

  handleCambiarVista() {}

  handleSelectElementForMovie(event) {
    console.log(event);
    this.elementToMovie = event;
  }
  handleSelectElementForView(event) {
    this.elementToView = event;
  }
  handleSelectElementForCountry(event) {
    this.elementToCountry = event.data.nacionalidad;
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
