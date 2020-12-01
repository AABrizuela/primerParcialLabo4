import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/classes/actor';

@Component({
  selector: 'app-tabla-actores-controles-detalle',
  templateUrl: './tabla-actores-controles-detalle.component.html',
  styleUrls: ['./tabla-actores-controles-detalle.component.css']
})
export class TablaActoresControlesDetalleComponent implements OnInit {
  @Input() actorsCollection: any[];
  @Input() showUpdateAndDeleteControls: boolean;
  @Output() countryEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() movieEmitter: EventEmitter<Actor> = new EventEmitter<Actor>();

  @Output() viewEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  emitView(actor: Actor) {
    this.viewEmitter.emit(actor);
  }
  emitCountry(actor: Actor) {
    this.countryEmitter.emit(actor);
  }
  emitMovie(actor: Actor) {
    this.movieEmitter.emit(actor);
  }
}
