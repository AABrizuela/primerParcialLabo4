import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() inputElementToCountry: any;

  public countryName;
  public countryCapital;
  public countrySubregion;

  constructor( private countryService: PaisService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.countryName = this.inputElementToCountry?.name;
    this.countryCapital = this.inputElementToCountry?.capital;
    this.countrySubregion = this.inputElementToCountry?.subregion;
  }

  cleanFields()
  {
    this.countryName = '';
    this.countryCapital = '';
    this.countrySubregion = '';
  }
}
