import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  constructor( private dataApiService: DataApiService, private location: Location) { }

  private clientes;

  getListClientes(){
    this.dataApiService
    .getAllClients()
    .subscribe((this.clientes))
  }

  ngOnInit() {
    this.getListClientes();
  }
  //
  onSave(clienteForm):void{
    this.dataApiService.saveCliente(clienteForm.value).subscribe(cliente => location.reload())
  }

  //

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}



