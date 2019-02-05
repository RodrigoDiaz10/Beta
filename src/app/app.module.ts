import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaPagosComponent } from './tabla-pagos/tabla-pagos.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';
import { TablaAsistenciasComponent } from './tabla-asistencias/tabla-asistencias.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes} from "@angular/router";


import { HttpClientModule } from '@angular/common/http';
//service
import { DataApiService } from './services/data-api.service';

const appRoutes: Routes = [
  { path: '', component: ListadoPersonasComponent, data: { title: 'ListadoPersonas Component' } },
  { path: 'listado-personas', component: ListadoPersonasComponent, data: { title: 'ListadoPersonas Component' } },
  { path: 'registro-formulario', component: RegistroFormularioComponent, data: { title: 'RegistroFormulario Component' } },
  { path: 'tabla-pagos', component: TablaPagosComponent, data: { title: 'TablaPagos Component' } }
];

@NgModule({
  declarations: [
    AppComponent,
    TablaPagosComponent,
    RegistroFormularioComponent,
    TablaAsistenciasComponent,
    ListadoPersonasComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
