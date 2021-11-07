import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Exercicio, CargaExercicio } from 'src/app/interfaces/exercicio';
import { Avaliacao } from '../interfaces/avaliacao';
import { sanitizeQuery } from '../core/functions';
import { AuthService } from './auth.service';
import { Unidade } from '../interfaces/unidade';
import * as moment from 'moment';
import { Professor } from '../interfaces/professor';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private cargaExercicios: Array<CargaExercicio>;
    private professor: Professor;

    constructor(
      private http: HttpClient,
      private authService: AuthService,
      private alertController: AlertController
    ) {
    }

    async getCargaExercicios(): Promise<Array<CargaExercicio>> {
      const aluno = this.authService.getAluno();
      const append = sanitizeQuery({alunoId: aluno.id});
      this.cargaExercicios = await this.http.get<Array<CargaExercicio>>(`carga-exercicio/${append}`).toPromise();
      return this.cargaExercicios
    }

    getCargaExercicio(id: string): CargaExercicio {
      if (this.cargaExercicios == null) {
        this.getCargaExercicios();
      }
      return this.cargaExercicios.find(c => c.id == id);
    }

    getExercicio(cargaExercicioId: string, exercicioId: string): Exercicio {
      if (this.cargaExercicios == null) {
        this.getCargaExercicios();
      }
      return this.cargaExercicios.find(c => c.id == cargaExercicioId).exercicios.find(e => e.id == exercicioId);
    }

    async getAvaliacoes(): Promise<Array<Avaliacao>> {
      const aluno = this.authService.getAluno();
      const append = sanitizeQuery({alunoId: aluno.id});
      return await this.http.get<Array<Avaliacao>>(`avaliacoes${append}`).toPromise();
    }

    async getUnidades(): Promise<Array<Unidade>> {
      return await this.http.get<Array<Unidade>>(`unidades`).toPromise();
    }

    async getProfessor(): Promise<Professor> {
      const avaliacao = (await this.getAvaliacoes())[0];
      if (avaliacao) {
        if (this.professor == null) {
          const append = sanitizeQuery({professorId: avaliacao.professorId});
          this.professor = await this.http.get<Professor>(`professores/${append}`).toPromise();
        }
        return this.professor;
      }
      return null;
    }

    async editPeso(data: any) {
      if (this.cargaExercicios != null) {
        this.cargaExercicios.map(c => {
          if (c.id == data.cargaExercicioId) {
            c.exercicios.map(e => {
              if (e.id == data.exercicioId) {
                e.peso = data.peso;
              }
              return e;
            });
          }
          return c;
        });
      }

      return await this.http.put(`carga-exercicio/editar-peso`, data).toPromise();
    }

    async verificarAvaliacao() {
      const aluno = this.authService.getAluno();
      if (aluno) {
        const avaliacao = (await this.getAvaliacoes())[0];

        if (avaliacao) {
          if (moment(avaliacao.dataAvaliacao).add(2, 'M').isBefore(moment())) {
            const nome = aluno.nomeCompleto.split(" ")[0];
            const data = moment(avaliacao.dataAvaliacao).format("DD/MM/YYYY");

            const alert = await this.alertController.create({
              header: 'Atenção',
              message: `${nome}, sua avaliação está vencida, por favor, entre em contato com o seu professor.<br><br>Última avaliação: ${data}`,
              buttons: ['OK']
            });
            await alert.present();
          }
        }
      }
    }

}
