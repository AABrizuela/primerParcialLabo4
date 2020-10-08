import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListaControlesComponent } from './components/actor-lista-controles/actor-lista-controles.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'alta-pelicula', component: PeliculaAltaComponent },
  { path: 'listado-peliculas', component: PeliculaListadoComponent },
  { path: 'alta-actor', component: ActorAltaComponent },
  { path: 'listado-actores', component: ActorListaControlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
