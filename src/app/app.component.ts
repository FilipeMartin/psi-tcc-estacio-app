import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from './interfaces/aluno';
import { AuthService } from './services/auth.service';
import { ApiService } from 'src/app/services/api.service';


interface MenuItem {
  text: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {

  aluno: Aluno;
  loginSubscribe: Subscription;
  showMenu: boolean = false;

  menu: Array<MenuItem> = [
    {text: 'Início', icon: 'arrow-redo-outline', path: '/inicio'},
    {text: 'Cargas de Exercícios', icon: 'barbell-outline', path: '/carga-exercicios'},
    {text: 'Avaliações', icon: 'document-text-outline', path: '/avaliacoes'},
    {text: 'Unidades', icon: 'location-outline', path: '/unidades'},
    {text: 'Consultar Professor', icon: 'logo-whatsapp', path: '/ajuda'},
  ];

  constructor(
    private authService: AuthService,
    private service: ApiService
  ) {
    this.aluno = this.authService.getAluno();

    if(this.aluno) {
      this.showMenu = true;
      this.service.verificarAvaliacao();
    }

    this.loginSubscribe = this.authService.actionLogin.subscribe((aluno: Aluno) => {
      this.aluno = aluno;
      this.showMenu = true;
      this.service.verificarAvaliacao();
    });
  }

  ngOnDestroy() {
    this.loginSubscribe.unsubscribe();
  }

}
