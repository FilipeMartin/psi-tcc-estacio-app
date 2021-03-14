import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


interface Profile {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
