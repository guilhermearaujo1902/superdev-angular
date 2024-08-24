import { Component, Input } from '@angular/core';
import { Estudante } from '../../interfaces/Estudante';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrl: './estudante-form.component.css'
})
export class EstudanteFormComponent {

  @Input()
  estudante: Estudante = {
    nome: '',
    matricula: 0,
    email: '',
    imagem: '',
    status: false,
    cursos: [],
    escola: undefined
  };

}
