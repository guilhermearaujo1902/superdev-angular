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
      status: false,
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
    },
    {
      nome: 'Luna Lovegood',
      matricula: 444,
      email: 'luna@hogwarts.com',
      imagem: '../../../assets/img/user3.png',
      status: true,
      cursos: ['HTML', 'CSS', 'Angular'],
      escola: {
        nome: 'Proway',
        cidade: 'Blumenau'
      }
    }
  ];

  backupLista: Estudante[] = this.listaEstudantes;

  exibicao: string = 'lista';

  alterarExibicao(): void {
    if (this.exibicao == 'cards') {
      this.exibicao = 'lista';
    } else {
      this.exibicao = 'cards';
    }
  }

  exibirAprovados(): void {

    // Reiniciar a lista
    this.exibirTodos();

    // Maneira 1
    // Utilizando o método 'filter' do tipo de dado Array
    this.listaEstudantes = this.listaEstudantes.filter( estudante => {
      return estudante.status == true;
    });


    // Maneira 2
    // Utilizando o método 'forEach'
    // criando a lista de aprovados
    // const listaAprovados: Estudante[] = [];

    // // percorrendo a lista atual
    // this.listaEstudantes.forEach( estudante => {
    //   // testando se cada aluno está com status true
    //   if (estudante.status == true) {
    //     // inserindo na lista de aprovados somente o estudande com o status TRUE
    //     listaAprovados.push(estudante);
    //   }
    // });

    // // reatribuindo valor para a lista atual com base nos estudantes da lista de aprovados
    // this.listaEstudantes = listaAprovados;

  }

  exibirReprovados(): void {
    this.exibirTodos();
    this.listaEstudantes = this.listaEstudantes.filter( estudante => {
      return estudante.status == false;
    });
  }

  exibirTodos(): void {
    this.listaEstudantes = this.backupLista;
  }

  onExcluir(matricula: number): void {
    
    // Encontrar o index do aluno com a matrícula igual ao parâmetro recebido
    const indexEstudante = this.listaEstudantes.findIndex(estudante => {
      return estudante.matricula === matricula;
    });

    if (indexEstudante >= 0) {
      this.listaEstudantes.splice(indexEstudante, 1);
    }

  }

}
