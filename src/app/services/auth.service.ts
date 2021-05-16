import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Aluno } from '../interfaces/aluno';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;
const storageKey = "alunoLogado";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  private aluno: Aluno;
  public actionLogin: EventEmitter<Aluno> = new EventEmitter<Aluno>();

  constructor(private http: HttpClient, protected router: Router) {
    try {
      const alunoLogado = localStorage.getItem(storageKey);

      if(alunoLogado) {
        this.aluno = JSON.parse(alunoLogado);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  get isLoggedIn() {
    return this.aluno != null;
  }

  getAluno() {
    return (this.aluno) || null;
  }

  async login(login: string, senha: string) {
    let success = false;

    await this.http.post<Aluno>('login', {login, senha}).toPromise()
      .then((aluno: Aluno) => {
        this.aluno = aluno;
        localStorage.setItem(storageKey, JSON.stringify(aluno));
        this.actionLogin.emit(aluno);
        success = true;
      })
      .catch(e => {
        console.log(e.message);
      });

    return success;
  }

  async logout() {
    this.aluno = null;
    localStorage.removeItem(storageKey);
    sessionStorage.removeItem(storageKey);
    await App.exitApp();
  }

}
