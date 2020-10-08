import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringLiteral } from 'typescript';
import { MoviesService } from '../../services/movies.service';
import { tipoPelisEnum, tipoPelisEnumLabels } from '../../enums/movieEnum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  @Input() inputElementoParaModificar: any;
  @Output() outputElementoModificado: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  tipoPelisEnum = tipoPelisEnum;
  tipoPelisLabels = tipoPelisEnumLabels;
  tipoPeliSelection: string;

  public nombrePeli: string;
  public tipoPeli: string;
  public urlFoto: string;
  public cantEspectador: number;
  public fechaEstreno: string;

  private archivoParaSubir: File;

  constructor(
    private servicioPelicula: MoviesService,
    private datepipe: DatePipe,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tipoPeliSelection = this.tipoPelisEnum.SINCLASIFICACION;
  }

  ngOnChanges(): void {
    this.nombrePeli = this.inputElementoParaModificar?.data.nombre;
    this.tipoPeli = tipoPelisEnum[this.inputElementoParaModificar?.data.tipo];

    this.tipoPeliSelection = tipoPelisEnum[this.tipoPeli];
    this.urlFoto = this.inputElementoParaModificar?.data.fotoDeLaPelicula;
    this.cantEspectador = this.inputElementoParaModificar?.data.cantidadDePublico;
    this.fechaEstreno = this.datepipe.transform(
      this.inputElementoParaModificar?.data.fechaDeEstreno.toDate(),
      'yyyy-MM-dd'
    );
  }

  getTipoPeliValue(value) {
    this.tipoPeli = value;
  }

  handlerArchivoInput(files: FileList) {
    this.archivoParaSubir = files.item(0);
  }

  modificarElemento(inputElementoParaModificar) {
    try {
      this.servicioPelicula.modificarElemento(
        {
          id: inputElementoParaModificar.id,
          data: {
            nombre: this.nombrePeli,
            tipo: this.tipoPeli,
            cantidadDePublico: this.cantEspectador,
            fechaDeEstreno: new Date(this.fechaEstreno),
            fotoDeLaPelicula: this.urlFoto,
          },
        },
        this.archivoParaSubir
      );
      this.outputElementoModificado.emit(true);
      this.inputElementoParaModificar = undefined;
      this.toastr.success('Cambios Guardados');
    } catch (error) {
      this.toastr.error('Error al guardar los cambios');
      console.log(
        error.message || 'Error al escribir las modificaciones en la base.'
      );
    }
  }
}
