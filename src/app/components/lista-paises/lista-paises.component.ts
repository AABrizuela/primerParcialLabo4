import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css'],
})
export class ListaPaisesComponent implements OnInit {
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter<any>();
  public countries = [];
  public filteredCountries = [];

  constructor(private countryService: PaisService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries;

      this.countries.forEach((country) => {
        if (country.region === 'Americas') {
          this.filteredCountries.push(country);
        }
      });
    });
  }

  selectCountry(country) {
    this.selectedCountry.emit(country);
  }
}
