import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './interfaces/user';
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

  user: User;
  loginSubscribe: Subscription;

  menu: Array<MenuItem> = [
    {text: 'Início', icon: 'arrow-redo-outline', path: '/inicio'},
    {text: 'Suas Séries', icon: 'barbell-outline', path: '/series'},
    {text: 'Perfil', icon: 'person-circle-outline', path: '/perfil'},
  ];

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();

    this.loginSubscribe = this.authService.actionLogin.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.loginSubscribe.unsubscribe();
  }

}
