import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercicio } from 'src/app/interfaces/exercicio';
import { environment } from 'src/environments/environment.prod';

interface List {
  title: string;
  text: string | number;
}

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {

  professor: any = {
    nome: 'Nome Professor',
    email: 'professor@gmail.com',
    telefone: '(21) 99639-6999'
  };
  exercicio: Exercicio;
  list: Array<List>;

  constructor(private route: ActivatedRoute) {
    this.exercicio = JSON.parse(this.route.snapshot.params['exercicio']);
    this.exercicio.caminhoVideo = environment.base_url + this.exercicio.caminhoVideo;

    this.list = [
      {title: 'Série', text: `${this.exercicio.quantidadeSeries}x`},
      {title: 'Repetições', text: this.exercicio.quantidadeRepeticoes},
      {title: 'Descanço', text: `${45}s`},
      {title: 'Carga', text: `${55}kg`},
    ];
  }

  ngOnInit() {
  }

  openUrl() {
    window.open(`http://api.whatsapp.com/send?1=pt_BR&phone=${this.professor.telefone}`,'_system', 'location=yes');
  }

}
