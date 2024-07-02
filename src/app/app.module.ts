import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarEquipoComponent } from './pages/agregar-equipo/agregar-equipo.component';
import { ListarEquiposComponent } from './pages/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './pages/editar-equipo/editar-equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEquipoComponent,
    ListarEquiposComponent,
    EditarEquipoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
