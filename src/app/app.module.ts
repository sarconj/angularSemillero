import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ResaltarDirective } from './core/directives/resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    HeaderComponent,
    FooterComponent,
    InicioSesionComponent,
    PaginaPrincipalComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
