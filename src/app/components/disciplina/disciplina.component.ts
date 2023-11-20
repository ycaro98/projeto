import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/interfaces/disciplina';
import { DisciplinaService } from 'src/app/services/DisciplineService';


@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class ListaDisciplinasComponent implements OnInit {
  disciplinas: Disciplina[] = [
    { id: 1, nomeDisciplina: 'Laboratório de Inovação IV', descricao:'nada' },
    { id: 2, nomeDisciplina: 'Programação Orientada a Objeto II', descricao:'nada' }
  ];

  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(): void {
    this.disciplinaService.listarDisciplinas().subscribe(
      disciplinas => {
        this.disciplinas = disciplinas;
      },
      error => {
        console.error('Erro ao carregar disciplinas:', error);
      }
    );
  }
}

