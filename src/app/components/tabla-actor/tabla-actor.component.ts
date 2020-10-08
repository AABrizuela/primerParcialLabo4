import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css'],
})
export class TablaActorComponent implements OnInit {
  @Input() coleccionActores: any[];
  @Output() selectedActor: EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor(public servicioActores: ActorsService, public datepipe: DatePipe) {}

  ngOnInit(): void {}

  seleccionarActor(actor) {
    this.selectedActor.emit(actor);
  }
}
