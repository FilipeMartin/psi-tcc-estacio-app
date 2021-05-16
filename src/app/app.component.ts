import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aluno } from './interfaces/aluno';
import { AuthService } from './services/auth.service';


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
    {text: 'Exercícios', icon: 'barbell-outline', path: '/series'},
    {text: 'Avaliações', icon: 'document-text-outline', path: '/avaliacoes'},
  ];

  constructor(private authService: AuthService) {
    this.aluno = this.authService.getAluno();

    if(this.aluno) {
      this.showMenu = true;
    }

    this.loginSubscribe = this.authService.actionLogin.subscribe((aluno: Aluno) => {
      this.aluno = aluno;
      this.showMenu = true;
    });
  }

  ngOnDestroy() {
    this.loginSubscribe.unsubscribe();
  }

}
