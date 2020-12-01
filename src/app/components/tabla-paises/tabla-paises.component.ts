import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() paisCollection: any[];
  @Output() viewEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() actorEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() movieEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitActors(event)
  {
    this.actorEmitter.emit(event.name);
  }

  emitMovies(event)
  {
    this.movieEmitter.emit(event.name);
  }

  emitView(event)
  {
    this.viewEmitter.emit(event);
  }
}
