import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Http2ServerRequest } from 'http2';
import { Pais } from '../classes/pais';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  constructor(private httpClient:HttpClient) {
  }

  getPaises()
  {
    return this.httpClient.get('https://restcountries.eu/rest/v2/region/americas');
  }
}
