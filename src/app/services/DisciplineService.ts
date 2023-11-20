import { DisciplinaComponent } from './../components/disciplina/disciplina.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Disciplina} from '../interfaces/disciplina'

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:8080/disciplina'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  listarDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }

  salvarDisciplina(disciplina: Disciplina): Observable<any> {
    return this.http.post<any>(this.apiUrl, disciplina);
  }

  // Alterar disciplina
  alterarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    const url = `${this.apiUrl}`;
    return this.http.put<Disciplina>(url, disciplina);
  }

  // Excluir disciplina por ID
  excluirDisciplina(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.delete<void>(url);
  }

  // Buscar disciplina por ID
  buscarDisciplinaPorId(id: number): Observable<Disciplina> {
    const url = `${this.apiUrl}/buscarporid?iddisciplina=${id}`;
    return this.http.get<Disciplina>(url);
  }

  // Buscar disciplinas por nome
  buscarDisciplinasPorNome(nome: string): Observable<Disciplina[]> {
    const url = `${this.apiUrl}/buscarpornomedisciplina?nomeDisciplina=${nome}`;
    return this.http.get<Disciplina[]>(url);
  }

}
