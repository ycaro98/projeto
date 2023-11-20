import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/interfaces/disciplina';
import { DisciplinaService } from 'src/app/services/DisciplineService';


@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class ListaDisciplinasComponent implements OnInit {
  disciplinas: Disciplina[] = [];

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

