import { Injectable } from '@angular/core';

//new

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  clients: Observable<any>;
  client: Observable<any>;

  public selectedCliente={
    id:null,
    nombre:'',
    apellido:'',
    edad:''
  }

  constructor( private http: HttpClient ) { }
/*
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    Authorization: token;
  })

  getAllClients(){
    const url_api = "http://localhost:3000/api/clientes";
    return (this.http.get(url_api));
  }

  getClientById(id: string){
    const url_api = `http://localhost:3000/api/clientes/${id}`;
    return (this.client= this.http.get(url_api));
  }

  saveCliente(cliente){
    let token;
    const url_api = `http://localhost:3000/api/clientes/${id} `;
    return this.http.post(url_api cliente,{ headers: this.headers })
    .pipe(map(data))=> data));
  }

  updateClient(client){
    let token;
    const url_api = `http://localhost:3000/api/clientes/${id} `;
    return this.http.put(url_api cliente,{ headers: this.headers })
    .pipe(map(data))=> data));
  }

  deleteClient(id: string){
    let token;
    const url_api = `http://localhost:3000/api/clientes/${id} `;
    return this.http.delete(url_api cliente,{ headers: this.headers })
    .pipe(map(data))=> data));
  }*/
}
