import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablaPagosDataSource } from './tabla-pagos-datasource';

@Component({
  selector: 'app-tabla-pagos',
  templateUrl: './tabla-pagos.component.html',
  styleUrls: ['./tabla-pagos.component.css']
})
export class TablaPagosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablaPagosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TablaPagosDataSource(this.paginator, this.sort);
  }
}
