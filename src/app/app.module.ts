import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';
import { ReferenciasComponent } from './componentes/referencias/referencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { IndexComponent } from './pantallas/index/index.component';
import { PortfolioComponent } from './pantallas/portfolio/portfolio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { LenguajesProgramacionComponent } from './componentes/lenguajes-programacion/lenguajes-programacion.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'portfolio', component: PortfolioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ExperienciaLaboralComponent,
    FormacionAcademicaComponent,
    ReferenciasComponent,
    HabilidadesComponent,
    IdiomasComponent,
    IndexComponent,
    PortfolioComponent,
    NavbarComponent,
    SidebarComponent,
    LenguajesProgramacionComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
