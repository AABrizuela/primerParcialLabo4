import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css'],
})
export class ActorAltaComponent implements OnInit {
  private fileToUpload: File;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public photoUrl: string;
  public dateOfBirth: Date = new Date();
  public nationality: string;

  constructor(
    public actorsService: ActorsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  actorForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    genero: new FormControl(''),
    fechaNac: new FormControl(''),
  });

  ngOnInit(): void {}

  getGenderValue(data) {
    this.gender = data;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  handleDateChange(date) {}

  uploadNewActor() {
    try {
      this.actorsService.createElement(
        {
          nombre: this.actorForm.value.nombre,
          apellido: this.actorForm.value.apellido,
          fechaDeNacimiento: new Date(this.actorForm.value.fechaNac),
          sexo: this.actorForm.value.genero,
          nacionalidad: this.nationality,
          foto: '',
        },
        this.fileToUpload
      );
      this.toastr.success('Actor Guardado');
      this.router.navigate(['/listado-actores']);
    } catch (error) {
      this.toastr.error('Error al guardar');
    }
  }

  registerCountry(data) {
    if (this.nationality != data.name) {
      this.nationality = data.name;
      this.toastr.success('Pais asignado al actor.');
    } else {
      this.toastr.error('Pais ya asignado a este actor.');
    }
  }
}
