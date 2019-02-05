import { Injectable } from '@angular/core';

//new

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient ) { }

  getAllClients(){
    const url_api = "http://localhost:3000/api/clientes";
    return this.http.get(url_api);
  }
}
