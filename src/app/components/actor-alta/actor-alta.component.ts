import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaisesService } from 'src/app/services/paises.service';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css'],
})
export class ActorAltaComponent implements OnInit {

  private archivoParaSubir: File;
  public nombre: string;
  public apellido: string;
  public genero: string;
  public urlFoto: string;
  public fechaNacimiento: Date = new Date();
  public nacionalidad;

  public paisArray = new Array();
  public basePaises = [];

  constructor(
    public servicioActores: ActorsService,
    private toastr: ToastrService,
    private router: Router,
    public servicioPaises: PaisesService,
  ) {
    this.servicioPaises.getPaises().subscribe((datos:any) => {
      this.basePaises = datos;
    })
  }

  ngOnInit(): void {
    this.getColeccionActualizada();
  }

  getGenero(data) {
    this.genero = data;
  }

  handlerArchivoInput(files: FileList) {
    this.archivoParaSubir = files.item(0);
  }

  handlerCambioFecha(date) {}

  guardarActorNuevo() {
    try {
      this.servicioActores.createElement(
        {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaDeNacimiento: new Date(this.fechaNacimiento),
          sexo: this.genero,
          foto: '',
          nacionalidad: this.nacionalidad
        },
        this.archivoParaSubir
      );
      console.log(this.nacionalidad);
      this.toastr.success('Actor Guardado');
      this.router.navigate(['/listado-actores']);
    } catch (error) {
      this.toastr.error('Error al guardar');
    }
  }

  handlePaisSelection(pais) {
    if (!this.paisArray.includes(pais.id)) {
      this.toastr.success('Nacionalidad seleccionada');
      this.nacionalidad = pais.id;
      console.log(this.nacionalidad);
    } else {
      this.toastr.error('Nacionalidad ya seleccionada');
    }
  }

  getColeccionActualizada() {
    // console.log(this.servicioPaises.getPaises());
    // this.basePaises = this.servicioPaises.getPaises();
  }
}
