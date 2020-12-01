import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-tabla-peli-detalle',
  templateUrl: './tabla-peli-detalle.component.html',
  styleUrls: ['./tabla-peli-detalle.component.css']
})
export class TablaPeliDetalleComponent implements OnInit {
  @Input() actorsCollection: any[];
  @Input() moviesCollection: any[];

  constructor(public actorsService: ActorsService, public datepipe: DatePipe) {
    this.moviesCollection = [];
  }

  ngOnInit(): void {
  }
}
