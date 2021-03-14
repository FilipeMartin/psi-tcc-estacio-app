import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


interface Profile {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {

  exercise: Exercise = {
    id: 1,
    name: "Desenvolvimento com barra",
    repetition: 10,
    repetitionQtd: 3,
    url: "assets/halteres.png"
  };

  user: User;
  profile: Array<Profile>;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();

    this.profile = [
      {text: this.user.name, icon: "person-circle-outline"},
      {text: this.user.email, icon: "mail-outline"},
      {text: this.user.phone, icon: "call-outline"},
      {text: `${this.user.age} anos`, icon: "hourglass-outline"},
    ];
  }

  ngOnInit() {
  }

}
