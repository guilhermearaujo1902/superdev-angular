import { Component, Input } from '@angular/core';
import { Estudante } from '../../interfaces/Estudante';

@Component({
  selector: 'app-estudante-lista',
  templateUrl: './estudante-lista.component.html',
  styleUrl: './estudante-lista.component.css'
})
export class EstudanteListaComponent {

  @Input()
  lista: Estudante[] = [];

}
