import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from './auth.service';

import { map } from 'rxjs/operators';

import { ClienteInterface } from '../../../src/app/models/cliente-inteface';

import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  clients: Observable<any>;
  client: Observable<any>;

  constructor( private http: HttpClient, private authService: AuthService ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type" : "aplication/json",
    Authorization : this.authService.getToken()
  });

  getAllClients(){
    const url_api = "http://localhost:3000/api/clientes?access_token=J7MVqYPsEPoG4vAn7qanAGM0kOGNTByRhYsCagjln6vgNVJNH3FSqU51JYswEaEE";
    return (this.http.get(url_api));
  }
  getClientById(id: string){
    const url_api = `http://localhost:3000/api/clientes/${id}`;
    return (this.client= this.http.get(url_api));
  }
  saveCliente(cliente:ClienteInterface){
    let token=this.authService.getToken();
    const url_api = `http://localhost:3000/api/clientes?acces_token=${token} `;
    return this.http.post<ClienteInterface>(url_api, cliente,{ headers: this.headers })
    .pipe(map(data => data));
  }

  updateClient(cliente){
    let token=this.authService.getToken();
    const url_api = `http://localhost:3000/api/clientes?acces_token=${token}`;
    return this.http.put<ClienteInterface>(url_api, cliente,{ headers: this.headers })
    .pipe(map(data => data));
  }
  deleteClient(id: string){
    let token=this.authService.getToken();
    const url_api = `http://localhost:3000/api/clientes/${id} `;
    return this.http.delete<ClienteInterface>(url_api,{ headers: this.headers })
    .pipe(map(data => data));
  }
}
