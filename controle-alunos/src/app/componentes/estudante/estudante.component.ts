import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrl: './estudante.component.css'
})
export class EstudanteComponent {

  @Input() estudante: any = {};

}
