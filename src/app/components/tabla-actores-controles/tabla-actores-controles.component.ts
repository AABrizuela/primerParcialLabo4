import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../classes/actor';

@Component({
  selector: 'app-tabla-actores-controles',
  templateUrl: './tabla-actores-controles.component.html',
  styleUrls: ['./tabla-actores-controles.component.css'],
})
export class TablaActoresControlesComponent implements OnInit {
  @Input() actorsCollection: any[];
  @Input() showUpdateAndDeleteControls: boolean;
  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() modifyEmitter: EventEmitter<Actor> = new EventEmitter<Actor>();

  @Output() viewEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  emitView(actor: Actor) {
    console.log(actor);
    this.viewEmitter.emit(actor);
  }
  emitDelete(actor: Actor) {
    this.deleteEmitter.emit(actor);
  }
  emitModify(actor: Actor) {
    this.modifyEmitter.emit(actor);
  }
}
