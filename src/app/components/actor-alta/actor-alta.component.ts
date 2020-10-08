import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public servicioActores: ActorsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
        },
        this.archivoParaSubir
      );
      this.toastr.success('Actor Guardado');
      this.router.navigate(['/listado-actores']);
    } catch (error) {
      this.toastr.error('Error al guardar');
    }
  }
}
