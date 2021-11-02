import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CargaExercicio } from '../interfaces/exercicio';
import { Avaliacao } from '../interfaces/avaliacao';
import { sanitizeQuery } from '../core/functions';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
      private http: HttpClient,
      private authService: AuthService
    ) {
    }

    async getCargaExercicio(): Promise<CargaExercicio> {
      const aluno = this.authService.getAluno();
      const append = sanitizeQuery({alunoId: aluno.id});
      return await this.http.get<CargaExercicio>(`carga-exercicio/${append}`).toPromise();
    }

    async getAvaliacoes(): Promise<Array<Avaliacao>> {
      const aluno = this.authService.getAluno();
      const append = sanitizeQuery({alunoId: aluno.id});
      return await this.http.get<Array<Avaliacao>>(`avaliacoes${append}`).toPromise();
    }

}
