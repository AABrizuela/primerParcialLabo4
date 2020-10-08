import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActorsService } from '../../services/actors.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css'],
})
export class BorrarComponent implements OnInit {
  @Input() inputElementToDelete: any;
  @Output() outputDeletedElement: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(
    private movieService: MoviesService,
    private toastr: ToastrService,
    private actorsService: ActorsService
  ) {}

  ngOnInit(): void {}

  deleteElement(): void {
    try {
      this.actorsService.deleteElement(this.inputElementToDelete.id);
      this.outputDeletedElement.emit(true);
      this.inputElementToDelete = undefined;
      this.toastr.success('Actor Borrado');
    } catch (error) {
      this.toastr.error('Error al Eliminar Actor ');
      console.log(error.message || 'Error al Eliminar.');
    }
  }
}
