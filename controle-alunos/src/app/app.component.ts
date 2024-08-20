import { Component } from '@angular/core';
import { Estudante } from './interfaces/Estudante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listaEstudantes: Estudante[] = [
    {
      nome: 'Harry Potter',
      matricula: 111,
      email: 'harry@hogwarts.com',
      imagem: '../../../assets/img/user1.png',
      status: true,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    },
    {
      nome: 'Hermione Granger',
      matricula: 222,
      email: 'hermione@hogwarts.com',
      imagem: '../../../assets/img/user3.png',
      status: true,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    },
    {
      nome: 'Rony Weasley',
      matricula: 333,
      email: 'rony@hogwarts.com',
      imagem: '../../../assets/img/user2.png',
      status: false,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    }
  ];

}
