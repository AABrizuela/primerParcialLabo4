import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-lista-controles',
  templateUrl: './actor-lista-controles.component.html',
  styleUrls: ['./actor-lista-controles.component.css'],
})
export class ActorListaControlesComponent implements OnInit {
  public elementToDelete: any;
  public elementToModify: any;
  public elementToView: any;
  public elementos = [];

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.getUpdatedCollection();
  }

  handleCambiarVista() {}
  handleSelectElementForEdit(event) {
    this.elementToModify = event;
  }
  handleSelectElementForView(event) {
    this.elementToView = event;
  }
  handleSelectElementForDelete(event) {
    this.elementToDelete = event;
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
}
