import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css'],
})
export class ActorListadoComponent implements OnInit {
  public baseActores = [];
  constructor(private servicioActores: ActorsService) {}

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
}
