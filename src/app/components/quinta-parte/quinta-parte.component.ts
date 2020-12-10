import { Component, OnInit, Input } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { MoviesService } from 'src/app/services/movies.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-quinta-parte',
  templateUrl: './quinta-parte.component.html',
  styleUrls: ['./quinta-parte.component.css']
})
export class QuintaParteComponent implements OnInit {

  public elementos = [];
  public elementToView: any = '';
  public elementToActors: any = '';
  public selectedActor: any;

  public paisFiltrado: any;
  public actoresFiltrados = [];

  @Input() inputElementToView: any;

  constructor(private moviesService: MoviesService, private paisService: PaisService, private actorsService: ActorsService) { }

  ngOnInit(): void {
    this.getUpdatedCollection();
  }

  handleSelectElementForView(pelicula) {
    this.paisService.getCountries().subscribe((countries: any) => {
      countries.forEach((country) => {
        if (country.name === pelicula.data.paisDeOrigen) {
          this.elementToView = country;
        }
      });
    });
  }

  getUpdatedCollection() {
    this.moviesService
      .getElements()
      .where('isActive', '==', true)
      .get()
      .then((snapshot) => {
        this.elementos = [];
        snapshot.docs.map((element: any) => {
          const rl = this.moviesService
            .getMoviePhoto(element.data().fotoDeLaPelicula)
            .then((url) => {
              this.elementos.push({
                id: element.id,
                data: element.data(),
                movieUrl: url,
              });
            });
        });
      });
  }

  filterActor()
  {
    this.actoresFiltrados = [];

    this.actorsService
      .getElements()
      .get()
      .then((snapshot) => {
        snapshot.docs.map((element: any) => {
          this.actoresFiltrados.push(element);
        });
        this.actoresFiltrados = this.actoresFiltrados.filter((actor) => {
          if(actor.data().nacionalidad == this.elementToView.name)
          {
            return actor;
          }
        });
        this.elementToActors = this.actoresFiltrados;
      });
  }

  handleSelectedActor(event)
  {
    this.selectedActor = event;
  }
}
