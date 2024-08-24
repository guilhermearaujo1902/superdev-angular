import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudante } from '../../interfaces/Estudante';

@Component({
  selector: 'app-estudante-lista',
  templateUrl: './estudante-lista.component.html',
  styleUrl: './estudante-lista.component.css'
})
export class EstudanteListaComponent {

  @Output()
  excluir: EventEmitter<number> = new EventEmitter();

  @Input()
  lista: Estudante[] = [];

  excluirEstudante(matricula: number): void {
    this.excluir.emit(matricula);
  }

}
