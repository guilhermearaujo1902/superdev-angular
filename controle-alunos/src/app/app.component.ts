import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listaEstudantes: any[] = [
    {
      nome: 'Harry',
      matricula: 111,
      email: 'harry@hogwarts.com',
      status: true,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    },
    {
      nome: 'Hermione',
      matricula: 222,
      email: 'hermione@hogwarts.com',
      status: true,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    }
  ];

}
