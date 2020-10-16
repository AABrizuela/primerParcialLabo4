import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/classes/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() inputPaises:Array<any>;
  @Output() outputPaises :EventEmitter<any> = new EventEmitter<any>();
  @Input() botonTablaPaises:boolean;

  constructor(public servicioPaises: PaisesService) {
    
   }

  ngOnInit(): void {
  }

  detalles(pais:Pais)
  {
    this.outputPaises.emit(pais);
  }
}
