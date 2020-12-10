import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-lista-actor-detalle',
  templateUrl: './lista-actor-detalle.component.html',
  styleUrls: ['./lista-actor-detalle.component.css']
})
export class ListaActorDetalleComponent implements OnInit {

  @Input() actorsCollection: any[];
  @Input() boton: boolean = false;
  @Output() selectedActor: EventEmitter<Actor> = new EventEmitter<Actor>();

  constructor(public actorsService: ActorsService, public datepipe: DatePipe) {}

  ngOnInit(): void {}

  selectActor(actor) {
    this.selectedActor.emit(actor);
  }
}
