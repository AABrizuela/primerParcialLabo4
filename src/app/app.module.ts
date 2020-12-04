import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { DatePipe } from '@angular/common';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ActorsService } from './services/actors.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from './services/pais.service';
import { ActorListaControlesComponent } from './components/actor-lista-controles/actor-lista-controles.component';
import { TablaActoresControlesComponent } from './components/tabla-actores-controles/tabla-actores-controles.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { TablaPeliDetalleComponent } from './components/tabla-peli-detalle/tabla-peli-detalle.component';
import { TablaActoresControlesDetalleComponent } from './components/tabla-actores-controles-detalle/tabla-actores-controles-detalle.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { PaisPeliculaComponent } from './components/pais-pelicula/pais-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { QuintaParteComponent } from './components/quinta-parte/quinta-parte.component';
import { ListaActorDetalleComponent } from './components/lista-actor-detalle/lista-actor-detalle.component';
import { DetalleVerificarComponent } from './components/detalle-verificar/detalle-verificar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaPeliculaComponent,
    BusquedaComponent,
    DetalleComponent,
    BorrarComponent,
    ModificarComponent,
    TablaActorComponent,
    PeliculaAltaComponent,
    BienvenidoComponent,
    NavBarComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    ListaPaisesComponent,
    ActorListaControlesComponent,
    TablaActoresControlesComponent,
    DetallePeliculaComponent,
    ActorPeliculaComponent,
    TablaPeliDetalleComponent,
    TablaActoresControlesDetalleComponent,
    DetallePaisComponent,
    PaisPeliculaComponent,
    TablaPaisesComponent,
    QuintaParteComponent,
    ListaActorDetalleComponent,
    DetalleVerificarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [MoviesService, DatePipe, ActorsService, PaisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
