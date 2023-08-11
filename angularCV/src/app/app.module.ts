import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { PerfilPersonalComponent } from './perfil-personal/perfil-personal.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';
import { ReferenciasPersonalesComponent } from './referencias-personales/referencias-personales.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    AptitudesComponent,
    HabilidadesComponent,
    IdiomasComponent,
    PerfilPersonalComponent,
    FormacionAcademicaComponent,
    ReferenciasPersonalesComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
