import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercicio } from 'src/app/interfaces/exercicio';
import { environment } from 'src/environments/environment.prod';

interface List {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {

  exercicio: Exercicio;
  list: Array<List>;

  constructor(private route: ActivatedRoute) {
    this.exercicio = JSON.parse(this.route.snapshot.params['exercicio']);
    this.exercicio.caminhoVideo = environment.base_url + this.exercicio.caminhoVideo;

    this.list = [
      {text: this.exercicio.nome, icon: "barbell-outline"},
      {text: `${this.exercicio.quantidadeRepeticoes} X ${this.exercicio.quantidadeSeries} Reps`, icon: "accessibility-outline"}
    ];
  }

  ngOnInit() {
  }

}
