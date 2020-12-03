import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListaControlesComponent } from './components/actor-lista-controles/actor-lista-controles.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PaisPeliculaComponent } from './components/pais-pelicula/pais-pelicula.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { TablaActoresControlesComponent } from './components/tabla-actores-controles/tabla-actores-controles.component';
import { QuintaParteComponent } from './components/quinta-parte/quinta-parte.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'alta-pelicula', component: PeliculaAltaComponent },
  { path: 'listado-peliculas', component: PeliculaListadoComponent },
  { path: 'alta-actor', component: ActorAltaComponent },
  { path: 'listado-actores', component: ActorListaControlesComponent },
  { path: 'actor-pelicula', component: ActorPeliculaComponent },
  { path: 'pais-pelicula', component: PaisPeliculaComponent },
  { path: 'quinta-parte', component: QuintaParteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
