import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/interfaces/aluno';
import { AuthService } from 'src/app/services/auth.service';


interface Profile {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  providers: [DatePipe]
})
export class InicioPage implements OnInit {

  aluno: Aluno;
  profile: Array<Profile>;

  constructor(
    private authService: AuthService,
    private datePipe: DatePipe
  ) {
    this.aluno = this.authService.getAluno();

    this.profile = [
      {text: this.aluno.nomeCompleto, icon: "person-circle-outline"},
      {text: this.aluno.email, icon: "mail-outline"},
      {text: this.aluno.telefoneCelular, icon: "call-outline"},
      {text: this.aluno.telefoneResidencial, icon: "call-outline"},
      {text: this.datePipe.transform(this.aluno.dataNascimento, "dd/MM/yyyy"), icon: "hourglass-outline"}
    ];
  }

  ngOnInit() {
  }

}
