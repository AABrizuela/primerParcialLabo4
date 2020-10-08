import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private countriesUrl = 'https://restcountries.eu/rest/v2';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.countriesUrl);
  }
}
