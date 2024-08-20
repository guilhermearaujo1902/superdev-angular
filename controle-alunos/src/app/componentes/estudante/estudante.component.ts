import { Component, Input } from '@angular/core';
import { Estudante } from '../../interfaces/Estudante';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrl: './estudante.component.css'
})
export class EstudanteComponent {

  @Input() estudante!: Estudante;

}
