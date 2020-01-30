import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PlantillaComponent } from './plantilla/plantilla.component';


const routes: Routes = [
  {path: '', redirectTo: 'layout', pathMatch: 'full'},
  {path: 'login', component: InicioSesionComponent},
  {path: 'layout', component: PlantillaComponent, children :[
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: PaginaPrincipalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
